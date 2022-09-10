import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FormationService } from 'src/app/services/formation.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { Formation } from 'src/app/Entity/formation';
import { Experience } from 'src/app/Entity/experience';
import { CandidatService } from 'src/app/services/candidat.service';
import { ResponsablerhService } from 'src/app/services/responsablerh.service';

@Component({
  selector: 'app-show-profile-condidat',
  templateUrl: './show-profile-condidat.component.html',
  styleUrls: ['./show-profile-condidat.component.css']
})
export class ShowProfileCondidatComponent implements OnInit {
  data: any;
  candidat: any;
  formations: any;
  experiences: any;
  formation: Formation = new Formation();
  utilisateur_id: any;
  path: string = "http://localhost:8084/uploads";
  experience: Experience = new Experience();
  constructor(private responsablerhService: ResponsablerhService, private viewportScroller: ViewportScroller, private route: ActivatedRoute, private candidatService: CandidatService, private formationService: FormationService, private experienceService: ExperienceService) {
    this.utilisateur_id = this.route.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.findUtilisateur();
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }


  findUtilisateur() {
    this.candidatService.findCandidat(this.utilisateur_id).subscribe(res => {
      console.log(res);
      this.data = res;
      this.candidat = this.data;
      this.formations = this.candidat.formations;
      this.experiences = this.candidat.experiences;

    });


  }


}

