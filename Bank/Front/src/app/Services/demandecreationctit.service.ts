import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comptebancaire } from '../Modals/comptebancaire';
import { Demandectit } from '../Modals/demandectit';

@Injectable({
  providedIn: 'root'
})
export class DemandecreationctitService {
  readonly API_URL =  'http://localhost:8082/Banque';
  constructor(private httpClient: HttpClient) { }

  createdemande(Demande: Demandectit,idcb:any){
    return this.httpClient.post(`${this.API_URL}/demande/addm/${idcb}`,{responseType: 'arraybuffer' as'text'});
  }

  getdemandeById(iddemande: Number): Observable<Demandectit>{
    return this.httpClient.get<Demandectit>(`${this.API_URL}/demande/affichedm/${iddemande}`);
  }
  getdemandeList(): Observable<Demandectit[]>{
    return this.httpClient.get<Demandectit[]>(`${this.API_URL}/demande/affichelistedm`);
  }
  getcbList(id:Number): Observable<Comptebancaire[]>{
    return this.httpClient.get<Comptebancaire[]>(`${this.API_URL}/demande/affichelistecb/${id}`);
  }
  updateStatedem(id:Number): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/demande/changestate/${id}`, Demandectit);
  }

}
