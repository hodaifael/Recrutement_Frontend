import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableRH } from 'src/app/Entity/responsable-rh';
import { CompanyService } from 'src/app/services/company.service';
import { ResponsablerhService } from 'src/app/services/responsablerh.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-create-profile-rh',
  templateUrl: './create-profile-rh.component.html',
  styleUrls: ['./create-profile-rh.component.css']
})
export class CreateProfileRHComponent implements OnInit {
  utilisateur: ResponsableRH = new ResponsableRH();
  data: any;
  passeword: string = "";
  utilisateur_id: any;
  company_id: any;
  userRoles: any;
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';
  constructor(private responsablerhService: ResponsablerhService, private utilisateurService: UtilisateurService, private router: Router, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.utilisateur_id = sessionStorage.getItem('utilisateur_id');
    this.company_id = sessionStorage.getItem('company_id');
    this.findUser();
  }

  createUtilisateur() {
    this.utilisateur.company.id = this.company_id;
    if (this.passeword !== "") {
      this.utilisateur.userPass = this.passeword;
    }

    this.responsablerhService.updateCompte(this.utilisateur).subscribe(res => {
      if (this.selectedFiles !== undefined) {
        this.upload();
      }

    });

  }

  findUser() {

    this.responsablerhService.findResponsableRH(this.utilisateur_id).subscribe(res => {
      this.data = res;
      this.utilisateur.id = this.data.id;
      this.utilisateur.nom = this.data.nom;
      this.utilisateur.prenom = this.data.prenom;
      this.utilisateur.adresse_postale = this.data.adresse_postale;
      this.utilisateur.numero_telephone_portable = this.data.numero_telephone_portable;
      this.utilisateur.age = this.data.age;
      this.utilisateur.image = this.data.image;
      this.utilisateur.userEmail = this.data.userEmail;
      this.utilisateur.userPass = this.data.userPass;
      this.utilisateur.userRole = this.data.userRole;
      this.utilisateur.verificationCode = this.data.verificationCode;
      this.utilisateur.enabled = this.data.enabled;
      this.utilisateur.date = this.data.date;
      this.utilisateur.Time = this.data.Time;
    });

  }


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {

        this.currentFile = file;
        this.responsablerhService.uploadimage(this.currentFile, this.utilisateur_id).subscribe(
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