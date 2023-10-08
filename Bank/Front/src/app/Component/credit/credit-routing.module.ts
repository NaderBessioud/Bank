import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { CreditRequestComponent } from './credit-request/credit-request.component';
 import { CreditComponent } from './credit.component';
import { RepaymentComponent } from './repayment/repayment.component';
  

const routes: Routes = [
  {
    path: '',
    component: CreditComponent,
    
    children: [
 
    ],
  },
   
  {
    path: 'request',
    component: CreditRequestComponent,

  } 
  ,{
    path: 'repayment/:id',
    component: RepaymentComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditRoutingModule {}
