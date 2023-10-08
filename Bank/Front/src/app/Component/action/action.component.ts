import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Action} from "../../Modals/action";
import {ActionService} from "../../Services/action.service";


@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  listActions: any;
  listAction: any;
  titre:any;
  action!: Action;
  closeResult!: string;
  form: boolean = false;

  constructor(private actionService: ActionService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.getAction(1);
    this.getAllActions();

    this.action = {
      idAC:null,
      titre:null,
      prix:null,
      nombre:null,
      type:null,
      total:null
    };

  }


  searchTitle(): void{
    this.actionService.findByTitle(this.titre)
      .subscribe(
        data => {
          this.action = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );

  }

  getAllActions(){
    this.actionService.getAllActions().subscribe(res =>
      this.listActions = res);
  }

  addAction(act:Action){
    this.actionService.addAction(act).subscribe(() => {
      this.getAllActions();
    });
  }

  getAction(ActionId:any){
    this.actionService.getAction(ActionId).subscribe(res =>
      this.listAction = res);
  }

  deleteComplaint(ActionId:any) {
    this.actionService.deleteAction(ActionId).subscribe( () => {
      this.getAllActions();
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
