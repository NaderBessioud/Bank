import { Component, OnInit } from '@angular/core';
import {CEServiceService} from "../../Services/ceservice.service";
import {Options} from "@angular-slider/ngx-slider";
import {CanvasJS} from "../../../assets/canvasjs.angular.component";
import { ViewChild } from '@angular/core'
import {WebSocketServiceService} from "../../Services/web-socket-service.service";
@Component({
  selector: 'app-cesimulator',
  templateUrl: './cesimulator.component.html',
  styleUrls: ['./cesimulator.component.scss']
})
export class CESimulatorComponent implements OnInit {

   details = new Map<string, string>();
  chart: any;
total:number=0
  verif:boolean=true
  error1:any;
  error2:any;
  typedetails:any;
  options: Options = {
    floor: 0,
    ceil: 30,
    step:1,

  };
  init:number=0;
  mens:number=0;
  type:any;
  typeV:any;
  typeP:any;
  res:number=0;
  periode:number=5;
  interestE:any=0;
  contubition:number=0;
  constructor(private service:CEServiceService,private webSocketService:WebSocketServiceService) {

  }
  @ViewChild('primaryModal') primaryModal: any;
  @ViewChild('primaryModal1') primaryModal1: any;

  ngOnInit(): void {
    this.details.set("LIVRET_A", "Le livret A est un compte d'épargne rémunéré dont les fonds sont disponibles à tout moment. Ce compte est sans frais et les intérêts versés sont exonérés d'impôt sur le revenu et de prélèvements sociaux");
    this.details.set("LEP", "C'est un placement dont le taux d'intérêt est attractif. Votre épargne ne court aucun risque et vous n'avez pas d'impôt à payer sur les intérêts.");
    this.details.set("LDDS", "Le livret de développement durable et solidaire (ancien Codevi) est un produit d'épargne rémunéré dont les fonds sont disponibles à tout moment. Tous les établissements bancaires peuvent le proposer.");
    this.details.set("LIVRET_JEUNE", "Le livret jeune est un produit d'épargne réservé aux jeunes de 12 à 25 ans. ");

  }

