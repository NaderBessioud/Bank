import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { credits } from 'src/app/Modals/Credits';

import { catchError, map } from 'rxjs/operators';
import { ReponseMessage } from 'src/app/Modals/ReponseMessage';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  readonly API_URL = 'http://localhost:8082/Banque';
  
  constructor(private httpClient: HttpClient) { }

  getAllCredits() : Observable<credits[]>  {  
  return this.httpClient.get<credits[]>(`${this.API_URL}/credits/select`);//.pipe(map(data => data), catchError(this.handleError));
     
  }
  stat() : any  {  
    return this.httpClient.get (`${this.API_URL}/credits/stat`);//.pipe(map(data => data), catchError(this.handleError));
       
    }
    stat2() : any  {  
      return this.httpClient.get (`${this.API_URL}/credits/total`);//.pipe(map(data => data), catchError(this.handleError));
         
      }
  addCredit(c: any) {
    return this.httpClient.post(`${this.API_URL}/credits/add/1`, c)
  }
  
  editCredit(c: any){
    return this.httpClient.put(`${this.API_URL}/credits/edit`, c)
  }
  acceptCredit(id: any){
    return this.httpClient.put(`${this.API_URL}/credits/accept/${id}`,null )
  }
  reject(id: any){
    return this.httpClient.put(`${this.API_URL}/credits/reject/${id}`,null )
  }
  deleteCredit(id  : any){
    return  this.httpClient.delete(`${this.API_URL}/credits/delete/${id}`)
  }
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
  simulate(c: any) : any{
    return this.httpClient.post  (`${this.API_URL}/credits/sim`, c)
  }
  
}
