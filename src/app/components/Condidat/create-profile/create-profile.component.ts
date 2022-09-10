import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import { Candidat } from 'src/app/Entity/candidat';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { Request } from 'src/app/services/request.model';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  utilisateur: Candidat = new Candidat();
  data: any;
  userRoles: any;
  selectedFiles?: FileList;
  currentFile?: File;
  compte_id: any;
  message = '';
  errorMsg = '';


  formSubmitted: boolean = false;
  selectedRoles: string = 'ROLE_CONDIDAT';
  constructor(private notificationService: NotificationService, private candidatService: CandidatService, private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.compte_id = sessionStorage.getItem('compte_id');
  }


  doSignup() {

    let sampleRegExMail = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    if (sampleRegExMail.test(this.utilisateur.userPass)) {
      this.notificationService.show({
        content: "mot de passe est correcte",
        cssClass: "button-notification",
        animation: { type: "slide", duration: 100 },
        position: { horizontal: "right", vertical: "bottom" },
        type: { style: "success", icon: true },
        hideAfter: 10000,
      });
      this.utilisateur.userRole = this.selectedRoles;
      this.authService.signup(this.utilisateur).subscribe(res => {
        this.data = res;
        sessionStorage.setItem('utilisateur_id', this.data.id);
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


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }



  upload(): void {
    console.log("hello");
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {

        this.currentFile = file;
        this.candidatService.uploadimage(this.currentFile, sessionStorage.getItem('utilisateur_id')).subscribe(
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