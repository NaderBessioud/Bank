import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';


// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import {RdvComponent} from "./Component/rdv/rdv.component";
import {HttpClientModule} from "@angular/common/http";
import {ModalModule} from "ngx-bootstrap/modal";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CalenderComponent } from './Component/calender/calender.component';


import { CommonModule } from '@angular/common';

import { FlatpickrModule } from 'angularx-flatpickr';

import {NgbModalModule, NgbModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {SinglePostResolver} from "./Component/single-post-resolver";
import { CESimulatorComponent } from './Component/cesimulator/cesimulator.component';
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import {WebSocketServiceService} from "./Services/web-socket-service.service";
import { SuccesPaymentComponent } from './Component/succes-payment/succes-payment.component';
import {ToastrModule} from "ngx-toastr";
import { ChatComponent } from './Component/chat/chat.component';
import {AfficheSalaireComponent} from "./Component/salaires/affiche-salaire/affiche-salaire.component";
import {AfficherFormationsComponent} from "./Component/Formations/afficher-formations/afficher-formations.component";
import {AjouterFormationsComponent} from "./Component/Formations/ajouter-formations/ajouter-formations.component";
import {ModifierFormationComponent} from "./Component/Formations/modifier-formation/modifier-formation.component";
import {AfficherCongeComponent} from "./Component/Conges/afficher-conge/afficher-conge.component";
import {FormulaireCongeComponent} from "./Component/Conges/formulaire-conge/formulaire-conge.component";
import {JourFerierComponent} from "./Component/Conges/jour-ferier/jour-ferier.component";
import {SimulateurComponent} from "./Component/Simulateur/simulateur/simulateur.component";
import {AdmindemandeComponent} from "./Component/admindemande/admindemande.component";
import {AffichedetailssimComponent} from "./Component/affichedetailssim/affichedetailssim.component";
import {ComptetitreComponent} from "./Component/comptetitre/comptetitre.component";
import {CtitrefrontComponent} from "./Component/ctitrefront/ctitrefront.component";
import {ObligationComponent} from "./Component/obligation/obligation.component";
import {ObligationdetailsComponent} from "./Component/obligationdetails/obligationdetails.component";
import {ObligationfrontComponent} from "./Component/obligationfront/obligationfront.component";
import {SimulateurobligationComponent} from "./Component/simulateurobligation/simulateurobligation.component";
import {StatsComponent} from "./Component/stats/stats.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {Cloudinary, CloudinaryConfiguration, CloudinaryModule} from "@cloudinary/angular-5.x";
import {NgxPaginationModule} from "ngx-pagination";
import {CreditComponent} from "./Component/credit/credit.component";
import {CreditRequestComponent} from "./Component/credit/credit-request/credit-request.component";
import {RepaymentComponent} from "./Component/credit/repayment/repayment.component";
import {ActionComponent} from "./Component/action/action.component";
import {ExcelComponent} from "./Component/excel/excel.component";
import {StatActionComponent} from "./Component/stat-action/stat-action.component";
import {CartebancaireComponent} from "./Component/cartebancaire/cartebancaire.component";
import {ComptebancaireComponent} from "./Component/comptebancaire/comptebancaire.component";
import {OperationbancaireComponent} from "./Component/operationbancaire/operationbancaire.component";
import {VirementComponent} from "./Component/virement/virement.component";
import {ComptecourrantComponent} from "./Component/comptecourrant/comptecourrant.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {OrderModule} from "ngx-order-pipe";
import {EmployeesApprouveComponent} from "./Component/employees-approuve/employees-approuve.component";
import {ProduitAssueanceComponent} from "./Component/produit-assueance/produit-assueance.component";
import {UserProfileComponent} from "./Component/user-profile/user-profile.component";
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    FormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgxSliderModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    CommonModule,
    NgbModalModule,
    Ng2SearchPipeModule,
    CommonModule,
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dlw3w0bei' } as CloudinaryConfiguration),
    NgxSliderModule,
    ChartsModule,
    HttpClientModule,
    NgxSliderModule,
    MatExpansionModule,
    OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule,





  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    RdvComponent,
    CalenderComponent,
    CESimulatorComponent,
    CanvasJSChart,
    SuccesPaymentComponent,
    ChatComponent,
    AfficheSalaireComponent,
    AfficherFormationsComponent,
    AjouterFormationsComponent,
    ModifierFormationComponent,
    AfficherCongeComponent,
    FormulaireCongeComponent,
    JourFerierComponent,
    SimulateurComponent,
    AdmindemandeComponent,
    AffichedetailssimComponent,
    ComptetitreComponent,
    CtitrefrontComponent,
    ObligationComponent,
    ObligationdetailsComponent,
    ObligationfrontComponent,
    SimulateurobligationComponent,
    StatsComponent,
    ActionComponent,
    ExcelComponent,
    StatActionComponent,
    CartebancaireComponent,
    ComptetitreComponent,
    ComptebancaireComponent,
    OperationbancaireComponent,
    VirementComponent,
    ComptecourrantComponent,
    EmployeesApprouveComponent,
    ProduitAssueanceComponent,
    UserProfileComponent



  ],
  providers: [
    SinglePostResolver,
    WebSocketServiceService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
