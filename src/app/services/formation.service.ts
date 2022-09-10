import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../Entity/utilisateur';
import { Formation } from '../Entity/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpclient: HttpClient) { }

  addFormation(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/formation/`, data);
  }

  getFormation(data: any): Observable<any> {
    return this.httpclient.get(`${environment.baseUrl}/formation/` + data);
  }

  deleteFormation(data: any): Observable<any> {
    return this.httpclient.get<Formation>(`${environment.baseUrl}/formation/delete/` + data);
  }


}