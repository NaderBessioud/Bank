import { Component, OnInit } from '@angular/core';
import {OperationbancaireService} from "../../Services/operationbancaire.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Operationbancaire} from "../../Modals/operationbancaire";
import {Chart} from "node_modules/chart.js";
@Component({
  selector: 'app-operationbancaire',
  templateUrl: './operationbancaire.component.html',
  styleUrls: ['./operationbancaire.component.scss']
})
export class OperationbancaireComponent implements OnInit {

  constructor(private operationService : OperationbancaireService,private modalService: NgbModal) { }
  Operationbancaire !:Operationbancaire;
  listStatOperationMois:any;
  listAllOperation:any;
  listAllOperationCompte:any;
  operationbancaireData:any;
  searchText:any;
  orderHeader: String='';
  isDescOrder : boolean = true;
  searchText1:any;
  orderHeader2: String='';
  isDescOrder2 : boolean = true;

  pageSize = 10; // le nombre d'éléments à afficher par page
  currentPage1 = 0; // la page courante pour le tableau 1
  currentPage2 = 0; // la page courante pour le tableau 2

  ngOnInit(): void {

    this.StatOperationMois();
    this.AllOperationCompte();

    this.Operationbancaire = {
      idOB: null,
      typeoperation: null,
      somme: null,
      createdAt: null,
      immediat: null,
      differe: null,
      comptecourrantO: null,
    }







  }

  sort1(headerName:String){
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }
  sort2(headerName:String){
    this.isDescOrder2 = !this.isDescOrder2;
    this.orderHeader2 = headerName;
  }

  previousPage1() {
    if (this.currentPage1 > 0) {
      this.currentPage1--;
    }
  }

  nextPage1() {
    if (this.currentPage1 < (this.listStatOperationMois.length / this.pageSize) - 1) {
      this.currentPage1++;
    }
  }

  previousPage2() {
    if (this.currentPage2 > 0) {
      this.currentPage2--;
    }
  }

  nextPage2() {
    if (this.currentPage2 < (this.listAllOperationCompte.length / this.pageSize) - 1) {
      this.currentPage2++;
    }
  }


  retrieveAllOperation(){
    this.operationService.retrieveAllOperation().subscribe(res=> this.listAllOperation = res)
  }
  StatOperationMois(){
    this.operationService.StatOperationMois().subscribe(res => this.listStatOperationMois = res )
  }

  AllOperationCompte(){
    this.operationService.AllOperationCompte().subscribe(res => this.listAllOperationCompte = res )
  }





}
