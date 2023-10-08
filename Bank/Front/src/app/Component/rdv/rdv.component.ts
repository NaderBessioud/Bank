import { Component, OnInit } from '@angular/core';
import {RdvServiceService} from "../../Services/rdv-service.service";
import {RDVServiceService} from "../../Services/rdvservice.service";
import {RDV} from "../../Modals/rdv";
import {RDVdate} from "../../Modals/rdvdate";
import {Modal} from "bootstrap";
import {User} from "../../Modals/user";
import {loadStripe} from "@stripe/stripe-js";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.scss']
})
export class RdvComponent implements OnInit {
  stripePromise = loadStripe(environment.stripe);
  frais:number=0
  R:RDV
  RDVS:RDVdate[]
  date:any="Choisir une date";
  heures:String[]
  hour:any
  lat:any;
  long:any;
  Conseiller:User
  constructor(private service:RdvServiceService, private RDVService:RDVServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.RDVService.getfrais(2).subscribe(f=>{
      this.frais=f;
    })


  }
  AddRDV(){
    sessionStorage.setItem("conseillerName",this.Conseiller.nom)
    sessionStorage.setItem("conseillerPrenom",this.Conseiller.prenom)
    sessionStorage.setItem("conseillerID",this.Conseiller.idEmployee)
    sessionStorage.setItem("date",this.date)
    sessionStorage.setItem("hour",this.hour)


  }

  getConseillerFreeTime(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        if(position){
          this.lat=position.coords.latitude;
          this.long=position.coords.longitude;
          this.service.getConseillerPlusProche(this.lat,this.long).subscribe(c=>{
            this.Conseiller=c;
          })
          this.service.getConseillerRDV(this.lat,this.long).subscribe(data=>{
            this.RDVS=data;
            console.log(data)
          })

        }
      })
    }


  }

  getConseillerFreeTimeW(){
  this.service.getConseillerPlusProcheWAddr("").subscribe(c=>{
    this.Conseiller=c
  })
    this.service.getConseillerRDVWAddr("").subscribe(data=>{
      this.RDVS=data;
      console.log(data)
    })
  }



  open(){
  if (this.date==this.RDVS[0].date){
    this.heures=this.RDVS[0].heure
  }
    else if (this.date==this.RDVS[1].date){
      this.heures=this.RDVS[1].heure
    }
  }

  getCurrentLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        if(position){
          this.lat=position.coords.latitude;
          this.long=position.coords.longitude;

        }
      })
    }
  }




  async pay(): Promise<void> {

    // here we create a payment object
    const payment = {
      name: 'Iphone',
      currency: 'eur',
      // amount on cents *10 => to be on dollar
      amount: this.frais*100,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/#/RDV',
      successUrl: 'http://localhost:4200/#/success',
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



