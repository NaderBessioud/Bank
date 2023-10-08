import { Component, OnInit } from '@angular/core';
import {ExcelService} from "../../Services/excel.service";
import {ActionService} from "../../Services/action.service";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss']
})
export class ExcelComponent implements OnInit {

  file: File | undefined
  loading = false
  listActions:any;

  constructor(private actionService: ActionService,private fileupload: ExcelService) { }

  ngOnInit(): void {
    this.getAllActions();
  }

  getAllActions(){
    this.actionService.getAllActions().subscribe(res =>
      this.listActions = res);
  }

  selectfile(event: any) {
    this.file = event.target.files[0]
  }

  onUpload() {

    this.loading = true
    this.fileupload.uploadExcel(this.file).subscribe(
      (response: any) => {
        console.log(response);
        this.loading = false
        alert(response.Message)
      },
      (error: any) => {
        console.log(error);
        this.loading = false
        alert(error.error)
      }
    )
  }

  download() {
    this.fileupload
      .downloadExcel()
      .subscribe(blob => saveAs(blob, "tutorials.xlsx"));
  }

}
