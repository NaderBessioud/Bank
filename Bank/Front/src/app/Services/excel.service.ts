import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  readonly API_URL = 'http://localhost:8082/Banque/api/excel';
  http: any;

  constructor(private httpClient: HttpClient) { }

  uploadExcel(file:any){
    let formData=new FormData()
    formData.append("file",file)
    return this.httpClient.post(`${this.API_URL}/upload`,formData)
    //return this.httpClient.post(`${this.API_URL}/upload`,{params: {file:file}})
  }

  downloadExcel(){
    return this.httpClient.get(`${this.API_URL}/download`, {responseType: 'blob'});
  }

}
