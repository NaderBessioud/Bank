import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Comptetitre } from 'src/app/Modals/comptetitre';
import { Obligation } from 'src/app/Modals/obligation';
import { ComptetitreservService } from 'src/app/Services/comptetitreserv.service';
import { ObligationService } from 'src/app/Services/obligation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-obligationfront',
  templateUrl: './obligationfront.component.html',
  styleUrls: ['./obligationfront.component.scss']
})
export class ObligationfrontComponent implements OnInit {
  closeResult = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];
  id:any;
  ido:Number;
  filterTerm!: string;
  obligations:Obligation[]
  cts:Comptetitre[]
  Obligation:Obligation=new Obligation();
  totalItems: number = 64;
  currentPage: number   = 4;
  smallnumPages: number = 0;

  maxSize: number = 5;
  bigTotalItems: number = 675;
  bigCurrentPage: number = 1;
  numPages: number = 0;

  currentPager: number   = 4;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
  constructor(config: NgbModalConfig,private router: Router,private route: ActivatedRoute,private modalService: NgbModal,private obligationservice : ObligationService,private ctservice : ComptetitreservService) {
    config.backdrop = 'static';
		config.keyboard = false;
   }
   open1(content) {
		this.modalService.open(content);
	}
  onTableDataChange(event: any) {
    this.page = event;
    this.getobs();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getobs();
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
    this.getobs();
    this.getct();
    this.id = this.route.snapshot.params['id'];
    
  }
  private getobs(){
    this.obligationservice.getobList().subscribe(data => {
      this.obligations = data;
    });
  }
  private getct(){
    this.ctservice.getctList(1).subscribe(data => {
      this.cts= data;
    });
  }
  private acheterob(ido:Number){
    this.ctservice.achatob(this.id,ido).subscribe({
      next:()  => Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'félicitations pour votre investissement !',
        showConfirmButton: false,
        timer: 1500
      }) ,
      error: ()=> Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Pensez à alimenter votre compte titre</a>'
      }),
      complete: () => console.log(ido)}
    );
  }
}
