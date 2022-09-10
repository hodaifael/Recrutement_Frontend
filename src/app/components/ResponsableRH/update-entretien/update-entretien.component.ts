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
  selector: 'app-update-entretien',
  templateUrl: './update-entretien.component.html',
  styleUrls: ['./update-entretien.component.css']
})
export class UpdateEntretienComponent implements OnInit {
  data: any;
  entretien_id: any;
  userId: any;
  path: string = "http://localhost:8084/uploads";
  entretien = new Entretien();
  constructor(private entretienService: EntretienService, private responsablerhService: ResponsablerhService, private offreService: OffreService, private viewportScroller: ViewportScroller, private route: ActivatedRoute) {
    this.entretien_id = this.route.snapshot.params['id'];
    this.userId = sessionStorage.getItem('utilisateur_id');
  }


  ngOnInit(): void {
    this.findEntretiensById();
  }


  addEntretien() {
    this.entretien.responsableRH.id = this.userId;
    this.entretienService.createEntretien(this.entretien).subscribe(res => {
      console.log(res);
    });
  }

  findEntretiensById() {
    this.entretienService.findEntretiensById(this.entretien_id).subscribe(res => {
      this.data = res;
      this.entretien.load(this.data);
      console.log(this.data);
    });
  }

}
