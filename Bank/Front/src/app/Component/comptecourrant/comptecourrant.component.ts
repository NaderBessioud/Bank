import { Component, OnInit } from '@angular/core';
import {CartebancaireService} from "../../Services/cartebancaire.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ComptecourrantService} from "../../Services/comptecourrant.service";
import {Comptecourrant} from "../../Modals/comptecourrant";
import {OperationbancaireService} from "../../Services/operationbancaire.service";
import {Operationbancaire} from "../../Modals/operationbancaire";
import {Chart} from "node_modules/chart.js";

@Component({
  selector: 'app-comptecourrant',
  templateUrl: './comptecourrant.component.html',
  styleUrls: ['./comptecourrant.component.css']
})
export class ComptecourrantComponent implements OnInit {
  form : boolean = false;
  closeResult! : string;
  comptecourrant !: Comptecourrant;
  listAllComptecourrant:any;
  listAllCartebancaire:any;
  listAllOperation:any;
  listOperationByCompte:any;
  uncomptecourrant:any;
  unecartebancaire:any;
  unecartebancaireAdmin:any;
  currentRetrait:any;
  currentPaiement:any;
  statOperation:any;
  Operationbancaire !:Operationbancaire;
  listOperationAVenir:any;
  searchText:any;
  orderHeader: String='';
  isDescOrder : boolean = true;
  searchText1:any;
  orderHeader1: String='';
  isDescOrder1 : boolean = true;

  selectedCarte = '';
  onSelectedCarte(value:any): void {
    this.selectedCarte = value;
  }
  pageSize = 10; // le nombre d'éléments à afficher par page
  currentPage1 = 0; // la page courante pour le tableau 1
  currentPage2 = 0; // la page courante pour le tableau 2
  // le nombre d'éléments à afficher par page
  currentPage3 = 0; // la page courante pour le tableau 1
  currentPage4 = 0; // la page courante pour le tableau 2
  constructor(private compteService : ComptecourrantService,private carteService : CartebancaireService,private operationService : OperationbancaireService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.retrieveAllCartebancaire();
    this.retrieveAllComptecourrant();
    this.retrieveCompteCarteOperation(1);
    this.comptecourrant = {
      idCC:null,
      ref:null,
      rib:null,
      solde:null,
      carteB:null,
      operationbancaire:null,
      secVir:null,
      comptebancairecourrant:null
    }

    this.Operationbancaire = {
      idOB:null,
      typeoperation:null,
      somme:null,
      createdAt:null,
      immediat:null,
      differe:null,
      comptecourrantO:null,
    }



    this.operationService.statOperation(1).subscribe(res => {
        this.statOperation = res
        const myChart = new Chart("myChart", {
          type: 'doughnut',
          data: {
            labels: ['Achat', 'Depot','Retrait'],
            datasets: [{

              data: [this.statOperation[0] , this.statOperation[1], this.statOperation[2]],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 255, 0)'

              ],
              hoverOffset: 4

            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    )



  }


  previousPage1() {
    if (this.currentPage1 > 0) {
      this.currentPage1--;
    }
  }

  nextPage1() {
    if (this.currentPage1 < (this.listOperationByCompte.length / this.pageSize) - 1) {
      this.currentPage1++;
    }
  }

  previousPage2() {
    if (this.currentPage2 > 0) {
      this.currentPage2--;
    }
  }

  nextPage2() {
    if (this.currentPage2 < (this.listOperationAVenir.length / this.pageSize) - 1) {
      this.currentPage2++;
    }
  }



  sort(headerName:String){
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }


  sort1(headerName:String){
    this.isDescOrder1 = !this.isDescOrder1;
    this.orderHeader1 = headerName;
  }


  previousPage3() {
    if (this.currentPage3 > 0) {
      this.currentPage3--;
    }
  }

  nextPage3() {
    if (this.currentPage3 < (this.listAllComptecourrant.length / this.pageSize) - 1) {
      this.currentPage3++;
    }
  }

  previousPage4() {
    if (this.currentPage4 > 0) {
      this.currentPage4--;
    }
  }

  nextPage4() {
    if (this.currentPage4 < (this.listOperationByCompte.length / this.pageSize) - 1) {
      this.currentPage4++;
    }
  }






  retrieveAllComptecourrant(){
    this.compteService.retrieveAllComptecourrant().subscribe(res => this.listAllComptecourrant = res )
  }

  retrieveAllOperation(){
    this.operationService.retrieveAllOperation().subscribe(res => this.listAllOperation = res )
  }

  retrieveByCompte(idCC:any){
    this.operationService.retrieveByCompte(idCC).subscribe(res => this.listOperationByCompte = res)
  }

  retrievecurrentRetrait(idCC:any){
    this.operationService.currentRetrait(idCC).subscribe(res=>this.currentRetrait = res)
  }

  retrievecurrentPaiement(idCC:any){
    this.operationService.currentPaiement(idCC).subscribe(res=>this.currentPaiement = res)
  }

OperationAVenir(idCC:any){
    this.operationService.OperationAVenir(idCC).subscribe(res=>this.listOperationAVenir = res)
}


  addComptecourrant(compte: any , idCB :any){
    this.compteService.addComptecourrant(compte,idCB).subscribe(() => {
      this.retrieveAllComptecourrant();
      this.retrieveAllCartebancaire();
      this.form = false;
    });
  }
  retrieveAllCartebancaire(){
    this.carteService.retrieveAllCartebancaire().subscribe(res => this.listAllCartebancaire = res )
  }


  retrieveCompteCourrant(idCC:any){
    this.compteService.retrieveCompteCourrant(idCC).subscribe(res => this.uncomptecourrant = res)
  }

  CarteByCompteId(idCC:any){
    this.carteService.CarteByCompteId(idCC).subscribe(res => this.unecartebancaire = res)
  }

  CarteByCompteIdAdmin(idCC:any){
    this.carteService.CarteByCompteId(idCC).subscribe(res => this.unecartebancaireAdmin = res)
  }

  retrieveCompteCarteOperation(idCC:any){
    this.retrieveCompteCourrant(idCC);
    this.CarteByCompteId(idCC);
    this.retrieveByCompte(idCC);
    this.retrievecurrentPaiement(idCC);
    this.retrievecurrentRetrait(idCC);
    this.OperationAVenir(idCC);
  }

infoOperationCarte(idCC:any){
    this.retrieveByCompte(idCC);
  this.CarteByCompteIdAdmin(idCC);
}
  addRetrait(Operation:any,idCC:any){
    this.operationService.addRetrait(Operation,idCC).subscribe(()=>{
      this.retrieveCompteCarteOperation(1);
      }
    )
  }

  addDepot(Operation:any,idCC:any){
    this.operationService.addDepot(Operation,idCC).subscribe(()=>{
      this.retrieveCompteCarteOperation(1);
    })
  }


  addAchat(Operation:any,idCC:any){
    this.operationService.addAchat(Operation,idCC).subscribe(()=>{
      this.retrieveCompteCarteOperation(1);
    })
  }

  //retrieveCartebancaire(idCB:any){
  //  this.carteService.retrieveCartebancaire(idCB).subscribe(res => this.unecartebancaire = res)
  //}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
}
