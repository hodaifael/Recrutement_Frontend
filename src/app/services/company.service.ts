import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../Entity/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpclient: HttpClient) { }


  createCompany(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/company/`, data);
  }


  getCompanys(): Observable<any> {
    return this.httpclient.get<Company>(`${environment.baseUrl}/company/`);

  }

  uploadimage(file: File, id: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('id', id);
    const req = new HttpRequest('POST', `${environment.baseUrl}/company/image/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpclient.request(req);
  }
}
