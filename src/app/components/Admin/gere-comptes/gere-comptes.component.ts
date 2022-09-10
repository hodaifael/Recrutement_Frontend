import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/Entity/admin';
import { ResponsableRH } from 'src/app/Entity/responsable-rh';
import { Utilisateur } from 'src/app/Entity/utilisateur';
import { AdminService } from 'src/app/services/admin.service';
import { CompanyService } from 'src/app/services/company.service';
import { Request } from 'src/app/services/request.model';
import { ResponsablerhService } from 'src/app/services/responsablerh.service';

@Component({
  selector: 'app-gere-comptes',
  templateUrl: './gere-comptes.component.html',
  styleUrls: ['./gere-comptes.component.css']
})
export class GereComptesComponent implements OnInit {
  comptes: any = [];
  admin: Admin = new Admin();
  responsableRH: ResponsableRH = new ResponsableRH();

  formSubmitted: boolean = false;
  error: string = '';
  success: string = '';
  data: any;
  companies: any;
  company_id: any;
  userEmail: any;
  roles: any;
  password: any;
  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private responsablerhService: ResponsablerhService, private companyService: CompanyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompanys();
    this.findListCompte();
  }





  createCompte() {
    if (this.roles == "ROLE_RESPONSABLE_RH") {
      console.log(this.company_id)
      this.responsableRH.userEmail = this.userEmail;
      this.responsableRH.userPass = this.password;
      this.responsableRH.userRole = this.roles;
      this.responsableRH.company.id = this.company_id;
      this.responsablerhService.createCompte(this.responsableRH).subscribe((result) => {
        this.success = result;
        this.findListCompte();
      });
    } else {
      this.admin.userEmail = this.userEmail;
      this.admin.userPass = this.password;
      this.admin.userRole = this.roles;
      this.adminService.createCompte(this.admin).subscribe((result) => {
        this.success = result;
        this.findListCompte();
      });
    }
  }

  getCompanys() {
    this.companyService.getCompanys().subscribe(res => {
      this.data = res;
      this.companies = this.data;
    });

  }

  findListCompte() {
    this.adminService.findListCompte().subscribe(res => {
      this.data = res;
      this.comptes = this.data;
      console.log(this.comptes)

    });
  }
}
