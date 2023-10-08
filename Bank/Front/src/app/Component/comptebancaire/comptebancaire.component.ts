import { Component, OnInit } from '@angular/core';
import {Comptebancaire} from "../../Modals/comptebancaire";
import {CartebancaireService} from "../../Services/cartebancaire.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ComptebancaireService} from "../../Services/comptebancaire.service";

@Component({
  selector: 'app-comptebancaire',
  templateUrl: './comptebancaire.component.html',
  styleUrls: ['./comptebancaire.component.scss']
})
export class ComptebancaireComponent implements OnInit {
  form : boolean = false;
  closeResult! : string;
  comptebancaire!:Comptebancaire;

  constructor(private comptebancaireService : ComptebancaireService,private modalService: NgbModal) { }

  ngOnInit(): void {


    this.comptebancaire = {
      idCBA:null,
      ref:null,
      bloquee:null,
      dateouverture:null,
      clcomptes:null,
      ccompteepargnes:null,
      comptetitres:null,
      usercomptebancaire:null,
      comptecourrantbancaire:null
    }
  }



  addComptebancaire(compte:any,idU: any){
    this.comptebancaireService.addComptebancaire(compte,idU).subscribe(() => {
      this.form = false;
    });
  }


  addCompteCourrantBancaire(comptecourrant:any,idCBA: any,idCB:any){
    this.comptebancaireService.addCompteCourrantBancaire(comptecourrant,idCBA,idCB).subscribe(() => {
      this.form = false;
    });
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
