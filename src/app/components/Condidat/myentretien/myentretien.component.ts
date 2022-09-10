import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/Entity/commentaire';
import { Entretien } from 'src/app/Entity/entretien';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { EntretienService } from 'src/app/services/entretien.service';

@Component({
  selector: 'app-myentretien',
  templateUrl: './myentretien.component.html',
  styleUrls: ['./myentretien.component.css']
})
export class MyentretienComponent implements OnInit {
  data: any;
  entretiens: any;
  entretien: any;
  allentretiens: any;
  utilisateur_id: any;
  entretien_id: any;
  commentaire_id: any;
  commentaire: Commentaire = new Commentaire();
  path: string = "http://localhost:8084/uploads";
  date: Date = new Date();

  constructor(private commentaireService: CommentaireService, private entretienService: EntretienService) {
    this.utilisateur_id = sessionStorage.getItem('utilisateur_id');
  }

  ngOnInit(): void {
    this.findEntretiens();
  }

  findEntretiens() {
    this.entretienService.findEntretiensByCandidat(this.utilisateur_id).subscribe(res => {
      this.data = res;
      this.entretiens = this.data;
      this.allentretiens = this.data;
      console.log(this.entretiens);
    });
  }

  UpdateEtatToRefused() {
    this.entretienService.UpdateEtatToRefused(this.entretien_id).subscribe(async res => {
      this.findEntretiens();
    });
  }

  alldays() {
    this.entretiens = this.allentretiens;
  }

  getByEtat(etat: any) {
    console.log(etat);
    this.entretiens = this.allentretiens.filter((obj: { etat: string; }) => {
      return obj.etat === etat;
    });
  }

  getentretienByid(entretien_id: any) {
    let ent = this.allentretiens.filter((obj: { id: any; }) => {
      return obj.id === entretien_id;
    });
    this.entretien_id = entretien_id;
    this.entretien = ent[0];
  }

  addEntretien() {
    this.entretien.responsableRH.id = this.utilisateur_id;
    this.entretienService.createEntretien(this.entretien).subscribe(res => {
      console.log(res);
    });
  }





}
