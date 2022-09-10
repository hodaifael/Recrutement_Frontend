import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entretien } from 'src/app/Entity/entretien';
import { CandidatService } from 'src/app/services/candidat.service';
import { EntretienService } from 'src/app/services/entretien.service';
import { OffreService } from 'src/app/services/offre.service';
import { PostulationService } from 'src/app/services/postulation.service';
import { ResponsablerhService } from 'src/app/services/responsablerh.service';

@Component({
  selector: 'app-get-myoffers',
  templateUrl: './get-myoffers.component.html',
  styleUrls: ['./get-myoffers.component.css']
})
export class GetMyoffersComponent implements OnInit {
  data: any;
  offres: any;
  offre: any;
  offre_id: any;
  postulations: any;
  responsableRh: any;
  utilisateur_id: any;
  path: string = "http://localhost:8084/uploads";
  compte_id: any;
  entretien = new Entretien();
  constructor(private entretienService: EntretienService, private responsablerhService: ResponsablerhService, private offreService: OffreService, private viewportScroller: ViewportScroller, private route: ActivatedRoute) {
    this.utilisateur_id = sessionStorage.getItem('utilisateur_id');
  }


  ngOnInit(): void {
    this.findUtilisateur();
    this.getOffres();
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }


  findUtilisateur() {
    this.responsablerhService.findResponsableRH(this.utilisateur_id).subscribe(res => {
      this.data = res;
      this.responsableRh = this.data;
      console.log(this.responsableRh);
    });
  }

  getOffres() {
    this.offreService.getOffres(this.utilisateur_id).subscribe(res => {
      this.data = res;
      this.offres = this.data;
      console.log(this.offres);
    });
  }





  delete(offre_id: any) {
    this.offre = this.offres.filter((obj: { id: string; }) => {
      return obj.id === offre_id;
    });

    console.log(this.offre);
    if (this.offre[0].nbrPostulation === 0) {
      this.offreService.DeleteOffre(offre_id).subscribe(res => {
        this.getOffres();
      });
    } else {
      alert('this offer already has a postulation')
    }

  }
}
