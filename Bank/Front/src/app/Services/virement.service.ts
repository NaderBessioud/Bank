import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VirementService {

  readonly API_URL = 'http://localhost:8082/banque/virement';

  constructor(private httpClient: HttpClient) { }

  addVirement(virement : any , idCC : any) {
    return this.httpClient.post(`${this.API_URL}/addVirement`, virement , {params:{idCC:idCC}})
  }

  retrieveAllVirement() {
    return this.httpClient.get<Object[]>(`${this.API_URL}/retrieveAllVirement`)
  }

  retrieveVirementEmetteur(idCC:any) {
    return this.httpClient.get(`${this.API_URL}/retrieveVirementEmetteur`,{params:{idCC:idCC}})
  }

  retrieveVirementRecepteur(idCC:any) {
    return this.httpClient.get(`${this.API_URL}/retrieveVirementRecepteur`,{params:{idCC:idCC}})
  }

}
