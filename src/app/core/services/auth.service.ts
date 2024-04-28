import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SignUp } from '../interfaces/sign-up';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  signUpForm(rData:SignUp):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}signUp` , rData)
  }

  signInForm(rData:SignUp):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}signIn` , rData)
  }
}
