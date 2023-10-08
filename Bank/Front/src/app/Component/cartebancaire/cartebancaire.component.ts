import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CartebancaireService} from "../../Services/cartebancaire.service";
import {Cartebancaire} from "../../Modals/cartebancaire";
import {Chart} from "node_modules/chart.js";

@Component({
  selector: 'app-cartebancaire',
  templateUrl: './cartebancaire.component.html',
  styleUrls: ['./cartebancaire.component.css']
})
export class CartebancaireComponent implements OnInit {
  form : boolean = false;
  closeResult! : string;
  cartebancaire !: Cartebancaire;
  listAllCartebancaire:any;
  listnomCarte:any;
  listnbrCarte:any;
  searchText:any;
  nbrCarteList:any;
  orderHeader: String='';
  isDescOrder : boolean = true;
  pageSize = 10; // le nombre d'éléments à afficher par page
  currentPage1 = 0; // la page courante pour le tableau 1
  currentPage2 = 0; // la page courante pour le tableau 2

  constructor(private carteService : CartebancaireService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.retrieveAllCartebancaire();
    this.nbrCarte();
    this.nomCarte();
    this.nbrCarteUtil();
    this.PieChartDash();
    this.cartebancaire={
      idCB:null,
      nom:null,
      prix:null,
      plafondmois_paiement:null,
      plafondsemaine_retrait:null,
      debit_immediat:false,
      debit_differe:false,
      comptecourrantB:null,
      description:null
    }






    const MyChart1 = new Chart("MyChart1", {

      type: 'bar',
      data: {
        labels: [ ],
        datasets: [{
          data: [ ],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
          ],

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


      this.carteService.nbrCarteUtil().subscribe(res => {
        this.nbrCarteList = res;
        for(let i = 0 ; i < this.nbrCarteList.length ; i++){
          MyChart1.data.labels.push(this.nbrCarteList[i][0])
          MyChart1.data.datasets[0].data.push(this.nbrCarteList[i][1])
        }
        MyChart1.update();
      })



  }


  previousPage1() {
    if (this.currentPage1 > 0) {
      this.currentPage1--;
    }
  }

  nextPage1() {
    if (this.currentPage1 < (this.listAllCartebancaire.length / this.pageSize) - 1) {
      this.currentPage1++;
    }
  }

  previousPage2() {
    if (this.currentPage2 > 0) {
      this.currentPage2--;
    }
  }

  nextPage2() {
    if (this.currentPage2 < (this.nbrCarteList.length / this.pageSize) - 1) {
      this.currentPage2++;
    }
  }


  sort(headerName:String){
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }


  nbrCarteUtil(){
    this.carteService.nbrCarteUtil().subscribe(res => this.nbrCarteList = res)
  }
  retrieveAllCartebancaire(){
    this.carteService.retrieveAllCartebancaire().subscribe(res => this.listAllCartebancaire = res )
  }
  addCartebancaire(carte: any){
    this.carteService.addCartebancaire(carte).subscribe(() => {
      this.retrieveAllCartebancaire();
      this.form = false;
    });
  }


  nbrCarte(){
    this.carteService.nbrCarte().subscribe(res=> this.listnbrCarte = res)
  }

  nomCarte(){
    this.carteService.nomCarte().subscribe(res=> this.listnomCarte = res)
  }

  PieChartDash(){
    this.nbrCarte();
    this.nomCarte();
  }










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