  simulate(){




      this.service.ContributionTotal(this.mens,this.typeV,this.typeP,this.periode).subscribe(c=>{
        console.log(Number(this.init)+c)
        if(this.type=="LIVRET_A"){
        if(Number(this.init)+c >22950){
          this.error1="le plafond maximum de ";
          this.error2=" est de 22 950 €"
          this.verif=false
          console.log(this.verif)
          this.primaryModal1.show();

        }
        else if(this.init<10 ){
          this.error1="le depot initial minimum de ";
          this.error2=" est de 10 €"
          this.verif=false
          this.primaryModal1.show();

        }
        }
        else if(this.type=="LEP"){

            if(Number(this.init)+c >7700){
              this.error1="le plafond maximum de ";
              this.error2=" est de 7 700 €"
              this.verif=false
              this.primaryModal1.show();
            }
            else if(this.init<30 ){
              this.error1="le depot initial minimum de ";
              this.error2=" est de 30 €"
              this.verif=false
              this.primaryModal1.show();
            }


        }


        else if(this.type=="LDDS"){

            if(Number(this.init)+c >12000 ){
              this.error1="le plafond maximum de ";
              this.error2=" est de 12 000 €"
              this.verif=false
              this.primaryModal1.show();
            }
            else if(this.init<15 ){
              this.error1="le depot initial minimum de ";
              this.error2=" est de 15 €"
              this.verif=false
              this.primaryModal1.show();
            }


        }

        else if(this.type=="LIVRET_JEUNE"){
            if(Number(this.init)+c >1600  ){
              this.error1="le plafond maximum de ";
              this.error2=" est de 1 600 €"
              this.verif=false
              this.primaryModal1.show();
            }
            else if(this.init<10 ){
              this.error1="le depot initial minimum de ";
              this.error2=" est de 10 €"
              this.verif=false
              this.primaryModal1.show();
            }



        }

        console.log(this.verif)

        if(this.verif==true){
          if(this.typeP =="annees"){
            this.service.Simulate(this.init,this.mens,this.periode,this.type,this.typeV).subscribe(result=>{
              this.res=result

                this.contubition=c;
                this.interestE=result-c-this.init
                this.interestE = parseFloat(this.interestE).toFixed(3);
                this.chart = new CanvasJS.Chart("chartContainer",{
                  creditShow:false,
                  dataPointWidth: 100,
                  backgroundColor:"#e4e5e7",


                  animationEnabled: true,
                  toolTip: {

                    shared: true
                  },
                  legend: {
                    horizontalAlign: "right",
                    verticalAlign: "center",
                    reversed: true,
                    Visibility:"hidden",
                  },
                  axisY: {
                    gridColor:"white",
                    lineColor: "#e4e5e7",
                    includeZero: true,
                    Color:"white",

                  },
                  axisX:{
                    lineColor: "#e4e5e7",
                    labelShow:false,
                    labelFormatter: function(){
                      return "";
                    }
                  },
                  data: [
                    {
                      type: "stackedColumn100",
                      color:"#0074D9",
                      name: "Depot Initial",
                      labelShow:false,
                      showInLegend: false,
                      indexLabel: "#percent %",
                      indexLabelPlacement: "inside",
                      indexLabelFontColor: "white",
                      dataPoints: [
                        { label: "économie totale", y: (this.init/result)*100 },

                      ]
                    },
                    {
                      type: "stackedColumn100",
                      name: "Contrubition totale",
                      labelShow:false,
                      color:"#4192D9",
                      showInLegend: false,
                      indexLabel: "#percent %",
                      indexLabelPlacement: "inside",
                      indexLabelFontColor: "white",
                      dataPoints: [
                        { label: "économie totale", y: (c/result)*100 },

                      ]
                    }, {
                      type: "stackedColumn100",
                      name: "Intérêts gagnés",
                      color:"#7ABAF2",
                      labelShow:false,
                      showInLegend: false,
                      indexLabel: "#percent %",
                      indexLabelPlacement: "inside",
                      indexLabelFontColor: "white",
                      dataPoints: [

                        { label: "économie totale", y: ((this.res-c-this.init)/result)*100 },

                      ]
                    }]

                })
                this.chart.render();
              })



          }
          else {
            this.service.SimulatePM(this.init,this.mens,this.periode,this.type,this.typeV).subscribe(result=>{
              this.res=result

                this.contubition=c;
                this.interestE=result-c-this.init
                this.interestE = parseFloat(this.interestE).toFixed(3);
                this.chart = new CanvasJS.Chart("chartContainer",{

                  dataPointWidth: 100,
                  backgroundColor:"#e4e5e7",


                  animationEnabled: true,

                  axisY: {
                    gridColor:"white",
                    lineColor: "#e4e5e7",


                  },
                  axisX:{
                    lineColor: "#e4e5e7",
                    labelShow:false,
                    labelFormatter: function(){
                      return "";
                    }
                  },
                  toolTip: {

                    shared: true
                  },
                  legend: {
                    horizontalAlign: "right",
                    verticalAlign: "center",
                    reversed: true,
                    Visibility:"hidden",
                  },

                  data: [
                    {
                    type: "stackedColumn100",
                    color:"#0074D9",
                    name: "Depot Initial",
                    labelShow:false,
                    showInLegend: false,
                    indexLabel: "#percent %",
                    indexLabelPlacement: "inside",
                    indexLabelFontColor: "white",
                    dataPoints: [
                      { label: "économie totale", y: (this.init/result)*100 },

                    ]
                  },
                    {
                    type: "stackedColumn100",
                    name: "Contrubition totale",
                    labelShow:false,
                    color:"#4192D9",
                    showInLegend: false,
                    indexLabel: "#percent %",
                    indexLabelPlacement: "inside",
                    indexLabelFontColor: "white",
                    dataPoints: [
                      { label: "économie totale", y: (c/result)*100 },

                    ]
                  }, {
                    type: "stackedColumn100",
                    name: "Intérêts gagnés",
                    color:"#7ABAF2",
                    labelShow:false,
                    showInLegend: false,
                    indexLabel: "#percent %",
                    indexLabelPlacement: "inside",
                    indexLabelFontColor: "white",
                    dataPoints: [

                      { label: "économie totale", y: ((this.res-c-this.init)/result)*100 },

                    ]
                  }]

                })
                this.chart.render();




            })
          }
        }

      })




  }


  getDetail(){
    this.typedetails=this.details.get(this.type)
    this.primaryModal.show();
  }


}
