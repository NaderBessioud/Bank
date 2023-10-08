import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComptebancaireService {
  readonly API_URL = 'http://localhost:8082/banque/comptebancaire';

  constructor(private httpClient: HttpClient) { }

  addComptebancaire(compte : any , idU : any) {
    return this.httpClient.post(`${this.API_URL}/addComptebancaire`, compte , {params:{idU:idU}})
  }


  addCompteCourrantBancaire(comptecourrant : any , idCBA : any, idCB : any) {
    return this.httpClient.post(`${this.API_URL}/addComptecourrantTobancaire`, comptecourrant , {params:{idCBA:idCBA,idCB:idCB}})
  }

  retrieveAllUser(){
    return this.httpClient.get(`${this.API_URL}/retrieveAllUser`)

  }
}
