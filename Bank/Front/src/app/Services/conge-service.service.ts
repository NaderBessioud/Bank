import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conge } from '../Modals/Conge';
import { holiday } from '../Modals/holiday';

@Injectable({
  providedIn: 'root'
})
export class CongeServiceService {

  url : string = 'http://localhost:8082/Banque/';
  constructor(private  http: HttpClient) { }

  findAllCongesAccepter(){
    return this.http.get(this.url+"retrieve-all-Conges-accepter");
  }

  findAllCongesNoNAccepter(){
    return this.http.get(this.url+"retrieve-all-Conges-non-accepter");
  }
  ajouterConge(conge:Conge,idU:any){
    return this.http.post(this.url+"ajouterConge/"+idU,conge)
  }

  supprimerConge(idc:any){
    return this.http.delete(this.url+"supprimerConge/"+idc)
  }
  holidayyy(country:any):Observable<holiday>{
    return this.http.get<holiday>("https://holidays.abstractapi.com/v1/?api_key=63e89e41069b450dbf10c3b287cc7afe&country="+country+"&year=2020")
  }

  accepterConge(idc:any,email:any,body:string){
    return this.http.post<string>(this.url+"accepterConge/"+idc+"/"+email , body);
  }


  calculerConge(idc:any):Observable<any>{
    return this.http.get<number>(this.url+"calculer-Conge/9");
  }
  
}
