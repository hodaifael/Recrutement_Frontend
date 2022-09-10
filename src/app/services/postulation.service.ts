import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Postulation } from '../Entity/postulation';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {


  constructor(private httpclient: HttpClient) { }

  postuler(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/postulation/`, data);
  }

  getPostulation(data: any): Observable<any> {
    return this.httpclient.get(`${environment.baseUrl}/postulation/` + data);
  }



}
