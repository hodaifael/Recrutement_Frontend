import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-single-offre',
  templateUrl: './single-offre.component.html',
  styleUrls: ['./single-offre.component.css']
})
export class SingleOffreComponent implements OnInit {
  offre_id: any;
  data: any;
  offre: any;
  path: string = "http://localhost:8084/uploads";

  constructor(private route: ActivatedRoute, private offreService: OffreService) {
    this.offre_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOffreById();
  }


  getOffreById() {
    this.offreService.getOffreById(this.offre_id).subscribe(res => {
      this.data = res;
      this.offre = this.data;
      console.log(res);
    });
  }
}
