import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SigninComponent } from './components/Authentification/signin/signin.component';
import { CreateProfileComponent } from './components/Condidat/create-profile/create-profile.component';
import { HomeComponent } from './components/global/home/home.component';
import { ListOffreComponent } from './components/global/list-offre/list-offre.component';
import { AddOffreComponent } from './components/ResponsableRH/add-offre/add-offre.component';
import { CreateProfileRHComponent } from './components/ResponsableRH/create-profile-rh/create-profile-rh.component';
import { UpdateCompteComponent } from './components/Authentification/update-compte/update-compte.component';
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
import { SingleOffreComponent } from './components/global/single-offre/single-offre.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'updateCompte', component: UpdateCompteComponent },
  { path: 'verify/:code', component: VerifyCompteComponent },
  { path: 'ListOffres', component: ListOffreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createProfile', component: CreateProfileComponent },
  { path: 'singleOffre/:id', component: SingleOffreComponent },
  { path: 'createProfileRH', component: CreateProfileRHComponent, canActivate: [AuthGuard] },
  { path: 'createProfileAdmin', component: CreateProfileAdminComponent, canActivate: [AuthGuard] },
  { path: 'updateProfileCandidat', component: UpdateProfileComponent, canActivate: [AuthGuard] },
  { path: 'createCompany', component: CreateCompanyComponent, canActivate: [AuthGuard] },
  { path: 'gereComptes', component: GereComptesComponent, canActivate: [AuthGuard] },
  { path: 'myProfile', component: MyprofileComponent, canActivate: [AuthGuard] },
  { path: 'myEntretien', component: MyentretienComponent, canActivate: [AuthGuard] },
  { path: 'addOffre', component: AddOffreComponent, canActivate: [AuthGuard] },
  { path: 'updateOffre/:id', component: UpdateOffreComponent, canActivate: [AuthGuard] },
  { path: 'updateEntretien/:id', component: UpdateEntretienComponent, canActivate: [AuthGuard] },
  { path: 'MyOffres', component: GetMyoffersComponent, canActivate: [AuthGuard] },
  { path: 'ListPofiles', component: ListProfileComponent, canActivate: [AuthGuard] },
  { path: 'ProfileCondidat/:id', component: ShowProfileCondidatComponent, canActivate: [AuthGuard] },
  { path: 'postulations/:id', component: GetPostulationComponent, canActivate: [AuthGuard] },
  { path: 'MyEntretiens', component: GetEntretiensComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
