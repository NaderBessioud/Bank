import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Obligation } from 'src/app/Modals/obligation';
import { ObligationService } from 'src/app/Services/obligation.service';
import { UploadFileService } from 'src/app/Services/upload-file-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-obligation',
  templateUrl: './obligation.component.html',
  styleUrls: ['./obligation.component.scss']
})
export class ObligationComponent implements OnInit {
  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  closeResult = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];

  filterTerm!: string;
  obligations:Obligation[]
  Obligation:Obligation=new Obligation();
  constructor(private router: Router,private modalService: NgbModal,private obligationservice : ObligationService,private uploadService: UploadFileService, private http: HttpClient) { }
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
  }
  private getobs(){
    this.obligationservice.getobList().subscribe(data => {
      this.obligations = data;
    });
  }
  urlll:any
  addob(Obligation:Obligation){
    const uploadData = new FormData();
    let current = new Date();
    let timestamp = current.getTime();
    uploadData.append('public_id', this.selectedFiless.name +timestamp );
    uploadData.append('upload_preset', 'msa732u9');
    uploadData.append('file', this.selectedFiless);
    uploadData.append('asset_id', '685986431274889');




    this.http.post(`https://api.cloudinary.com/v1_1/dlw3w0bei/image/upload`, uploadData).subscribe(res=> { this.urlll=res;
      this.Obligation.imageob=this.urlll.secure_url;
    this.obligationservice.createob(Obligation).subscribe( data =>{
      console.log(data);
      this.getobs();
    });
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The Obligation is created successfully',
        showConfirmButton: false,
        timer: 1500
      })
      
    })}
    editob(Obligation:Obligation){
      this.obligationservice.updateob(Obligation).subscribe(()=> this.getobs())
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Obligation updated successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
    download(){
      this.obligationservice.downloadFile().subscribe( (res =>
        {
          let file= new Blob([res], { type: 'application/pdf'});
          var fileUrl =URL.createObjectURL(file);
          window.open(fileUrl);
        }));}
       
        change($event) {
          this.changeImage = true;
        }
        changedImage(event) {
          this.selectedFile = event.target.files[0];
        }
        upload() {
          this.progress.percentage = 0;
          this.currentFileUpload = this.selectedFiles.item(0);
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress.percentage = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              Swal.fire(
                'Added!',
                'List of obligations has been added.',
                'success'
              )
              this.getobs();
            }
            this.selectedFiles = undefined;
           }
          );
        }
        selectFile(event) {
          this.selectedFiles = event.target.files;
        }
        selectedFiless: File
        onFileChanged(event) {
          this.selectedFiless = event.target.files[0];
      
        }
        deleteob(id:Number){
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
          }).then((result) => {
            if (result.value) {
            this.obligationservice.deleteob(id).subscribe(()=> this.getobs());
            Swal.fire(
              'Deleted!',
              'The Obligation has been deleted.',
              'success'
            )
        } else if (
           result.dismiss === Swal.DismissReason.cancel)
           { Swal.fire(
              'Cancelled',
              'The Obligation is safe :)',
              'error')}})
            }
            
}
