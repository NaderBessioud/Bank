import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SimulateurServiceService {

  url : string = 'http://localhost:8082/Banque/';
  constructor(private  http: HttpClient) { }

  ImmoblierATauxFixe(capital,mois,revenu){
return this.http.get(this.url+"creditSimulationImmoblier-Fixe/"+capital+"/"+mois+"/"+revenu,{responseType:"text"});
  }
  PersonnelrATauxFixe(capital,mois,revenu){
    return this.http.get(this.url+"creditSimulationPersonnel-Fixe/"+capital+"/"+mois+"/"+revenu,{responseType:"text"});
      }
      vehiculeATauxFixe(capital,mois,revenu){
        return this.http.get(this.url+"creditSimulationvehicule-Fixe/"+capital+"/"+mois+"/"+revenu,{responseType:"text"});
          }


          ImmoblierATauxVariable(capital,mois,revenu){
            return this.http.get(this.url+"creditSimulationImmoblier-Fixe/"+capital+"/"+mois+"/"+revenu,{responseType:"text"});
              }
              PersonnelrATauxVariable(capital,mois,revenu){
                return this.http.get(this.url+"creditSimulationPersonnel-Fixe/"+capital+"/"+mois+"/"+revenu,{responseType:"text"});
                  }
                  vehiculeATauxVariable(capital,mois,revenu){
                    return this.http.get(this.url+"creditSimulationvehicule-Fixe/"+capital+"/"+mois+"/"+revenu,{responseType:"text"});
                      }
}
