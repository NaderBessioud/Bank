import { INavData } from '@coreui/angular';
var navItems1: INavData[]=[]
if ((sessionStorage.getItem("role") =="PARTICULIER") || (sessionStorage.getItem("role") =="ENTREPRISE_PUBLIC")
||(sessionStorage.getItem("role") =="ENTREPRISE_PRIVE") ){
  navItems1 = [

  {
    name: 'Obligation',
    url: '/affichelsob',
    icon: 'icon-puzzle'


  },
  {
    name: 'Compte titre',
    url: '/affichelsctit',
    icon: 'icon-link'

  },

  {
    name: 'Liste Obligation',
    url: '/obfr',
    icon: 'icon-list'

  },
  {
    name: 'Demande ',
    url: '/insctit',
    icon: 'icon-pencil'

  },
  {
    name: 'Validation ',
    url: '/valctit',
    icon: 'icon-pencil'

  },
  {
    name: 'Action',
    url: '/Action',
    icon: 'icon-puzzle'

  },
  {
    name: 'StatAction',
    url: '/StatAction',
    icon: 'icon-bank'

  },

  {
    name: 'Simulateur',
    url: '/Simulateur',
    icon: 'icon-calculator'

  },


  {
    name: 'RDV',
    url: '/RDV',
    icon: 'icon-calendar'

  },

  {
    name: 'Calender',
    url: '/cal',
    icon: 'icon-calendar'

  },

  {
    name: 'Simulateur epargne',
    url: '/simulateurCE',
    icon: 'icon-calculator'

  },

  {
    name: 'Chat',
    url: '/chat',
    icon: 'icon-bubbles'

  },
  {
    name: 'Credit',
    url: '/credit',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Demander un credit',
        url: '/credit/request',
        icon: 'icon-puzzle'
      }

    ]
  },

  {
    name: 'cartebancaire',
    url: '/cartebancaire',
    icon: 'icon-credit-card'

  },
  {
    name: 'comptecourrant',
    url: '/comptecourrant',
    icon: 'icon-wallet',

  },
  {
    name: 'virement',
    url: '/virement',
    icon: 'icon-basket',

  },

  {
    name: 'operationbancaire',
    url: '/operationbancaire',
    icon: 'icon-basket-loaded',

  },
  {
    name: 'comptebancaire',
    url: '/comptebancaire',
    icon: 'icon-diamond',

  },

  {
    name: 'Assurances',
    url: '/assurances',
    icon: 'icon-globe',

  },




];}
else{
  navItems1 = [


    {
      name: 'Salaires',
      url: '/Salaires',
      icon: 'icon-calculator'

    },
    {
      name: 'Formations',
      url: '/Formations',
      icon: 'icon-star'

    },
    {
      name: 'Conges',
      url: '/Conges',
      icon: 'icon-calculator'

    },


    {
      name: 'Calender',
      url: '/cal',
      icon: 'icon-calendar'

    },


    {
      name: 'Chat',
      url: '/chat',
      icon: 'icon-bubbles'

    },


    {
      name: 'Employees',
      url: '/employeeappr',
      icon: 'icon-briefcase',

    },


    {
      name: 'Assurances',
      url: '/assurances',
      icon: 'icon-globe',

    },




  ];
}
export const navItems: INavData[] = navItems1;
