import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartebancaireService {
  readonly API_URL = 'http://localhost:8082/banque/cartebancaire';

  constructor(private httpClient: HttpClient) { }


  addCartebancaire(carte : any) {
    return this.httpClient.post(`${this.API_URL}/addCarteBancaire`, carte)
  }
  retrieveAllCartebancaire() {
    return this.httpClient.get(`${this.API_URL}/retrieveAllCartebancaire`)
  }

  retrieveCartebancaire(idCB:any){
    return this.httpClient.get(`${this.API_URL}/retrieveCartebancaire`, {params:{idCB:idCB}})
  }

  CarteByCompteId(idCC:any){
    return this.httpClient.get(`${this.API_URL}/CarteByCompteId`, {params:{idCC:idCC}})
  }

  nbrCarte(){
    return this.httpClient.get(`${this.API_URL}/nbrCarte`)
  }


  nomCarte(){
    return this.httpClient.get(`${this.API_URL}/nomCarte`)
  }

  nbrCarteUtil(){
    return this.httpClient.get(`${this.API_URL}/nbrCarteUtil`)
  }

}
