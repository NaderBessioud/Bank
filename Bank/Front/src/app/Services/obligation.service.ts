import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Obligation } from '../Modals/obligation';

@Injectable({
  providedIn: 'root'
})
export class ObligationService {
  readonly API_URL =  'http://localhost:8082/Banque/ob';
  constructor(private httpClient: HttpClient) { }

  getobList(): Observable<Obligation[]>{
    return this.httpClient.get<Obligation[]>(`${this.API_URL}/getallob`);
  }
  createob(Obligation: Obligation): Observable<Object>{
    return this.httpClient.post(`${this.API_URL}/addob`, Obligation);
  }
  getobById(idob: Number): Observable<Obligation>{
    return this.httpClient.get<Obligation>(`${this.API_URL}/getob/${idob}`);
  }
  updateob(Obligation: Obligation):Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/modifob`, Obligation);
  }
  downloadFile() {
    return this.httpClient.get<any>(`${this.API_URL}/PDF`, {responseType: 'arraybuffer' as'json'});
  }
  deleteob(idOb: Number): Observable<Object>{
    return this.httpClient.delete(`${this.API_URL}/deleteob/${idOb}`);
  }
 yield(f:any,f1:any,f2:any,f3:any,f4:any){
  return this.httpClient.get<any>(`${this.API_URL}/sim/${f}/${f1}/${f2}/${f3}/${f4}`)
 }
 sim(f:any,f1:any){
  return this.httpClient.get<any>(`${this.API_URL}/simob/${f}/${f1}`)
 }
 simulateur(f:any,f1:any,f2:any,f3:any,f4:any){
  return this.httpClient.get<any[]>(`${this.API_URL}/simulateur/${f}/${f1}/${f2}/${f3}/${f4}`)
 }
}
