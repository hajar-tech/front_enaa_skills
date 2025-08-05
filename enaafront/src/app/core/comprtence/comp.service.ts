import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface  Competence{
  code : string;
  titre : string;
  statut : string

}

@Injectable({
  providedIn: 'root'
})
export class CompService {


  constructor( private http : HttpClient ) { }

  private apiUrl = 'http://localhost/8080/competences'

  getCompetence():Observable<any>{
   return  this.http.get(this.apiUrl);
  }
}
