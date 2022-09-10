import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FormationService } from 'src/app/services/formation.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { Formation } from 'src/app/Entity/formation';
import { Experience } from 'src/app/Entity/experience';
import { CandidatService } from 'src/app/services/candidat.service';
import { ResponsablerhService } from 'src/app/services/responsablerh.service';
import { OffreService } from 'src/app/services/offre.service';
import { Offre } from 'src/app/Entity/offre';
import { Entretien } from 'src/app/Entity/entretien';
import { EntretienService } from 'src/app/services/entretien.service';
import { PostulationService } from 'src/app/services/postulation.service';
import { Postulation } from 'src/app/Entity/postulation';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-get-postulation',
  templateUrl: './get-postulation.component.html',
  styleUrls: ['./get-postulation.component.css']
})
export class GetPostulationComponent implements OnInit {
  data: any;
  candidat: any = null;
  formations: any;
  experiences: any;
  formation: Formation = new Formation();
  utilisateur_id: any;
  user_id: any = null;
  offre_id: any;
  offre: Offre = new Offre();
  path: string = "http://localhost:8084/uploads";
  experience: Experience = new Experience();
  entretien = new Entretien();
  postulations: any;
  constructor(public authService: AuthService, private entretienService: EntretienService, private postulationService: PostulationService, private viewportScroller: ViewportScroller, private route: ActivatedRoute, private candidatService: CandidatService, private formationService: FormationService, private experienceService: ExperienceService) {
    this.offre_id = this.route.snapshot.params['id'];
    this.utilisateur_id = sessionStorage.getItem('utilisateur_id');
  }


  ngOnInit(): void {
    this.getOffre();
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  checktypeIfResponsableRH() {
    return this.authService.checktypeIfResponsableRH();
  }

  getOffre() {
    this.postulationService.getPostulation(this.offre_id).subscribe(res => {
      this.data = res;
      this.postulations = this.data;
      console.log(this.postulations);

    });
  }
  update(candidat_id: any) {
    this.entretien.candidat.id = candidat_id;
    this.entretien.offre.id = this.offre_id;
  }

  findUtilisateur(user_id: any) {
    this.user_id = user_id;
    this.candidatService.findCandidat(this.user_id).subscribe(res => {
      this.data = res;
      this.candidat = this.data;
      this.formations = this.candidat.formations;
      this.experiences = this.candidat.experiences;
    });


  }


  addEntretien() {
    this.entretien.responsableRH.id = this.utilisateur_id;
    this.entretien.etat = "Pending";
    this.entretienService.createEntretien(this.entretien).subscribe(res => {
      console.log(res);
    });
  }

}

