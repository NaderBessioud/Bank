import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObligationService } from 'src/app/Services/obligation.service';

@Component({
  selector: 'app-affichedetailssim',
  templateUrl: './affichedetailssim.component.html',
  styleUrls: ['./affichedetailssim.component.scss']
})
export class AffichedetailssimComponent implements OnInit {
value:any
value1:any
value2:any
value3:any
value4:any
  constructor(private obligationservice : ObligationService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.value = this.route.snapshot.params['value'];
    this.value1 = this.route.snapshot.params['value1'];
    this.value2 = this.route.snapshot.params['value2'];
    this.value3 = this.route.snapshot.params['value3'];
    this.value4 = this.route.snapshot.params['value4'];
    this.obligationservice.simulateur(this.value2,this.value1,this.value,this.value3,this.value4).subscribe(data=>
      console.log(data))
  }
  
     

}
