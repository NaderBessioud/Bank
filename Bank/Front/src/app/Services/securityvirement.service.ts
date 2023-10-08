import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecurityvirementService {
  readonly API_URL = 'http://localhost:8082/banque/securityvirement';

  constructor(private httpClient: HttpClient) { }

  checkPassCompte(pass : any , idCC : any) {
    return this.httpClient.post(`${this.API_URL}/CheckPassCompte`,null , {params:{pass:pass,idCC:idCC}})
  }
}
