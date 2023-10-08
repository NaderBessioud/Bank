import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Modals/user";
import {Message} from "../Modals/message";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  url : string = 'http://127.0.0.1:8082/Banque/chat/';
  url1 : string = 'http://127.0.0.1:8082/Banque/user/';
  constructor(private http: HttpClient) { }

  getUserOnLine(id):Observable<User[]>{
    return this.http.get<User[]>(this.url1+"userOnLine",{params:{id:id}});
  }

  getMessage(ids,idr):Observable<Message[]>{
    return this.http.get<Message[]>(this.url+"Messages",{params:{ids:ids,idr:idr}});
  }

  sendMessage(message,ids,idr):Observable<Message>{
    console.log(message)
    return this.http.get<Message>(this.url+"addMessage",{params:{ids:ids,idr:idr,content:message}});
  }

}
