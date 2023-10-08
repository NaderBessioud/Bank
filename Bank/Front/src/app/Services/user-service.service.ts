import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Modals/user";
import {ProduiAssurance} from "../Modals/produi-assurance";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url : string = 'http://127.0.0.1:8082/Banque/user/';
  url2 : string = 'http://127.0.0.1:8082/Banque/Assurance/';

  constructor(private http: HttpClient) { }

  login(username,pass):Observable<User>{
    return this.http.get<User>(this.url+"login",{params:{username:username,pass:pass}})
  }


  register(u:User):Observable<User>{
    return this.http.post<User>(this.url+"adduser",u)
  }

  getEmployee():Observable<User[]>{
    return this.http.get<User[]>(this.url+"Employees")
  }

  approve(id){
    let user:User=new User()
    user.idEmployee=id;
    return this.http.put(this.url+"approveUser",user)
  }

  modifuuser(u:User){
    return this.http.put(this.url+"modifiyuser",u)
  }

  getUser(id):Observable<User>{
    return this.http.get<User>(this.url+"User",{params:{id:id}})
  }

  Getallassurances():Observable<ProduiAssurance[]>{
    return this.http.get<ProduiAssurance[]>(this.url2+"diplaye-prod")
  }

  logout(){
    sessionStorage.clear()
  }
}
