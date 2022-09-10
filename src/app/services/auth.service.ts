import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from './request.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Candidat } from '../Entity/candidat';
import { User } from '../Entity/user';

@Injectable({
	providedIn: 'root'
})
export class AuthService {


	constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

	signin(request: Request): Observable<any> {
		return this.http.post<any>(`${environment.baseUrl}/signin`, request, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(map((resp) => {
			console.log(resp);
			if (resp !== null) {
				sessionStorage.setItem('userEmail', request.userEmail);
				sessionStorage.setItem('token', 'HTTP_TOKEN ' + resp.token);
				sessionStorage.setItem('userRoles', resp.roles);
				sessionStorage.setItem('utilisateur_id', resp.user_id);
				if (resp.company_id !== undefined) {
					sessionStorage.setItem('company_id', resp.company_id);
				}
			}

			return resp;
		}));
	}

	signup(request: Candidat): Observable<any> {
		return this.http.post<any>(`${environment.baseUrl}/signup`, request).pipe(map((resp) => {
			return resp;
		}));
	}

	verifyCompte(code: any): Observable<any> {
		return this.http.get(`${environment.baseUrl}/verify/` + code);
	}


	UpdateCompte(request: Request): Observable<any> {
		return this.http.post<any>(`${environment.baseUrl}/update`, request).pipe(map((resp) => {
			return resp;
		}));
	}


	getAdmins(): Observable<any> {
		return this.http.get(`${environment.baseUrl}/user/admin`);
	}


	signout() {
		sessionStorage.removeItem('utilisateur_id');
		sessionStorage.removeItem('userEmail');
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('userRoles');
		sessionStorage.removeItem('company_id');
		this.router.navigate(['signin']);
	}

	isUserSignedin() {
		return sessionStorage.getItem('token') !== null;
	}

	getToken() {
		let token = sessionStorage.getItem('token') as string;
		return token;
	}

	getSignedinUser() {
		return sessionStorage.getItem('userEmail') as string;
	}

	isUtilisateur_id() {
		return sessionStorage.getItem('utilisateur_id') !== null;
	}

	isCompany_id() {
		return sessionStorage.getItem('company_id') !== null;
	}


	checktypeIfAdmin() {
		return sessionStorage.getItem('userRoles') == 'ROLE_ADMIN';
	}

	checktypeIfCondidat() {
		return sessionStorage.getItem('userRoles') == 'ROLE_CONDIDAT';
	}

	checktypeIfResponsableRH() {
		return sessionStorage.getItem('userRoles') == 'ROLE_RESPONSABLE_RH';
	}


}
