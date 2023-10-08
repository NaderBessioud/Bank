import { Component, OnInit } from '@angular/core';
import {VirementService} from "../../Services/virement.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Virement} from "../../Modals/virement";
import {ComptecourrantService} from "../../Services/comptecourrant.service";
import {SecurityvirementService} from "../../Services/securityvirement.service";
import {Securityvirement} from "../../Modals/securityvirement";

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.scss']
})
export class VirementComponent implements OnInit {
  form : boolean = false;
  closeResult! : string;
  virement !: Virement;
  securityvirement !: Securityvirement;
  listAllVirement:any;
  listVirementEmetteur:any;
  listVirementRecepteur:any;
  checkvirement:any;
  searchText:any;
  searchText1:any;
  orderHeader: String='';
  isDescOrder : boolean = true;
  orderHeader4: String='';
  isDescOrder4 : boolean = true;
  searchText2:any;
  orderHeader2: String='';
  isDescOrder2 : boolean = true;
  pageSize = 10; // le nombre d'éléments à afficher par page
  currentPage1 = 0; // la page courante pour le tableau 1
  currentPage2 = 0; // la page courante pour le tableau 2
  currentPage4 = 0; // la page courante pour le tableau 2
  uncomptecourrant:any;
  idCompteVirement=37;
  constructor(private virementService : VirementService, private compteService : ComptecourrantService, private securityvirementService :SecurityvirementService , private modalService: NgbModal) { }

  ngOnInit(): void {

     this.retrieveCompteCourrant(37);
     this.retrieveVirementEmetteur(37);
     this.retrieveVirementRecepteur(37);
     this.retrieveAllVirement();
    this.virement={
      idV:null,
      ribe:null,
      ribr:null,
      somme:null,
      date:null,
      virementcompte:null
    }

    this.securityvirement={
      idSV:null,
      pass:null,
      compte:null
    }

  }

  sort(headerName:String){
    this.isDescOrder4 = !this.isDescOrder4;
    this.orderHeader4 = headerName;
  }

  sort1(headerName:String){
    this.isDescOrder = !this.isDescOrder;
    this.orderHeader = headerName;
  }

  previousPage1() {
    if (this.currentPage1 > 0) {
      this.currentPage1--;
    }
  }

  nextPage1() {
    if (this.currentPage1 < (this.listVirementRecepteur.length / this.pageSize) - 1) {
      this.currentPage1++;
    }
  }


  previousPage4() {
    if (this.currentPage4 > 0) {
      this.currentPage4--;
    }
  }

  nextPage4() {
    if (this.currentPage4 < (this.listVirementEmetteur.length / this.pageSize) - 1) {
      this.currentPage4++;
    }
  }



  sort2(headerName:String){
    this.isDescOrder2 = !this.isDescOrder2;
    this.orderHeader2 = headerName;
  }
  previousPage2() {
    if (this.currentPage2 > 0) {
      this.currentPage2--;
    }
  }

  nextPage2() {
    if (this.currentPage2 < (this.listAllVirement.length / this.pageSize) - 1) {
      this.currentPage2++;
    }
  }
  addVirement(virement: any , idCC :any){
    this.virementService.addVirement(virement,idCC).subscribe(() => {
      this.retrieveCompteCourrant(idCC);
      this.retrieveVirementEmetteur(idCC);
      this.retrieveVirementRecepteur(idCC);
      this.form = false;
    });
  }

  checkPassCompte(pass:any,idCC:any){
    this.securityvirementService.checkPassCompte(pass,idCC).subscribe(res => this.checkvirement = res)
  }

  retrieveAllVirement(){
    this.virementService.retrieveAllVirement().subscribe(res => this.listAllVirement = res)
  }

  retrieveVirementEmetteur(idCC:any){
    this.virementService.retrieveVirementEmetteur(idCC).subscribe(res => this.listVirementEmetteur = res)
  }

  retrieveVirementRecepteur(idCC:any){
    this.virementService.retrieveVirementRecepteur(idCC).subscribe(res => this.listVirementRecepteur =res)
  }

  retrieveCompteCourrant(idCC:any){
    this.compteService.retrieveCompteCourrant(idCC).subscribe(res => this.uncomptecourrant = res)
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
