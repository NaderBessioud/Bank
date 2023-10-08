import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comptetitre } from 'src/app/Modals/comptetitre';
import { Demandectit } from 'src/app/Modals/demandectit';
import { ComptetitreservService } from 'src/app/Services/comptetitreserv.service';
import { DemandecreationctitService } from 'src/app/Services/demandecreationctit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admindemande',
  templateUrl: './admindemande.component.html',
  styleUrls: ['./admindemande.component.scss']
})
export class AdmindemandeComponent implements OnInit {
demandes:Demandectit[]
closeResult = '';
page: number = 1;
count: number = 0;
tableSize: number = 6;
tableSizes: any = [3, 6, 9, 12];

filterTerm!: string;
comptetitres:Comptetitre[]
Comptetitre:Comptetitre=new Comptetitre();
public idCT:Number;
id:Number;
  constructor(private comptetitreserv: ComptetitreservService,private demandeserv: DemandecreationctitService,private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getdemandes();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getdemandes();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getdemandes();
  }
  open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}



  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  private getdemandes(){
    this.demandeserv.getdemandeList().subscribe(data => {
      this.demandes = data;
    });
  }
  addComptetitre(Comptetitre,id){
    this.comptetitreserv.createComptetit(Comptetitre,id).subscribe( data =>{
      console.log(data);
      
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The Compte titre is created successfully',
        showConfirmButton: false,
        timer: 1500
      })
      
    })}
    statedem(id:Number){
      this.demandeserv.updateStatedem(id).subscribe(()=> this.getdemandes())
    
    }
}
