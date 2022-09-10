import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../Entity/utilisateur';
import { Formation } from '../Entity/formation';
import { Experience } from '../Entity/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private httpclient: HttpClient) { }

  addExperience(data: any): Observable<any> {
    return this.httpclient.post(`${environment.baseUrl}/experience/`, data);
  }

  deleteExperience(data: any): Observable<any> {
    return this.httpclient.get<Experience>(`${environment.baseUrl}/experience/delete/` + data);
  }

}