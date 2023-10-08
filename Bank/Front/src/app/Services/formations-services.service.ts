import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Formation} from 'src/app/Modals/Formation';
import {holiday} from 'src/app/Modals/holiday';

@Injectable({
  providedIn: 'root'
})
export class FormationsServicesService {

  url : string = 'http://localhost:8082/Banque/';
  constructor(private  http: HttpClient) { }

  findAllFormations(){
    return this.http.get(this.url+"afficher-all-Formation");
  }

  ajouterFormation(formation:Formation){
    return this.http.post(this.url+"ajouterFormation",formation)
  }

  supprimerFormation(idf:any){
    return this.http.delete(this.url+"supprimerFormation/"+idf)
  }
  modifier_formation(id:any, formation:Formation):Observable<any>{
    return this.http.put(this.url+"modifierFormation/"+id,formation);
   }

   getForById(id: string ):Observable<any>{
    return this.http.get(this.url+"afficher-Formation/"+id+'/');

}
affecter_formation(id:any, type:any):Observable<any>{
  console.log("test2")
  return this.http.get(this.url+"affecterFormation/"+id+"/"+type);
 
 }
}