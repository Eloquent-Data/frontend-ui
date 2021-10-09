import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login, LoginResponse, SignUp } from './data.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken = new BehaviorSubject<string>(null);
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router) { }

    async checkAuthenticationState() {
      const token = await localStorage.getItem('eldaLmsToken');
      
      const parsedToken = JSON.parse(token);
  
      if (parsedToken) {
        console.log('parsedToken.access_token',parsedToken.access_token);
        
        this.isLoggedIn.next(true);
        this.accessToken.next(parsedToken.access_token);
  
        this.router.navigateByUrl('/')
      }
      else{
        this.router.navigateByUrl('/login');
      }
    }

    setToken(token: string){
      this.isLoggedIn.next(true);
      this.accessToken.next(token);

      this.storeToken(token);
    }
  
    private async storeToken(token: string){
      console.log('token',token);
      
      const accessToken = JSON.stringify({access_token: token});
  
      console.log('accessToken',accessToken);
      
  
      await localStorage.setItem('eldaLmsToken',accessToken)
    }
  
    /**
     * Authenticate
     */
    login(payload) {
      return this.http.post<LoginResponse>(
        `${environment.restApiUrl}/api/auth/login`,
        payload
      );
    }

    register(payload){
      return this.http.post<SignUp>(
        `${environment.restApiUrl}/api/auth/register`,
        payload
      );
    }
  
    logout(){
      // set variable to null
      this.isLoggedIn.next(false);
      this.accessToken.next(null);
  
      localStorage.removeItem('eldaLmsToken')
  
      this.router.navigateByUrl('/login')
    }
  }
  