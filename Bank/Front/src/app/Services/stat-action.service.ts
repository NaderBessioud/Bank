import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StatActionService {
  readonly API_URL = 'http://localhost:8082/Banque/StatAction';
  readonly URL = 'http://localhost:8082/Banque/api/product';
  http: any;

  constructor(private httpClient: HttpClient) { }

  getStatActions(){
    return this.httpClient.get(`${this.API_URL}/Statics`);
  }

  getJsonActions(){
    return this.httpClient.get(`${this.URL}/findall`);
  }

}
