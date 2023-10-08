import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Repayment } from 'src/app/Modals/Repayment';

import { RepaymentService } from 'src/app/services/RepaymentService';

@Component({
  selector: 'app-repayment',
  templateUrl: './repayment.component.html',
  styleUrls: [ ]
})
export class RepaymentComponent implements OnInit {

  
  listRepayments : Repayment[]  = [];
  
   
 


 

  constructor(private repaymentservice : RepaymentService, private route : ActivatedRoute ) {  

    
   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getAllRepayments(id);
  }
  

  getAllRepayments(id : any)  {
    this.repaymentservice.getAllRepayments(id).subscribe( data  => { 
      this.listRepayments=data ;
      console.log(this.listRepayments);
      });
  }
   
  delete(id  : any){
    //this.repaymentservice.deleteCredit(id).subscribe(() => this.getAllRepayments())
  }
  

  

}

 