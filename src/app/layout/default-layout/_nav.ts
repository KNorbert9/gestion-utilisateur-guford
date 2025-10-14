import {INavData} from '@coreui/angular';
import {SvgIcons} from "@ngneat/svg-icon";

export interface INavDataModel extends INavData {
  description?: string;
  code?: string;
  children?: INavDataModel[];
  localIcon?: SvgIcons
}

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: {name: 'cil-speedometer'}
  },
  {
    title: true,
    name: 'Importation'
  },
  {
    name: 'Exportation',
    title: true
  },
  {
    name: 'Inspection phytosanitaire',
    url: '/base',
    iconComponent: {name: 'cil-puzzle'},
    children: [
      {
        name: 'Produits Pharmaceutiques',
        url: '/base/accordion',
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs',

      },
      {
        name: 'Cards',
        url: '/base/cards',

      },
      {
        name: 'Carousel',
        url: '/base/carousel',

      },
      {
        name: 'Collapse',
        url: '/base/collapse',

      },
      {
        name: 'List Group',
        url: '/base/list-group',

      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs',

      },
      {
        name: 'Pagination',
        url: '/base/pagination',

      },
      {
        name: 'Placeholder',
        url: '/base/placeholder',

      },
      {
        name: 'Popovers',
        url: '/base/popovers',

      },
      {
        name: 'Progress',
        url: '/base/progress',

      },
      {
        name: 'Spinners',
        url: '/base/spinners',

      },
      {
        name: 'Tables',
        url: '/base/tables',

      },
      {
        name: 'Tabs',
        url: '/base/tabs',

      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',

      }
    ]
  },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/buttons/button-groups',
  //
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //
  //     }
  //   ]
  // },
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/forms/form-control',
  //
  //     },
  //     {
  //       name: 'Select',
  //       url: '/forms/select',
  //
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/forms/checks-radios',
  //
  //     },
  //     {
  //       name: 'Range',
  //       url: '/forms/range',
  //
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/forms/input-group',
  //
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/forms/floating-labels',
  //
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/forms/layout',
  //
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation',
  //
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   iconComponent: { name: 'cil-chart-pie' },
  //   url: '/charts'
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       ,
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags',
  //
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands',
  //
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal',
  //
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts',
  //
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //
  //     }
  //   ]
  // },
  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'Docs',
  //   url: 'https://coreui.io/angular/docs/5.x/',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank' }
  // }
];

// Le manutentionnaire
export const concessionnaireNavItems: INavDataModel[] = [
  {
    name: 'Rendez-vous Camions',
    url: '/rendez-vous/list',
    code: 'rendezVousCamions',
    description: 'Rendez-vous Camions',
    iconComponent: {name: 'rendezVousCamions'},
    localIcon: 'decla-fret'
  },
]

export const chargeurNavItems: INavDataModel[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   code: 'dashb',
  //   description: 'Dashboard',
  //   iconComponent: {name: 'cil-speedometer'}
  // },
  {
    name: 'Déclaration du fret',
    url: '/declarations/ch-list',
    code: 'declarationFret',
    description: 'Déclaration du fret',
    iconComponent: {name: 'declarant'},
    localIcon: 'decla-fret'

  },
  {
    name: 'Affretements',
    url: '/declarations/affretements',
    code: 'affretements',
    description: 'Affretements',
    iconComponent: {name: 'file'},
    localIcon: 'file'
  }
  // {
  //   name: 'Déclaration de camion',
  //   url: '/camions/list',
  //   code: 'declarationCamion',
  //   description: 'Déclaration de camion',
  //   iconComponent: {name: 'camion-decla'},
  //   localIcon: 'camion-decla'
  // },
  // {
  //   name: 'Garants',
  //   url: '/garants/list',
  //   code: 'garants',
  //   description: 'Garants',
  //   iconComponent: {name: 'garant'},
  //   localIcon: 'garant'
  // },
  // {
  //   name: 'Transporteurs',
  //   url: '/transporteurs/list',
  //   code: 'transporteurs',
  //   description: 'Transporteurs',
  //   iconComponent: {name: 'transporter'},
  //   localIcon: 'transporter'
  // },
  // {
  //   name: 'Conducteurs',
  //   url: '/conducteurs/list',
  //   code: 'conducteurs',
  //   description: 'Conducteurs',
  //   iconComponent: {name: 'driver'},
  //   localIcon: 'driver'
  //
  // },
  // {
  //   name: 'Apprentis',
  //   url: '/declarations/list',
  //   code: 'apprentis',
  //   description: 'Apprentis',
  //   iconComponent: {name: 'apprentit'},
  //   localIcon: 'apprentit'
  //
  // },
  // {
  //   name: 'Destination de marchandises',
  //   url: '/declarations/list',
  //   code: 'destinationMarchandises',
  //   description: 'Destination de marchandises',
  //   iconComponent: {name: 'destination'},
  //   localIcon: 'destination'
  //
  // }
]

