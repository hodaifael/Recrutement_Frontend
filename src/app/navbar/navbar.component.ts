import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userId: any;
  constructor(public authService: AuthService, private router: Router) {
    this.userId = sessionStorage.getItem('user_id');
  }

  ngOnInit(): void {
  }


  checkcreateProfile() {
    return this.router.routerState.snapshot.url !== '/createProfile'
  }
  doSignout() {
    this.authService.signout();

  }

  checkIfUtilisateur_id() {
    return this.authService.isUtilisateur_id();
  }

  isCompany_id() {
    return this.authService.isCompany_id();
  }



  checktypeIfAdmin() {
    return this.authService.checktypeIfAdmin();
  }

  checktypeIfCondidat() {
    return this.authService.checktypeIfCondidat();
  }

  checktypeIfResponsableRH() {
    return this.authService.checktypeIfResponsableRH();
  }




  isUserSignedin() {
    return this.authService.isUserSignedin();
  }





}
