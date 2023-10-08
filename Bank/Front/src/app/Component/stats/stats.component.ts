import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ComptetitreservService } from 'src/app/Services/comptetitreserv.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

 
  pieChartOptions = {
    responsive: true
}
pieChartLabels :any = [
  { 
      data: []
  }
];
pieChartColor:any = [
  {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
      'rgba(255,165,0,0.9)',
      'rgba(139, 136, 136, 0.9)',
      'rgba(255, 161, 181, 0.9)',
      'rgba(255, 102, 0, 0.9)'
      ]
  }
]
pieChartData:any = [
  { 
      data: []
  }
];

  constructor(private comptetitreserv: ComptetitreservService) {
   
   }
  ngOnInit(): void {
    this.comptetitreserv.stats().subscribe(data=> {
      this.pieChartData = data as any[] ;
      console.log(data) // FILL THE CHART ARRAY WITH DATA.
    },  
    );
    this.comptetitreserv.names().subscribe(data=> {
      this.pieChartLabels=data as any[];
      console.log(data);
    },
    );
}
onChartClick(event) {
  console.log(event);
}
  
   

}