export const transporteurNavItems: INavDataModel[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   code: 'dashb',
  //   description: 'Dashboard',
  //   iconComponent: {name: 'cil-speedometer'}
  // },
  {
    name: 'Affretements',
    url: '/declarations/tr-affretements',
    code: 'tr-affretements',
    description: 'Affretements',
    iconComponent: {name: 'file'},
    localIcon: 'file'
  },
  {
    name: 'Demande attente camions',
    url: '/attente-camions',
    code: 'tr-attente-camions',
    description: 'Demande attente camions',
    iconComponent: {name: 'file'},
    localIcon: 'file'
  },
  {
    name: 'Déclaration de camion',
    url: '/camions/list',
    code: 'declarationCamion',
    description: 'Déclaration de camion',
    iconComponent: {name: 'camion-decla'},
    localIcon: 'camion-decla'
  },
  // {
  //   name: 'Garants',
  //   url: '/garants/list',
  //   code: 'garants',
  //   description: 'Garants',
  //   iconComponent: {name: 'garant'},
  //   localIcon: 'garant'
  // },
  {
    name: 'Conducteurs',
    url: '/conducteurs/list',
    code: 'conducteurs',
    description: 'Conducteurs',
    iconComponent: {name: 'driver'},
    localIcon: 'driver'

  }
  // {
  //   name: 'Apprentis',
  //   url: '/declarations/list',
  //   code: 'apprentis',
  //   description: 'Apprentis',
  //   iconComponent: {name: 'apprentit'},
  //   localIcon: 'apprentit'
  //
  // },
  // {
  //   name: 'Destination de marchandises',
  //   url: '/declarations/list',
  //   code: 'destinationMarchandises',
  //   description: 'Destination de marchandises',
  //   iconComponent: {name: 'destination'},
  //   localIcon: 'destination'
  //
  // }
]

export const bureauFretNavItems: INavDataModel[] = [
  {
    name: 'Déclaration de camion',
    url: '/camions/list',
    code: 'declarationCamion',
    description: 'Déclaration de camion',
    iconComponent: {name: 'camion-decla'},
    localIcon: 'camion-decla'
  },
  {
    name: 'Déclaration du fret',
    url: '/declarations/bf-list',
    code: 'declarationFret',
    description: 'Déclaration du fret',
    iconComponent: {name: 'declarant'},
    localIcon: 'decla-fret'
  }
  // {
  //   name: 'Bon de chargement',
  //   url: '/declarations/bf-list',
  //   code: 'declarationFret',
  //   description: 'Bon de chargement',
  //   iconComponent: {name: 'file'},
  //   localIcon: 'file'
  // }
]



