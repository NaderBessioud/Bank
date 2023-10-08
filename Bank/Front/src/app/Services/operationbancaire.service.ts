import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OperationbancaireService {

  readonly API_URL = 'http://localhost:8081/banque/operationbancaire';

  constructor(private httpClient: HttpClient) { }


  addDepot(operation : any , idCC : any) {
    return this.httpClient.post(`${this.API_URL}/addDepot`, operation , {params:{idCC:idCC}})
  }

  addRetrait(operation : any , idCC : any){
    return this.httpClient.post(`${this.API_URL}/addRetrait`, operation , {params:{idCC:idCC}})
  }

  addAchat(operation : any , idCC : any){
    return this.httpClient.post(`${this.API_URL}/addAchat`, operation , {params:{idCC:idCC}})
  }



  retrieveAllOperation() {
    return this.httpClient.get(`${this.API_URL}/retrieveAllOperation`)
  }

  retrieveByCompte(idCC:any){
    return this.httpClient.get(`${this.API_URL}/retrieveByCompte`,{params:{idCC:idCC}})
  }

  currentPaiement(idCC:any){
    return this.httpClient.get(`${this.API_URL}/currentPaiement`,{params:{idCC:idCC}})
  }
 currentRetrait(idCC:any){
    return this.httpClient.get(`${this.API_URL}/currentRetrait`,{params:{idCC:idCC}})
 }

statOperation(idCC:any){
  return this.httpClient.get(`${this.API_URL}/statOperation`,{params:{idCC:idCC}})
}


OperationAVenir(idCC:any) {
  return this.httpClient.get(`${this.API_URL}/OperationAVenir`, {params: {idCC: idCC}})
}

  StatOperationMois(){
    return this.httpClient.get<Object[]>(`${this.API_URL}/StatOperationMois`)
  }

  AllOperationCompte(){
    return this.httpClient.get<Object[]>(`${this.API_URL}/AllOperationCompte`)
  }

}
