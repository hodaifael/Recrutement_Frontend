import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entretien } from '../Entity/entretien';

@Injectable({
  providedIn: 'root'
})
export class EntretienService {

  constructor(private httpclient: HttpClient) { }

  createEntretien(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/entretien/`, data);
  }

  findEntretiens(id: any): Observable<any> {
    return this.httpclient.get<Entretien>(`${environment.baseUrl}/entretien/` + id);
  }
  findEntretiensByCandidat(id: any): Observable<any> {
    return this.httpclient.get<Entretien>(`${environment.baseUrl}/entretien/candidat/` + id);
  }

  findEntretiensById(id: any): Observable<any> {
    return this.httpclient.get<Entretien>(`${environment.baseUrl}/entretien/single/` + id);
  }


  findEntretiensByCandidatId(id: any): Observable<any> {
    return this.httpclient.get<Entretien>(`${environment.baseUrl}/entretien/candidat/` + id);
  }

  UpdateEtatToCompleted(id: any): Observable<any> {
    return this.httpclient.get<Entretien>(`${environment.baseUrl}/entretien/Completed/` + id);
  }
  UpdateEtatToRefused(id: any): Observable<any> {
    return this.httpclient.get<Entretien>(`${environment.baseUrl}/entretien/Refused/` + id);
  }

  DeleteEntretien(data: any): Observable<any> {
    return this.httpclient.get<Entretien>(`${environment.baseUrl}/entretien/delete/` + data);
  }


}