import { Injectable } from '@angular/core';
import { Commentaire } from '../Entity/commentaire';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private httpclient: HttpClient) { }

  createCommentaire(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/commentaire/`, data);
  }

  findCommentaireByEntretien(id: any): Observable<any> {
    return this.httpclient.get<Commentaire>(`${environment.baseUrl}/commentaire/` + id);
  }



}