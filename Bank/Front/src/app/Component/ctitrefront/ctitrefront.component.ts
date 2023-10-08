import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comptebancaire } from 'src/app/Modals/comptebancaire';
import { Demandectit } from 'src/app/Modals/demandectit';
import { DemandecreationctitService } from 'src/app/Services/demandecreationctit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ctitrefront',
  templateUrl: './ctitrefront.component.html',
  styleUrls: ['./ctitrefront.component.scss']
})
export class CtitrefrontComponent implements OnInit {
cbs:Comptebancaire[]
id:Number
demandectit:Demandectit=new Demandectit()
  constructor(private demandeserv: DemandecreationctitService,private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.demandeserv.getcbList(1).subscribe(data => {
      this.cbs = data;
    });

  }
  addComptetitre(demandectit){
   
    this.demandeserv.createdemande(demandectit,this.id).subscribe( data =>{
      console.log(data);
      if(data==false){Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vous avez déjà un compte titre avec ce compte bancaire !',
        footer: ''
      })}
      else{Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Demande de création de compte titre avec le compte bancaire "+this.id+" passée avec succées",
        showConfirmButton: false,
        timer: 1500
      })}
     
      
      
    })}
}
