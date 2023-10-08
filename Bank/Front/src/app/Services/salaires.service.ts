import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalairesService {

  url : string = 'http://localhost:8082/Banque/';
  constructor(private  http: HttpClient) { }

  findAllSalaires(){
    return this.http.get(this.url+"afficher-all-Salaire");
  }


}
