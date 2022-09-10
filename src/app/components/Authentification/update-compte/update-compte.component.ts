import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { Request } from 'src/app/services/request.model';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {
  userForm: FormGroup = this.formBuilder.group({
    userEmail: [''],
    newuserEmail: [''],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.maxLength(10)]]
  });;
  formSubmitted: boolean = false;
  selectedRoles: string = 'ROLE_CONDIDAT';
  error: string = '';
  success: string = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      alert('good')
      this.doSignup();
    } else {
      alert('mot de passe est défini par 8 caractères, maj, min chiffre ')
      this.formSubmitted = true;
    }
  }


  doSignup() {
    let userEmail = this.userForm.get('userEmail')!.value;
    let password = this.userForm.get('password')!.value;
    let newuserEmail = this.userForm.get('newuserEmail')!.value;
    if (userEmail !== '' && userEmail !== null && password !== '' && password !== null && this.selectedRoles.length > 0) {
      if (newuserEmail == null) {
        newuserEmail = userEmail;
      }

      const request: Request = { userEmail: userEmail, userPwd: password, newuserEmail: newuserEmail, roles: this.selectedRoles };

      this.authService.UpdateCompte(request).subscribe((result) => {
        //console.log(result);
        //this.success = 'Signup successful';
        this.success = result;

      }, (err) => {
        //console.log(err);
        this.error = 'Something went wrong during signup';
      });
    } else {
      this.error = 'All fields are mandatory';
    }
  }

  doSignout() {
    this.authService.signout();
  }

}
