import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Action} from "../Modals/action";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  readonly API_URL = 'http://localhost:8082/Banque/Action';
  URL='http://localhost:5000/api';
  http: any;

  constructor(private httpClient: HttpClient) { }

  getVAR(){
    return this.httpClient.get(this.URL+'/Var');
  }

  findByTitle(titre): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/Actions`,{params:{titre:titre}});
  }

  getAllActions(){
    return this.httpClient.get(`${this.API_URL}/RetrieveAllAction`);
  }

  addAction(act: Action){
    return this.httpClient.post(`${this.API_URL}/AddAction`, act)
  }

  getAction(ActionId:any){
    return this.httpClient.get(`${this.API_URL}/RetrieveAction`,{params: {ActionId:ActionId}});
  }

  deleteAction(ActionId:any) {
    return this.httpClient.delete(`${this.API_URL}/RemoveAction`, {params: {ActionId:ActionId}});
  }

}
