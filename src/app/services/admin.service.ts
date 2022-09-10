import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Request } from './request.model';
import { Utilisateur } from '../Entity/utilisateur';
import { Admin } from '../Entity/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient: HttpClient) { }

  updateCompte(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/admin/`, data);
  }
  findAdmin(id: any): Observable<any> {
    return this.httpclient.get<Admin>(`${environment.baseUrl}/admin/` + id);
  }


  findListCompte(): Observable<any> {
    return this.httpclient.get(`${environment.baseUrl}/admin/`);
  }

  createCompte(request: Admin): Observable<any> {
    return this.httpclient.post<any>(`${environment.baseUrl}/admin/compte/`, request).pipe(map((resp) => {
      return resp;
    }));
  }

  uploadimage(file: File, id: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('id', id);
    const req = new HttpRequest('POST', `${environment.baseUrl}/admin/image/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpclient.request(req);
  }
}
