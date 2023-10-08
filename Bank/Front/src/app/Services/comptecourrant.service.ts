import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComptecourrantService {
  readonly API_URL = 'http://localhost:8082/banque/comptecourrant';

  constructor(private httpClient: HttpClient) { }

  addComptecourrant(compte : any , idCB : any) {
    return this.httpClient.post(`${this.API_URL}/addCompteCourrant`, compte , {params:{idCB:idCB}})
  }
  retrieveAllComptecourrant() {
    return this.httpClient.get(`${this.API_URL}/retrieveAllComptecourrant`)
  }

  retrieveCompteCourrant(idCC:any){
    return this.httpClient.get(`${this.API_URL}/retrieveCompteCourrant`,{params:{idCC:idCC}})
  }
}
