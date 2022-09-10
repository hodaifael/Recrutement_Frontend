import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-verify-compte',
  templateUrl: './verify-compte.component.html',
  styleUrls: ['./verify-compte.component.css']
})
export class VerifyCompteComponent implements OnInit {
  code: any;
  verify: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];
    this.verifyCompte();
  }

  wait = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  }


  verifyCompte() {
    console.log(this.code);
    this.authService.verifyCompte(this.code).subscribe(res => {
      this.verify = res;
    });
  }

  
}
