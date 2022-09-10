import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/Entity/admin';
import { AdminService } from 'src/app/services/admin.service';
import { CompanyService } from 'src/app/services/company.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { NotificationService } from "@progress/kendo-angular-notification";

@Component({
  selector: 'app-create-profile-admin',
  templateUrl: './create-profile-admin.component.html',
  styleUrls: ['./create-profile-admin.component.css']
})
export class CreateProfileAdminComponent implements OnInit {
  utilisateur: Admin = new Admin();
  data: any;
  passeword: string = "";
  userRoles: any;
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';
  utilisateur_id: any;

  constructor(private notificationService: NotificationService, private adminService: AdminService, private utilisateurService: UtilisateurService, private router: Router, private companyService: CompanyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.utilisateur_id = sessionStorage.getItem('utilisateur_id');
    this.findUser();
  }


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  findUser() {
    this.adminService.findAdmin(this.utilisateur_id).subscribe(res => {
      this.data = res;
      this.utilisateur = this.data;
      console.log(this.data);
    });

  }

  createUtilisateur() {

    if (this.passeword !== "") {
      let sampleRegExMail = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
      if (sampleRegExMail.test(this.passeword)) {
        this.utilisateur.userPass = this.passeword;
        this.notificationService.show({
          content: "mot de passe est correcte",
          cssClass: "button-notification",
          animation: { type: "slide", duration: 100 },
          position: { horizontal: "right", vertical: "bottom" },
          type: { style: "success", icon: true },
          hideAfter: 10000,
        });
        this.adminService.updateCompte(this.utilisateur).subscribe(res => {
          console.log(res);
          if (this.selectedFiles !== undefined) {
            this.upload();
          }

        });
      } else {
        this.notificationService.show({
          content: "mot de passe est défini par 8 caractères, maj, min chiffre",
          cssClass: "button-notification",
          animation: { type: "slide", duration: 100 },
          position: { horizontal: "center", vertical: "bottom" },
          type: { style: "error", icon: true },
          hideAfter: 10000,
        });
      }
    }





  }

  upload(): void {
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {

        this.currentFile = file;
        this.adminService.uploadimage(this.currentFile, this.utilisateur_id).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              console.log(Math.round(100 * event.loaded / event.total));

            } else if (event instanceof HttpResponse) {
              this.message = event.body.responseMessage;
              console.log(this.message);
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