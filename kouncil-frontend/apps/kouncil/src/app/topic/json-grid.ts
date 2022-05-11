import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { JsonGridData } from './json-grid-data';

export class Column {
  constructor(public name: string, public nameShort: string) {}
}

@Injectable()
export class JsonGrid {

  private static ROWS_LIMIT: number = 1000;
  private static FRESH_ROWS_TIMEOUT_MILLIS: number = 1000;
  private static EXPAND_LIST_LIMIT: number = 10;
  private static EXPAND_OBJECT_LIMIT: number = 100;
  private static MAX_OBJECT_DEPTH: number = 3;

  private columns: Set<Column> = new Set<Column>();
  private columnNames: Set<string> = new Set<string>();
  private rows: unknown[] = [];

  constructor(private datePipe: DatePipe) {}

  private static isScalar(propertyValue: unknown): boolean {
    return (
      typeof propertyValue === 'string' ||
      typeof propertyValue === 'number' ||
      typeof propertyValue === 'boolean'
    );
  }

  private static escapeHtml(propertyValue: unknown) {
    if (typeof propertyValue === 'string') {
      return propertyValue
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    } else {
      return propertyValue;
    }
  }

  private static limitChars(propertyValue: unknown) {
    if (typeof propertyValue === 'string') {
      return propertyValue.substr(0, 100);
    } else {
      return propertyValue;
    }
  }

  replaceObjects(objects: JsonGridData[]): void {
    this.rows.length = 0;
    const firstLoad = this.rows.length === 0;
    objects.forEach((object) => {
      try {
        const row = {};
        if (object.headers) {
          object.headers.forEach((header) => {
            const headerPath = 'H[' + header.key + ']';
            row[headerPath] = header.value;
            this.addColumn(headerPath);
          });
        }
        if (object.valueJson) {
          Object.keys(object.valueJson).forEach((propertyName) => {
            this.handleObject(
              0,
              object.valueJson[propertyName],
              row,
              propertyName
            );
          });
        }
        row['kouncilKey'] = object.key;
        row['kouncilKeyFormat'] = object.keyFormat;
        row['kouncilOffset'] = object.offset;
        row['kouncilPartition'] = object.partition;
        row['kouncilTimestamp'] = this.formatTimestamp(object.timestamp);
        row['kouncilTimestampEpoch'] = object.timestamp;
        row['kouncilValue'] = object.value;
        row['kouncilValueFormat'] = object.valueFormat;
        row['kouncilValueJson'] = object.valueJson;
        row['headers'] = object.headers;
        this.rows.unshift(row);
      } catch (e) {
        this.rows.unshift({});
      }
    });
    this.limitRows();
    if (!firstLoad) {
      if (objects.length > 0 && objects[0].timestamp) {
        const freshMessageTimestamp =
          objects[0].timestamp - JsonGrid.FRESH_ROWS_TIMEOUT_MILLIS;
        this.flagFreshRows(freshMessageTimestamp);
      }
    }
    this.sortColumns();
  }

  getColumns(): Set<Column> {
    return this.columns;
  }

  getRows(): unknown[] {
    return this.rows;
  }

  private handleObject(level: number, value: unknown, row: Record<string, unknown>, path: string): void {
    if (level > JsonGrid.MAX_OBJECT_DEPTH) {
      return;
    }
    if (JsonGrid.isScalar(value) || value === null) {
      // scalar value
      this.addColumn(path);
      row[path] = JsonGrid.escapeHtml(JsonGrid.limitChars(value));
    } else if (typeof value === 'object' && Array.isArray(value)) {
      // array
      if (value.length <= JsonGrid.EXPAND_LIST_LIMIT) {
        value.forEach((arrayValue, i) =>
          this.handleObject(level + 1, arrayValue, row, `${path}[${i}]`)
        );
      } else {
        this.addColumn(path);
        row[path] = `[Array of ${value.length} elements]`;
      }
    } else {
      // object
      if (Object.keys(value).length <= JsonGrid.EXPAND_OBJECT_LIMIT) {
        Object.keys(value).forEach((property) =>
          this.handleObject(
            level + 1,
            value[property],
            row,
            `${path}.${property}`
          )
        );
      } else {
        this.addColumn(path);
        row[path] = `[Object with ${Object.keys(value).length} properties]`;
      }
    }
  }

  private shortenPath(path: string): string {
    return path
      .split('.')
      .map((p) => {
        const indexMatch = p.match('[[0-9]+]$');
        if (path.endsWith(p)) {
          return p;
        } else if (indexMatch) {
          return `${p.substr(0, 3)}~${indexMatch[0]}`;
        } else {
          return p.substr(0, 3) + '~';
        }
      })
      .join('.');
  }

  private limitRows(): void {
    this.rows.splice(
      JsonGrid.ROWS_LIMIT,
      this.rows.length - JsonGrid.ROWS_LIMIT
    );
  }

  private sortColumns(): void {
    const sorted = new Set<Column>();
    Array.from(this.columns.values()).forEach((column) => {
      if (column.name.startsWith('H[')) {
        sorted.add(column);
      }
    });
    Array.from(this.columns.values()).forEach((column) => {
      if (column.name.indexOf('.') === -1) {
        sorted.add(column);
      }
    });
    Array.from(this.columns.values()).forEach((column) => {
      if (column.name.indexOf('.') > -1) {
        sorted.add(column);
      }
    });
    this.columns = sorted;
  }

  private flagFreshRows(freshMessageTimestamp: number): void {
    this.rows.forEach((row) => {
      row['fresh'] = row['kouncilTimestampEpoch'] > freshMessageTimestamp;
    });
  }

  private formatTimestamp(timestamp: number | null): string | null {
    if (timestamp == null) {
      return null;
    }
    return this.datePipe.transform(
      new Date(timestamp),
      'yyyy-MM-dd HH:mm:ss.SSS'
    );
  }

  private addColumn(name: string): void {
    if (!this.columnNames.has(name)) {
      this.columnNames.add(name);
      this.columns.add(new Column(name, this.shortenPath(name)));
    }
  }
}
