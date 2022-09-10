import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@progress/kendo-angular-notification';
import { Offre } from 'src/app/Entity/offre';
import { OffreService } from 'src/app/services/offre.service';
import { ResponsablerhService } from 'src/app/services/responsablerh.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {
  offre: Offre = new Offre();
  data: any;
  userId: any;
  userEmail: any;
  company_id: any;
  userRoles: any;
  constructor(private notificationService: NotificationService, private offreService: OffreService, private router: Router, private route: ActivatedRoute) {
    this.userId = sessionStorage.getItem('utilisateur_id');
    this.userEmail = sessionStorage.getItem('houdayfa.el@gmail.com');
    this.company_id = sessionStorage.getItem('company_id');
  }

  ngOnInit(): void {
  }

  createOffre() {
    this.offre.responsableRH.id = this.userId;
    this.offre.responsableRH.userEmail = this.userEmail;
    this.offre.company.id = this.company_id;
    this.offreService.createOffre(this.offre).subscribe(res => {
      this.data = res;
      console.log(res);
      this.notificationService.show({
        content: "Offre is perfectly added",
        cssClass: "button-notification",
        animation: { type: "slide", duration: 100 },
        position: { horizontal: "center", vertical: "bottom" },
        type: { style: "success", icon: true },
        hideAfter: 5000,
      });
    });
  }



}