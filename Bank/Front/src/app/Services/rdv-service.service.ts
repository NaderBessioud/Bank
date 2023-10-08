import { Injectable } from '@angular/core';

import {Observable} from "rxjs";
import {RDVdate} from "../Modals/rdvdate";
import {HttpClient} from "@angular/common/http";
import {User} from "../Modals/user";
import {Notification} from "../Modals/Notification";


@Injectable({
  providedIn: 'root'
})
export class RdvServiceService {

  url : string = 'http://127.0.0.1:8082/Banque/rdv/';
  url1 : string = 'http://127.0.0.1:8082/Banque/notif/';
  constructor(private http: HttpClient) { }

  getConseillerRDV(lat,lng):Observable<RDVdate[]>{
    return this.http.get<RDVdate[]>(this.url+"freeTime",{params:{lat:lat,lng:lng}});
  }

  getConseillerRDVWAddr(addr):Observable<RDVdate[]>{
    return this.http.get<RDVdate[]>(this.url+"freeTimeWAddr",{params:{addr:addr}});
  }

  getConseillerPlusProche(lat,lng):Observable<User>{
    return this.http.get<User>(this.url+"ConseillerProche",{params:{lat:lat,lng:lng}});
  }

  getConseillerPlusProcheWAddr(addr):Observable<User>{
    return this.http.get<User>(this.url+"ConseillerProcheWAddr",{params:{addr:addr}});
  }

  getUserNotification(idc):Observable<Notification[]>{
    return this.http.get<Notification[]>(this.url1+"NotificationsNotSeen",{params:{idc:idc}});
  }

  updateNotification(notif:Notification){
    return this.http.put(this.url1+"updateNotification",notif);
  }

}
