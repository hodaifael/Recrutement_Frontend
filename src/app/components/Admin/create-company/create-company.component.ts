import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/Entity/admin';
import { Company } from 'src/app/Entity/company';
import { AdminService } from 'src/app/services/admin.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  company: Company = new Company();
  data: any;
  utilisateur_id: any;
  userRoles: any;
  companies: any;
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';
  path: string = "http://localhost:8084/uploads";

  constructor(private router: Router, private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanys();
  }



  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  createCompany() {
    this.companyService.createCompany(this.company).subscribe(res => {
      this.data = res;
      sessionStorage.setItem('company_id', this.data.id);
      this.upload();
      console.log(this.data);
    });

  }
  getCompanys() {
    this.companyService.getCompanys().subscribe(res => {
      this.data = res;
      this.companies = this.data;
    });

  }
  upload(): void {
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {

        this.currentFile = file;
        this.companyService.uploadimage(this.currentFile, sessionStorage.getItem('company_id')).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              console.log(Math.round(100 * event.loaded / event.total));

            } else if (event instanceof HttpResponse) {
              this.message = event.body.responseMessage;
            }

          },
          (err: any) => {
            console.log(err);

            if (err.error && err.error.responseMessage) {
              this.errorMsg = err.error.responseMessage;
            } else {
              this.errorMsg = 'Error occurred while uploading a file!';
            }

            this.currentFile = undefined;
          });


      }

      this.selectedFiles = undefined;
    }
  }



}