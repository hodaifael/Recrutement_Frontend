import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Offre } from '../Entity/offre';
import { OffreLike } from '../Entity/offre-like';

@Injectable({
  providedIn: 'root'
})
export class OffreService {


  constructor(private httpclient: HttpClient) { }

  createOffre(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/offre/`, data);
  }

  findListOffre(): Observable<any> {
    return this.httpclient.get<Offre>(`${environment.baseUrl}/offre/all`);
  }

  findListOffreByFilter(data: any): Observable<any> {
    return this.httpclient.post<Offre>(`${environment.baseUrl}/offre/filter/`, data);
  }

  like(like: any): Observable<any> {

    return this.httpclient.post<OffreLike>(`${environment.baseUrl}/offre/like/`, like);
  }


  findListOffrealles(): Observable<any> {
    return this.httpclient.get<Offre>(`${environment.baseUrl}/offre/alles/`);
  }

  getOffres(data: any): Observable<any> {
    return this.httpclient.get<Offre>(`${environment.baseUrl}/offre/` + data);
  }

  getOffreById(data: any): Observable<any> {
    return this.httpclient.get<Offre>(`${environment.baseUrl}/offre/single/` + data);
  }


  DeleteOffre(data: any): Observable<any> {
    return this.httpclient.get<Offre>(`${environment.baseUrl}/offre/delete/` + data);
  }


}
