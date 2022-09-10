import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/Entity/offre';
import { OffreService } from 'src/app/services/offre.service';
import { ResponsablerhService } from 'src/app/services/responsablerh.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {
  offre: Offre = new Offre();
  offre_id: any;
  data: any;
  userId: any;
  userRoles: any;
  constructor(private offreService: OffreService, private router: Router, private route: ActivatedRoute) {
    this.offre_id = this.route.snapshot.params['id'];
    this.userId = sessionStorage.getItem('utilisateur_id');
    this.getOffre();
  }

  ngOnInit(): void {
  }

  getOffre() {
    this.offreService.getOffreById(this.offre_id).subscribe(res => {
      this.data = res;
      console.log(res);
      this.offre.load(this.data)
    });
  }
  createOffre() {
    this.offre.responsableRH.id = this.userId;
    console.log(this.offre);
    this.offreService.createOffre(this.offre).subscribe(res => {
      this.data = res;
    });

  }



}