import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {RdvComponent} from "./Component/rdv/rdv.component";
import {CalenderComponent} from "./Component/calender/calender.component";
import {SinglePostResolver} from "./Component/single-post-resolver";
import {CESimulatorComponent} from "./Component/cesimulator/cesimulator.component";
import {SuccesPaymentComponent} from "./Component/succes-payment/succes-payment.component";
import {ChatComponent} from "./Component/chat/chat.component";
import {FormulaireCongeComponent} from "./Component/Conges/formulaire-conge/formulaire-conge.component";
import {AfficheSalaireComponent} from "./Component/salaires/affiche-salaire/affiche-salaire.component";
import {JourFerierComponent} from "./Component/Conges/jour-ferier/jour-ferier.component";
import {AfficherCongeComponent} from "./Component/Conges/afficher-conge/afficher-conge.component";
import {
  SVehiculeTauxVariableComponent
} from "./Component/Simulateur/s-vehicule-taux-variable/s-vehicule-taux-variable.component";
import {
  SPersonnelTauxVariableComponent
} from "./Component/Simulateur/s-personnel-taux-variable/s-personnel-taux-variable.component";
import {STauxVariableComponent} from "./Component/Simulateur/s-taux-variable/s-taux-variable.component";
import {SVehiculeTauxFixeComponent} from "./Component/Simulateur/s-vehicule-taux-fixe/s-vehicule-taux-fixe.component";
import {
  SPersonnelTauxFixeComponent
} from "./Component/Simulateur/s-personnel-taux-fixe/s-personnel-taux-fixe.component";
import {STauxFixComponent} from "./Component/Simulateur/s-taux-fix/s-taux-fix.component";
import {ModifierFormationComponent} from "./Component/Formations/modifier-formation/modifier-formation.component";
import {AjouterFormationsComponent} from "./Component/Formations/ajouter-formations/ajouter-formations.component";
import {AfficherFormationsComponent} from "./Component/Formations/afficher-formations/afficher-formations.component";
import {SimulateurComponent} from "./Component/Simulateur/simulateur/simulateur.component";
import {ComptetitreComponent} from "./Component/comptetitre/comptetitre.component";
import {ObligationComponent} from "./Component/obligation/obligation.component";
import {ObligationfrontComponent} from "./Component/obligationfront/obligationfront.component";
import {ObligationdetailsComponent} from "./Component/obligationdetails/obligationdetails.component";
import {CtitrefrontComponent} from "./Component/ctitrefront/ctitrefront.component";
import {AdmindemandeComponent} from "./Component/admindemande/admindemande.component";
import {SimulateurobligationComponent} from "./Component/simulateurobligation/simulateurobligation.component";
import {StatsComponent} from "./Component/stats/stats.component";
import {ActionComponent} from "./Component/action/action.component";
import {ComptebancaireComponent} from "./Component/comptebancaire/comptebancaire.component";
import {OperationbancaireComponent} from "./Component/operationbancaire/operationbancaire.component";
import {VirementComponent} from "./Component/virement/virement.component";
import {ComptecourrantComponent} from "./Component/comptecourrant/comptecourrant.component";
import {CartebancaireComponent} from "./Component/cartebancaire/cartebancaire.component";
import {ProduitAssueanceComponent} from "./Component/produit-assueance/produit-assueance.component";
import {UserProfileComponent} from "./Component/user-profile/user-profile.component";
import {EmployeesApprouveComponent} from "./Component/employees-approuve/employees-approuve.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'Action',
        component: ActionComponent,
        data: {
          title: 'Action'
        }
      },
      {
        path: 'success',
        component: SuccesPaymentComponent,
        data: {
          title: 'Payement avec succées '
        }
      },
      {
        path: 'RDV',
        component: RdvComponent,
        data: {
          title: 'Page '
        }
      },

      {
        path: 'simulateurCE',
        component: CESimulatorComponent,
        data: {
          title: 'Simulateur '
        }
      },

      {
        path: 'chat',
        component: ChatComponent,
        data: {
          title: 'Chat '
        }
      },

      {
        path: 'cartebancaire',
        component: CartebancaireComponent,
        data: {
          title: 'Page '
        }
      },
      {
        path: 'comptecourrant',
        component: ComptecourrantComponent,
        data: {
          title: 'Page '
        }
      },
      {
        path: 'virement',
        component: VirementComponent,
        data: {
          title: 'Page '
        }
      },
      {
        path: 'operationbancaire',
        component: OperationbancaireComponent,
        data: {
          title: 'Page '
        }
      },
      {
        path: 'comptebancaire',
        component: ComptebancaireComponent,
        data: {
          title: 'Page '
        }
      },



      {
        path: 'cal',
        component: CalenderComponent,
        data: {
          title: 'calender '
        },
        resolve: {
          singlePost: SinglePostResolver
        }
      },

      {
        path: 'Simulateur',
        component: SimulateurComponent,
        data: {
          title: 'Simulateur'
        },

      },

      {
        path: 'Formations',
        component: AfficherFormationsComponent,
        data: {
          title: 'Formations'
        },

      },
      {
        path: 'ajouter-Formations',
        component: AjouterFormationsComponent,
        data: {
          title: 'Ajouter-Formations'
        },

      },
      {
        path: 'modifierformation/:id',
        component: ModifierFormationComponent,
        data: {
          title: 'modifier-Formations'
        },

      },
      {
        path: 'simulateur-immoblierFixe',
        component:STauxFixComponent ,
        data: {
          title: 'Simulateur IMMOBLIER a taux fixe '
        }
      },
      {
        path: 'simulateur-PersonnelFixe',
        component:SPersonnelTauxFixeComponent ,
        data: {
          title: 'Simulateur Personnel a taux fixe '
        }
      },
      {
        path: 'simulateur-VehiculeFixe',
        component:SVehiculeTauxFixeComponent ,
        data: {
          title: 'Simulateur Personnel a taux fixe '
        }
      },
      {
        path: 'simulateur-immoblierVariable',
        component:STauxVariableComponent ,
        data: {
          title: 'Simulateur immoblier a taux variable '
        }
      },
      {
        path: 'simulateur-PersonnelVariable',
        component:SPersonnelTauxVariableComponent ,
        data: {
          title: 'Simulateur Personnel a taux Variable '
        }
      },
      {
        path: 'simulateur-VehiculeVariable',
        component:SVehiculeTauxVariableComponent ,
        data: {
          title: 'Simulateur Personnel a taux Variable '
        }
      },
      {
        path: 'Conges',
        component:AfficherCongeComponent ,
        data: {
          title: ' Conges '
        }
      },

      {
        path: 'JourFerier',
        component:JourFerierComponent ,
        data: {
          title: 'JourFerier'
        }
      },
      {
        path: 'DemandeConge',
        component:FormulaireCongeComponent ,
        data: {
          title: 'DemandeConge '
        }
      },
      {
        path: 'Salaires',
        component:AfficheSalaireComponent ,
        data: {
          title: 'Salaires'
        }
      },
      {
        path: 'employeeappr',
        component: EmployeesApprouveComponent,
        data: {
          title: 'approve'
        }
      },

      {
        path: 'profile',
        component: UserProfileComponent,
        data: {
          title: 'profile'
        }

      },
      {
        path: 'assurances',
        component: ProduitAssueanceComponent,
        data: {
          title: 'assurance'
        }

      },




      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'credit',
        loadChildren: () => import('./Component/credit/credit.module').then(m => m.CreditModule)
      },
      { path:'affichelsctit', component:ComptetitreComponent},
      { path:'affichelsob', component:ObligationComponent},
      { path:'obfr', component:ObligationfrontComponent},
      { path: 'ob/:id', component:ObligationdetailsComponent },
      { path: 'insctit', component:CtitrefrontComponent },
      { path: 'valctit', component:AdmindemandeComponent },
      { path: 'simulateurO', component:SimulateurobligationComponent },
      { path: 'test', component:StatsComponent },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
