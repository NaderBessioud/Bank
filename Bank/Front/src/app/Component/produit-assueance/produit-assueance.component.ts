import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../../Services/user-service.service";
import {ProduiAssurance} from "../../Modals/produi-assurance";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {loadStripe} from "@stripe/stripe-js";
import { ActivatedRoute } from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-produit-assueance',
  templateUrl: './produit-assueance.component.html',
  styleUrls: ['./produit-assueance.component.scss']
})
export class ProduitAssueanceComponent implements OnInit {
Listassurance:ProduiAssurance[]
  stripePromise = loadStripe(environment.stripe);
  frais:number=0
  constructor(private service :UserServiceService,private http: HttpClient) { }

  ngOnInit(): void {


  this.service.Getallassurances().subscribe(l=>{
    this.Listassurance=l
  })
  }


  async pay(montant): Promise<void> {

    // here we create a payment object
    const payment = {
      name: 'Iphone',
      currency: 'eur',
      // amount on cents *10 => to be on dollar
      amount: montant*100,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/#/assurances',
      successUrl: 'http://localhost:4200/#/assurances',
    };

    const stripe = await this.stripePromise;
    console.log(payment.amount)
    // this is a normal http calls for a backend api
    this.http
      .post(`${environment.serverUrl}/payment`, payment)
      .subscribe((data: any) => {
        // I use stripe to redirect To Checkout page of Stripe platform
        stripe.redirectToCheckout({
          sessionId: data.id,
        });
      });
  }

}
