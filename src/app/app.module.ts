import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/Authentification/signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpInterceptorService } from './services/httpInterceptor.service';
import { AddOffreComponent } from './components/ResponsableRH/add-offre/add-offre.component';
import { CreateProfileComponent } from './components/Condidat/create-profile/create-profile.component';
import { HomeComponent } from './components/global/home/home.component';
import { CreateProfileRHComponent } from './components/ResponsableRH/create-profile-rh/create-profile-rh.component';
import { ListOffreComponent } from './components/global/list-offre/list-offre.component';
import { SingleOffreComponent } from './components/global/single-offre/single-offre.component';
import { UpdateCompteComponent } from './components/Authentification/update-compte/update-compte.component';
import { CommonModule, DatePipe } from '@angular/common';
import { GetMyoffersComponent } from './components/ResponsableRH/get-myoffers/get-myoffers.component';
import { MyprofileComponent } from './components/Condidat/myprofile/myprofile.component';
import { ShowProfileCondidatComponent } from './components/ResponsableRH/show-profile-condidat/show-profile-condidat.component';
import { ListProfileComponent } from './components/ResponsableRH/list-profile/list-profile.component';
import { VerifyCompteComponent } from './components/Authentification/verify-compte/verify-compte.component';
import { GetEntretiensComponent } from './components/ResponsableRH/get-entretiens/get-entretiens.component';
import { CreateProfileAdminComponent } from './components/Admin/create-profile-admin/create-profile-admin.component';
import { GereComptesComponent } from './components/Admin/gere-comptes/gere-comptes.component';
import { CreateCompanyComponent } from './components/Admin/create-company/create-company.component';
import { UpdateOffreComponent } from './components/ResponsableRH/update-offre/update-offre.component';
import { UpdateEntretienComponent } from './components/ResponsableRH/update-entretien/update-entretien.component';
import { MyentretienComponent } from './components/Condidat/myentretien/myentretien.component';
import { GetPostulationComponent } from './components/ResponsableRH/get-postulation/get-postulation.component';
import { UpdateProfileComponent } from './components/Condidat/update-profile/update-profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavbarComponent,
    AddOffreComponent,
    CreateProfileComponent,
    HomeComponent,
    CreateProfileRHComponent,
    ListOffreComponent,
    SingleOffreComponent,
    UpdateCompteComponent,
    GetMyoffersComponent,
    MyprofileComponent,
    ShowProfileCondidatComponent,
    ListProfileComponent,
    VerifyCompteComponent,
    GetEntretiensComponent,
    CreateProfileAdminComponent,
    GereComptesComponent,
    CreateCompanyComponent,
    UpdateOffreComponent,
    UpdateEntretienComponent,
    MyentretienComponent,
    GetPostulationComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FontAwesomeModule,
    NotificationModule,
    BrowserAnimationsModule,

  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
