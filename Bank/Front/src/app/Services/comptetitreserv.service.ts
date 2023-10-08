import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comptetitre } from '../Modals/comptetitre';

@Injectable({
  providedIn: 'root'
})
export class ComptetitreservService {
  readonly API_URL =  'http://localhost:8082/Banque';
  constructor(private httpClient: HttpClient) { };

  getComptetitList(): Observable<Comptetitre[]>{
    return this.httpClient.get<Comptetitre[]>(`${this.API_URL}/ct/affichelistect`);
  }
  createComptetit(Comptetitre: Comptetitre,idcb:any): Observable<Object>{
    return this.httpClient.post(`${this.API_URL}/ct/addctit/${idcb}`, Comptetitre);
  }
  getComptetitreById(idCT: any): Observable<Comptetitre>{
    return this.httpClient.get<Comptetitre>(`${this.API_URL}/ct/affichect/${idCT}`);
  }
  updateComptetitre(Comptetitre: Comptetitre): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/ct/modifct`, Comptetitre);
  }
  getctList(id:Number): Observable<Comptetitre[]>{
    return this.httpClient.get<Comptetitre[]>(`${this.API_URL}/ct/affichelistect/${id}`);
  }
  achatob(idct:any,ido: Number): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/ct/acheterob/${idct}/${ido}`, Comptetitre);
  }
  stats(): Observable<Object[]>{
    return this.httpClient.get<Object[]>(`${this.API_URL}/ct/stats`);
  }
  names(): Observable<String[]>{
    return this.httpClient.get<String[]>(`${this.API_URL}/ct/names`);
  }
}
