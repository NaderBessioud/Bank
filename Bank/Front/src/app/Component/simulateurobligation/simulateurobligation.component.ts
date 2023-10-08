import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { ObligationService } from 'src/app/Services/obligation.service';
import Swal from 'sweetalert2';
import * as Highcharts from 'highcharts';


declare var require: any;
@Component({
  selector: 'app-simulateurobligation',
  templateUrl: './simulateurobligation.component.html',
  styleUrls: ['./simulateurobligation.component.scss']
})
export class SimulateurobligationComponent implements OnInit {
 don:any;
 don1:any;
 don2:any;
 don3:any;
 don4:any;
 don5:any;
 don6:any;
 don7:any;
 hide:Boolean=true
  value: Number = 0;
  value1:any=0;
  value2:any=0;
  value3:any=0;
  value4:any=0;
  options: Options = {
    floor: 0,
    ceil: 10000
  };
  options1: Options = {
    floor: 0,
    ceil: 100
  };
  
 
  
  constructor(private obligationservice : ObligationService) { }

  ngOnInit(): void {
    
  }
yield(){
 
  this.obligationservice.simulateur(this.value2,this.value1,this.value,this.value3,this.value4).subscribe(data=>{
    this.don=data[0];
    this.don1=data[1];
    this.don2=data[2];
    this.don3=data[3];
    this.don4=data[4];
    this.don5=data[5];
    this.don6=data[6];
    this.don7=data[7];
    console.log(data)
    this.hide=false;
 
    
 let optionss: any = {
    Chart: {
      type: 'histogram',
      height: 700
    },
    title: {
      text: "Evolution de la valeur de l'obligation"
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [data[5]-2,data[5],data[5]+2],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
 
    series: [{
      name: 'Si le taux coupon diminue de 2% :'+(data[5]-2)+"%",
      data: [data[1],data[3]]
  }, {
      name: 'Si le taux coupon reste : '+data[5]+"%",
      data: [data[1],data[1]]
  }, {
      name: 'Si le taux coupon augmente de 2% :'+(data[5]+2)+"%",
      data: [data[1],data[6]]
  }],
  
  }
  Highcharts.chart('container', optionss);
}

  )}
}
