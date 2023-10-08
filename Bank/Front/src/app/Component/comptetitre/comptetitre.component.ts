import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comptetitre } from 'src/app/Modals/comptetitre';
import { ComptetitreservService } from 'src/app/Services/comptetitreserv.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-comptetitre',
  templateUrl: './comptetitre.component.html',
  styleUrls: ['./comptetitre.component.scss']
})
export class ComptetitreComponent implements OnInit {
  closeResult = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];

  filterTerm!: string;
  comptetitres:Comptetitre[]
  Comptetitre:Comptetitre=new Comptetitre();
  public idCT:Number;
  public idCB:Number;
  constructor(private comptetitreserv: ComptetitreservService,private router: Router,private modalService: NgbModal) { }
  onTableDataChange(event: any) {
    this.page = event;
    this.getcomptetitres();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getcomptetitres();
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

 
  ngOnInit(): void {
    this.getcomptetitres();
  }
  private getcomptetitres(){
    this.comptetitreserv.getComptetitList().subscribe(data => {
      this.comptetitres = data;
    });
  }
  addComptetitre(Comptetitre){
    this.comptetitreserv.createComptetit(Comptetitre,1).subscribe( data =>{
      console.log(data);
      this.getcomptetitres();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The Compte titre is created successfully',
        showConfirmButton: false,
        timer: 1500
      })
      
    })}
    editcomptetitre(Comptetitre:Comptetitre){
      this.comptetitreserv.updateComptetitre(Comptetitre).subscribe(()=> this.getcomptetitres())
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compte titre updated successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
  
}