export const badConsignataireNavItems: INavDataModel[] = [
  {
    name: 'Tableau de bord',
    url: '/consignataire',
    code: 'dashboard',
    description: 'Tableau de bord',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  // {
  //   name: 'Recherche position cargaison',
  //   url: '/declarant/position',
  //   code: 'recherchePosition',
  //   description: 'Recherche de position de la cargaison',
  //   iconComponent: {name: 'declarant'},
  //   localIcon: ''
  // },
  {
    name: 'Demande échange de connaissement',
    url: '/consignataire/echange-connaissement',
    code: 'echangeConnaissement',
    description: 'Demande de la facture d\'échange de connaissement',
    iconComponent: {name: 'consignataire'},
    localIcon: '',
    children: [
      {
        name: 'Liste demande',
        url: '/consignataire/echange-connaissement/list',
      },
      {
        name: 'Historique',
        url: '/consignataire/echange-connaissement/history',
      },
    ]
  },
  {
    name: 'Bon à délivrer (BAD)',
    url: '/consignataire/bad',
    code: 'bad',
    description: 'Bon à délivrer (BAD)',
    iconComponent: {name: 'consignataire'},
    localIcon: '',
    children: [
      {
        name: 'Liste demande',
        url: '/consignataire/bad/list',
      },
      {
        name: 'Demandes Validées',
        url: '/consignataire/bad/history',
      },
    ]
  },
  {
    name: 'Facture manutentionnaires',
    url: '/consignataire/facture',
    code: 'bad',
    description: 'Facture manutentionnaires',
    iconComponent: {name: 'consignataire'},
    localIcon: '',
    children: [
      {
        name: 'Liste demande',
        url: '/consignataire/facture/list',
      },
      {
        name: 'Demandes Validées',
        url: '/consignataire/facture/history',
      },
    ]
  },
]

export const badNavItems: INavDataModel[] = [
  {
    name: 'Tableau de bord',
    url: '/declarant',
    code: 'dashboard',
    description: 'Tableau de bord',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  {
    name: 'Recherche position cargaison',
    url: '/declarant/position',
    code: 'recherchePosition',
    description: 'Recherche de position de la cargaison',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  {
    name: 'Demande échange de connaissement',
    url: '/declarant/echange',
    code: 'echangeConnaissement',
    description: 'Demande de la facture d\'échange de connaissement',
    iconComponent: {name: 'declarant'},
    localIcon: '',
    children: [
      {
        name: 'Lancer la demande',
        url: '/declarant/echange-connaissement',
      },
      {
        name: 'Liste demande',
        url: '/declarant/echange-connaissement/list',
      },
      {
        name: 'Demandes Validées',
        url: '/declarant/echange-connaissement/history',
      },
    ]
  },
  // {
  //   name: 'Facture échange de connaissement',
  //   url: '/declarant',
  //   code: 'echangeConnaissement',
  //   description: 'Soumission de la facture d\'echange de connaissement',
  //   iconComponent: {name: 'declarant'},
  //   localIcon: ''
  // },
  {
    name: 'Paiment facture d\'échange de connaissement',
    url: '/declarant/paiement-echange/list',
    code: 'paiementFactureEchange',
    description: 'Paiement de facture d\'échange de connaissement',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  {
    name: 'Bon à délivrer (BAD)',
    url: '/declarant/bads',
    code: 'echangeConnaissement',
    description: 'Bon à délivrer (BAD)',
    iconComponent: {name: 'declarant'},
    localIcon: '',
    children: [
      {
        name: 'Lancer la demande',
        url: '/declarant/bad',
      },
      {
        name: 'List demande',
        url: '/declarant/bad/list',
      },
      {
        name: 'Demandes Validées',
        url: '/declarant/bad/history',
      },
    ]
  },
  {
    name: 'Déclaration en douane unique (DDU)',
    url: '/declarant/ddu/list',
    code: 'echangeConnaissement',
    description: 'Déclaration en douane unique (DDU)',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  {
    name: 'Liquidation des DDU',
    url: '/declarant/ddu-l/list',
    code: 'recherchePosition',
    description: 'Liquidation des DDU',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  {
    name: 'Communication des données à ANTASER',
    url: '/declarant/antaser',
    code: 'echangeConnaissement',
    description: 'Communication des données à ANTASER',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  {
    name: 'Facture acteurs portuaires',
    url: '/declarant/facture-portuaire',
    code: 'echangeConnaissement',
    description: 'Transmission des documents aux acteurs portuaires pour facturation (GUCE)',
    iconComponent: {name: 'declarant'},
    localIcon: '',
  },
  {
    name: 'Facture manutentionnaires',
    url: '/declarant/facture-manutentionnaire',
    code: 'echangeConnaissement',
    description: 'Transmission des documents aux manutentionnaires pour facturation',
    iconComponent: {name: 'declarant'},
    localIcon: '',
    children: [
      {
        name: 'Lancer la demande',
        url: '/declarant/facture-manutentionnaire',
      },
      {
        name: 'List demande',
        url: '/declarant/facture-manutentionnaire/list',
      },
      {
        name: 'Demandes Validées',
        url: '/declarant/facture-manutentionnaire/history',
      },
    ]
  },
  {
    name: 'Paiement de la facture manutentionnaire',
    url: '/declarant/paiement-manutentionnaire/list',
    code: 'recherchePosition',
    description: 'Paiement de la facture manutentionnaire',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  {
    name: 'Documents de Frais Unique (DFU)',
    url: '/declarant/dfu/list',
    code: 'echangeConnaissement',
    description: 'Documents Forfaitaire Unique (DFU)',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  {
    name: 'Demande de Bon à enlever (BAE)',
    url: '/declarant/bae/list',
    code: 'echangeConnaissement',
    description: 'Demande de Bon à enlever (BAE)',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  {
    name: 'Enlèvement marchandise',
    url: '/declarant',
    code: 'echangeConnaissement',
    description: 'Enlèvement marchandise',
    iconComponent: {name: 'declarant'},
    localIcon: ''
  },
  // {
  //   name: 'Destinataire de marchandises',
  //   url: '/destinataire-marchandise/list',
  //   code: 'destinationMarchandises',
  //   description: 'Destinataire de marchandises',
  //   iconComponent: {name: 'destination'},
  //   localIcon: 'destination'
  // },
  // {
  //   name: 'Rendez-vous Camions',
  //   url: '/rendez-vous/list',
  //   code: 'declarationFret',
  //   description: 'Rendez-vous Camions',
  //   iconComponent: {name: 'declarant'},
  //   localIcon: 'decla-fret'
  // },
  // {
  //   name: 'Bon entrée Camions',
  //   url: '/list-bon-entree-camions',
  //   code: 'bonEntreeCamions',
  //   description: 'Bon entrée Camions',
  //   iconComponent: {name: 'bonEntreeCamions'},
  //   localIcon: 'decla-fret'
  // },
]

// export const sitePesageNavItems: INavDataModel[] = [
//   {
//     name: 'Bon entrée Camions',
//     url: '/sp-list',
//     code: 'bonEntreeCamions',
//     description: 'Bon entrée Camions',
//     iconComponent: {name: 'bonEntreeCamions'},
//     localIcon: 'decla-fret'
//   },
// ]



export const customNavItems: INavDataModel[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   code: 'dashb',
  //   description: 'Dashboard',
  //   iconComponent: {name: 'cil-speedometer'}
  // },
  {
    name: 'Déclaration du fret',
    url: '/declarations/c-list',
    code: 'declarationFret',
    description: 'Déclaration du fret',
    iconComponent: {name: 'declarant'},
    localIcon: 'decla-fret'

  },
  {
    name: 'Déclaration de camion',
    url: '/camions/list',
    code: 'declarationCamion',
    description: 'Déclaration de camion',
    iconComponent: {name: 'camion-decla'},
    localIcon: 'camion-decla'
  },
  {
    name: 'Déclarants',
    url: '/declarations/list',
    code: 'declarants',
    description: 'Déclarants',
    iconComponent: {name: 'declarant'},
    localIcon: 'declarant'
  },
  {
    name: 'Garants',
    url: '/garants/list',
    code: 'garants',
    description: 'Garants',
    iconComponent: {name: 'garant'},
    localIcon: 'garant'
  },
  {
    name: 'Transporteurs',
    url: '/transporteurs/list',
    code: 'transporteurs',
    description: 'Transporteurs',
    iconComponent: {name: 'transporter'},
    localIcon: 'transporter'
  },
  {
    name: 'Conducteurs',
    url: '/conducteurs/list',
    code: 'conducteurs',
    description: 'Conducteurs',
    iconComponent: {name: 'driver'},
    localIcon: 'driver'

  },
  {
    name: 'Apprentis',
    url: '/declarations/list',
    code: 'apprentis',
    description: 'Apprentis',
    iconComponent: {name: 'apprentit'},
    localIcon: 'apprentit'

  }
]

export const navPhytosanitaireItems: INavDataModel[] = []

export const navVeterinaireItems: INavDataModel[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   code: 'dashb',
  //   description: 'Dashboard',
  //   iconComponent: {name: 'cil-speedometer'}
  // },

]
