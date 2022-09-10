import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Request } from 'src/app/services/request.model';


@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	userEmail: string = '';
	userPwd: string = '';

	isSignedin = false;

	error: string = '';


	constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

	ngOnInit() {
		this.isSignedin = this.authService.isUserSignedin();

		if (this.isSignedin) {
			this.router.navigate(['home'])

		}
	}

	doSignin() {

		if (this.userEmail !== '' && this.userEmail !== null && this.userPwd !== '' && this.userPwd !== null) {
			const request: Request = { userEmail: this.userEmail, userPwd: this.userPwd, newuserEmail: '' };

			this.authService.signin(request).subscribe((result) => {
				this.router.navigate(['home'])
			}, () => {
				this.error = 'Either invalid credentials or something went wrong';
			});
		} else {
			this.error = 'Invalid Credentials';
		}

	}

}
