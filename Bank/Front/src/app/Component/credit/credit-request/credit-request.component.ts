import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { credits } from 'src/app/Modals/Credits';
import { ReponseMessage } from 'src/app/Modals/ReponseMessage';
import { CreditService } from 'src/app/services/CreditService';

@Component({
  selector: 'app-credit-request',
  templateUrl: './credit-request.component.html',
  styles: [
  ]
})
export class CreditRequestComponent implements OnInit {
  credit : credits;
  r :ReponseMessage ;
  b: boolean;

  constructor(private route: ActivatedRoute, private service: CreditService,private router: Router) {
    this.credit = new credits();
    this.credit.duration_months=12;
    this.credit.amount=3000;
    this.b = false;
      }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addCredit(this.credit).subscribe( ()=>this.router.navigate(['/credit']) );
    this.router.navigate(['/credit']);
  }
  onSimtlation(){
    
    this.service.simulate(this.credit).subscribe( (data: any)   => { 
      this.b=true;
      this.r=data ;
      console.log(data);
     });  
  }

}
