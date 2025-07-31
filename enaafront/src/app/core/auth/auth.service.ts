import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Utilisateur {
  id? : number;
  fullname : string;
  email : string;
  password : string;
  role : string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  private apiUrl = 'http://localhost:8083/api/auth/register'

  register(user : Utilisateur): Observable<any>{
   return  this.http.post<Utilisateur>(this.apiUrl , user)

 }
}
