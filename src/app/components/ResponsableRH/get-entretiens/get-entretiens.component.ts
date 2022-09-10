import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/Entity/commentaire';
import { Entretien } from 'src/app/Entity/entretien';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { EntretienService } from 'src/app/services/entretien.service';

@Component({
  selector: 'app-get-entretiens',
  templateUrl: './get-entretiens.component.html',
  styleUrls: ['./get-entretiens.component.css']
})
export class GetEntretiensComponent implements OnInit {
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
    this.entretienService.findEntretiens(this.utilisateur_id).subscribe(res => {
      this.data = res;
      this.entretiens = this.data;
      this.allentretiens = this.data;
      console.log(this.entretiens);
    });
  }

  findEntretiens2() {
    this.entretienService.findEntretiens(this.utilisateur_id).subscribe(res => {
      this.data = res;
      this.entretiens = this.data;
      this.allentretiens = this.data;
      this.getentretienByid(this.entretien_id);
    });
  }


  dateSearch() {
    this.entretiens = this.allentretiens.filter((obj: { date: Date; }) => {
      return obj.date === this.date;
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

  entretienCompleted() {
    this.entretienService.UpdateEtatToCompleted(this.entretien_id).subscribe(async res => {
      this.findEntretiens2();
    });
  }

  createCommentaire() {
    this.commentaire.entretien.id = this.entretien_id;
    this.commentaireService.createCommentaire(this.commentaire).subscribe(res => {
      this.commentaire = new Commentaire();
      this.entretien = new Entretien();
      this.findEntretiens2();

    });
  }

  delete(id: any) {
    this.entretienService.DeleteEntretien(id).subscribe(res => { });
    this.findEntretiens();
  }

  updateCommentaire(commentaire: any) {
    this.getentretienByid(this.entretien.id);
    this.commentaire.load(commentaire);
  }

  addEntretien() {
    this.entretien.responsableRH.id = this.utilisateur_id;
    this.entretienService.createEntretien(this.entretien).subscribe(res => {
      console.log(res);
    });
  }





}
