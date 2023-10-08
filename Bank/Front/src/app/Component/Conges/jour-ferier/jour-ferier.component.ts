import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CongeServiceService } from 'src/app/Services/conge-service.service';

@Component({
  selector: 'app-jour-ferier',
  templateUrl: './jour-ferier.component.html',
  styleUrls: ['./jour-ferier.component.scss']
})
export class JourFerierComponent implements OnInit {
holiday:any;
holi:any
country:any

  constructor( private router: Router,
    private Service: CongeServiceService) { }

  ngOnInit(): void {
    this.holiday={
      name: null,
    name_local: null,
    language: null,
    description: null,
    country: null,
    location: null,
    type: null,
    date: null,
    date_year: null,
    date_month: null,
    date_day: null,
    week_day: null,
    }
    
  }
  getholiday(){
   console.log(this.country)
    this.Service.holidayyy(this.country).subscribe(h => {
      console.log(h)
      this.holi = h;
      
    });
   }
}
