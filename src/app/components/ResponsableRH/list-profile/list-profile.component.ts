import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/Entity/candidat';
import { Experience } from 'src/app/Entity/experience';
import { Formation } from 'src/app/Entity/formation';
import { Offre } from 'src/app/Entity/offre';
import { Postulation } from 'src/app/Entity/postulation';
import { CandidatService } from 'src/app/services/candidat.service';
import { FormationService } from 'src/app/services/formation.service';
import { OffreService } from 'src/app/services/offre.service';
import { PostulationService } from 'src/app/services/postulation.service';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  candidats: any;
  allcondidat: any;
  path: string = "http://localhost:8084/uploads";
  serachName: any;
  candidat: Candidat = new Candidat();


  constructor(private candidatService: CandidatService, private formationService: FormationService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.candidatService.findListCondidatByAll().subscribe(res => {
      this.candidats = res;
      this.allcondidat = this.candidats;
      console.log(res);
    });
  }
  searchByname() { // with type info
    if (this.serachName != "") {
      console.log(this.allcondidat)
      this.candidats = this.allcondidat.filter((res: any) => {
        return res.nom.match(this.serachName) || res.prenom.match(this.serachName);
      });
    } else if (this.serachName == "") {
      this.candidats = this.allcondidat;
    }

  }

  findListCondidat() {
    this.candidatService.findListCondidat(this.candidat).subscribe(res => {
      this.candidats = res;
      this.allcondidat = this.candidats;
      this.candidat = new Candidat();
      console.log(res);
    });
  }




}
