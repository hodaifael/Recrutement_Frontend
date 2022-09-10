import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidat } from '../Entity/candidat';
import { ResponsableRH } from '../Entity/responsable-rh';
import { Company } from '../Entity/company';

@Injectable({
  providedIn: 'root'
})
export class ResponsablerhService {

  constructor(private httpclient: HttpClient) { }

  updateCompte(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/responsableRH/`, data);
  }

  findResponsableRH(id: any): Observable<any> {
    return this.httpclient.get<ResponsableRH>(`${environment.baseUrl}/responsableRH/` + id);
  }

  createCompte(request: ResponsableRH): Observable<any> {
    return this.httpclient.post<any>(`${environment.baseUrl}/responsableRH/compte/`, request).pipe(map((resp) => {
      return resp;
    }));
  }


  uploadimage(file: File, id: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('id', id);
    const req = new HttpRequest('POST', `${environment.baseUrl}/responsableRH/image/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpclient.request(req);
  }
}
