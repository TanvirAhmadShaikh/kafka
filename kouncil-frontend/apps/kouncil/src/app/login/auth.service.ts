import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '@app/common-login';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Backend} from '@app/common-model';
import {AuthBackendService} from './auth.backend.service';
import {AuthDemoService} from './auth.demo.service';

@Injectable()
export abstract class AuthService {

  abstract get isAuthenticated$(): Observable<boolean>;

  abstract login$(user: User): Observable<boolean>;

  abstract logout$(): Observable<void>;

  abstract github(): Observable<void>;

  abstract updateToken(token: string): void;

  abstract fetchToken(code, state): Observable<any>;

 abstract getToken(): string;
}

export function authServiceFactory(http: HttpClient): AuthService {
  switch (environment.backend) {
    case Backend.SERVER: {
      return new AuthBackendService(http);
    }
    case Backend.DEMO:
    default:
      return new AuthDemoService();
  }
}
