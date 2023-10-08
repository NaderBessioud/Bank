import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './credit.component';
 import { CreditRoutingModule } from './credit-routing.module';
import { CreditService } from 'src/app/services/CreditService';
 import { CreditRequestComponent } from './credit-request/credit-request.component';
import { FormsModule } from '@angular/forms';
import { RepaymentComponent } from './repayment/repayment.component';
    


@NgModule({
  declarations: [CreditComponent , CreditRequestComponent, RepaymentComponent ],
  imports: [
    CommonModule,
    CreditRoutingModule ,
    FormsModule  
    
  ],
  providers: [CreditService],
})
export class CreditModule { }
