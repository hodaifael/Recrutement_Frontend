import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/Entity/offre';
import { OffreLike } from 'src/app/Entity/offre-like';
import { Postulation } from 'src/app/Entity/postulation';
import { CompanyService } from 'src/app/services/company.service';
import { OffreService } from 'src/app/services/offre.service';
import { PostulationService } from 'src/app/services/postulation.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit {
  Offres: any;
  faCoffee = faCoffee;
  offre_id: any;
  path: string = "http://localhost:8084/uploads";
  offre: Offre = new Offre();
  postulation: Postulation = new Postulation();
  utilisateur_id: any = null;
  userRoles: any;
  data: any;
  companies: any;
  likes: any;
  company_id: any;
  constructor(private postulationService: PostulationService, private companyService: CompanyService, private offreService: OffreService) {
    if (sessionStorage.getItem('utilisateur_id') !== null) {
      this.utilisateur_id = sessionStorage.getItem('utilisateur_id');
      this.userRoles = sessionStorage.getItem('userRoles');
    }

    this.getCompanys();
    this.getAll();
  }

  ngOnInit(): void {

  }

  clear() {
    this.offre.type_contrat = "%";
    this.offre.company.secteur = "%";
    this.offre.company.name = "%";
    this.offre.metier = "%";
    this.offre.niveau_d_etude_demande = "%";
    this.offre.niveau_d_experience_requise = "%";
  }

  getAll() {
    this.offreService.findListOffre().subscribe(res => {
      this.Offres = res;
      console.log(res);
    });
  }

  findListOffre() {

    this.offreService.findListOffreByFilter(this.offre).subscribe(res => {
      this.Offres = res;
      this.offre = new Offre();
      console.log(res);
    });
  }

  like(offre_id: any) {
    let like = new OffreLike();
    like.candidat.id = this.utilisateur_id;
    like.offre.id = offre_id;
    this.offreService.like(like).subscribe(res => {
      this.Offres = res;
      this.getAll();
    });
  }

  checkLike(offer: any) {
    this.likes = offer.likes;
    for (let element of this.likes) {
      if (element.candidat.id == this.utilisateur_id) {
        return true;
      }
    }

    return false;
  }

  lowerThan(n1: any, n2: any) {
    return n1 < n2
  }

  offreToPostuler(offre_id: any) {
    this.offre_id = offre_id;
  }

  postuler() {
    this.postulation.candidat.id = this.utilisateur_id;
    this.postulation.offre.id = this.offre_id;
    this.postulationService.postuler(this.postulation).subscribe(res => {

    });
  }

  getCompanys() {
    this.companyService.getCompanys().subscribe(res => {
      this.data = res;
      this.companies = this.data;
      console.log(res);
    });

  }


}
