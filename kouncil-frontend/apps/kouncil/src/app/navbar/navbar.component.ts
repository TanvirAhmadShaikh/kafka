import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Backend} from '@app/common-model';
import {SearchService} from '@app/common-utils';
import {ServersService} from '@app/common-servers';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-kafka-navbar',
  template: `
    <mat-toolbar>
      <img *ngIf="backendVersion$ | async as backendVersion"
           src="assets/kouncil-logo.png" alt="logo" class="kouncil-logo"
           matTooltip="{{backendVersion}}"/>
      <a class="menu-button" mat-button disableRipple routerLinkActive="active"
         [routerLink]="['/topics']" *ngIf="isAuthenticated$ | async">Topics</a>
      <a class="menu-button" mat-button disableRipple routerLinkActive="active"
         [routerLink]="['/brokers']" *ngIf="isAuthenticated$ | async">Brokers</a>
      <a class="menu-button" mat-button disableRipple routerLinkActive="active"
         [routerLink]="['/consumer-groups']" *ngIf="isAuthenticated$ | async">Consumer Groups</a>
      <a class="menu-button" mat-button disableRipple routerLinkActive="active"
         [routerLink]="['/track']" *ngIf="isAuthenticated$ | async">Track</a>

      <mat-divider [vertical]="true"></mat-divider>

      <button class="menu-button" mat-button disableRipple (click)=goToGithub()>
        Documentation
        <mat-icon aria-hidden="false">open_in_new</mat-icon>
      </button>

      <span class="spacer"></span>

      <div class="search" *ngIf="isAuthenticated$ | async">
        <input
          accesskey="/"
          class="search-input"
          type="text"
          placeholder="Search"
          (input)="onPhraseChange($any($event).target.value)"
          [(ngModel)]="searchService.currentPhrase"
          #searchInput>
      </div>
      <mat-form-field class="servers-form-field" *ngIf="isAuthenticated$ | async">
        <mat-select
          panelClass="servers-list"
          class="select servers"
          [(value)]="servers.selectedServerId"
          (selectionChange)="serverSelectionChanged()">
          <mat-option *ngFor="let s of servers.getServers()" value="{{s.serverId}}">{{s.serverId}}
            - {{s.label}}</mat-option>
        </mat-select>
      </mat-form-field>

      <button *ngIf="isAuthenticated$ | async" class="menu-button" mat-button disableRipple
      (click)="logout()">
        Logout
        <mat-icon aria-hidden="false">logout</mat-icon>
      </button>

      <img *ngIf="(isAuthenticated$ | async) === false" src="assets/consdata-logo-color.png" alt="logo"
           class="consdata-logo"/>
    </mat-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput', {static: true}) private searchInputElementRef?: ElementRef;

  backendVersion$?: Observable<string>;
  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;

  constructor(public searchService: SearchService,
              private router: Router,
              private http: HttpClient,
              public servers: ServersService,
              public authService: AuthService) {
    router.events.subscribe(() => {
      this.searchInputElementRef?.nativeElement.focus();
    });
  }

  public serverSelectionChanged(): void {
    localStorage.setItem('lastSelectedServer', this.servers.getSelectedServerId());
    this.router.navigate([this.router.url]);
  }

  public ngAfterViewInit(): void {
    this.searchInputElementRef?.nativeElement.focus();
  }

  ngOnInit(): void {
    switch (environment.backend) {
      case Backend.SERVER: {
        this.backendVersion$ = this.http.get(`/api/info/version`, {responseType: 'text'});
        break;
      }
      case Backend.DEMO: {
        this.backendVersion$ = new Observable(observer => observer.next('DEMO'));
        break;
      }
    }
  }

  onPhraseChange(phrase: string): void {
    this.searchService.phraseChangeHandle(phrase);
  }

  goToGithub(): void {
    window.open('https://github.com/consdata/kouncil', '_blank');
  }

  logout(): void {
    this.authService.logout$().subscribe(()=>{
      this.router.navigate(['/login']);
    });
  }
}
