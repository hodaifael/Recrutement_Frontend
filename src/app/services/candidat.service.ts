import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidat } from '../Entity/candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {


  constructor(private httpclient: HttpClient) { }

  updateCompte(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/candidat/`, data);
  }

  findCandidat(id: any): Observable<any> {
    return this.httpclient.get<Candidat>(`${environment.baseUrl}/candidat/` + id);
  }





  uploadimage(file: File, id: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('id', id);
    const req = new HttpRequest('POST', `${environment.baseUrl}/image/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpclient.request(req);
  }

  findListCondidat(candidat: any): Observable<any> {

    return this.httpclient.post<Candidat>(`${environment.baseUrl}/candidat/filter/`, candidat);
  }

  findListCondidatByAll(): Observable<any> {

    return this.httpclient.get<Candidat>(`${environment.baseUrl}/candidat/all`);
  }
}
