import {Component, inject, OnInit, signal, TemplateRef, viewChild, WritableSignal} from '@angular/core';
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {toast} from "ngx-sonner";
import {finalize} from "rxjs";
import {tap} from "rxjs/operators";
import {DemandService} from "../../services/demand.service";
import {CellContext, ColumnDef, HeaderContext} from "@tanstack/angular-table";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe, Location, NgClass} from "@angular/common";
import moment from "moment";
import {ArrowDown, ArrowUp, ListChecks, LucideAngularModule} from "lucide-angular";
import {CustomDataTableComponent} from "../../../../../components/custom-data-table/custom-data-table.component";
import {DropiSelectComponent} from "../../../../../components/dropi-select/dropi-select.component";
import {RouterLink} from "@angular/router";
import {PricePipe} from "../../../../../pipes/price.pipe";
import {StatusDemandComponent} from "../../../../../components/status-demand/status-demand.component";
import {ButtonDirective, DropdownComponent, DropdownMenuDirective, DropdownToggleDirective} from "@coreui/angular";
import {DemandModel, StatusDemandEnum} from "../../../../../models/demand.model";
import {NiceToastComponent} from "../../../../../components/nice-toast/nice-toast.component";
import {getDateDemandByStatus, getPopperConfig, snakeCaseToTitleCase} from "../../../../../utils/app.utils";



@UntilDestroy()
@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  imports: [
    CustomDataTableComponent,
    DropiSelectComponent,
    RouterLink,
    PricePipe,
    NgClass,
    StatusDemandComponent,
    DatePipe,
    LucideAngularModule,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    ButtonDirective
  ],
  styleUrl: './submitted.component.scss'
})
export class SubmittedComponent implements OnInit {
  demand!: DemandModel;
  demands: WritableSignal<DemandModel[]> = signal<DemandModel[]>([]);
  loadingDemands: boolean = false;
  modalVisible: boolean = false;
  isModalVisible: boolean = false;
  modalVisiblePayer: boolean = false;
  modalTraiterVisible: boolean = false;
  loadingSubmit: boolean = false;
  loadingReject: boolean = false;
  rejectDemandForm!: FormGroup;
  modalRejectVisible: boolean = false;
  openSignDocModal: boolean = false;
  showSignModal: boolean = false;
  openRecuModal: boolean = false;
  location = inject(Location);
  motif: string = '';
  compteClient: string = localStorage.getItem('currentUserMail') ?? "";
  url: string = '';
  openBonChargementModal: boolean = false;
  haveConfirmButton: boolean = false;
  numeroAutorisation: string | null = null;
  showNumeroModal: boolean = false;
  currentDemandToGenerate: DemandModel | null = null;
  enteringNumero: boolean = false;
  modalSignatureVisible : boolean = false;
  selectedSignataire: any = null;

  selectedValue: WritableSignal<string | null> = signal<string | null>(null);


  constructor(private demandService: DemandService, private fb: FormBuilder) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.selectedValue.set('all');
    this.initForm();
    this.getDemandFull();
  }



  onConfirmBonChargementModal() {
    this.haveConfirmButton = false;
    this.openBonChargementModal = false;
    this.openSignDocModal = false;
  }

  onCloseBonChargementModal() {
    this.haveConfirmButton = false;
    this.openRecuModal = false;
    this.openBonChargementModal = false;
    this.openSignDocModal = false;
  }


  resetAutorisationModal() {
    this.numeroAutorisation = null;
    this.currentDemandToGenerate = null;
    this.showNumeroModal = false;
    this.showSignModal = false;
    this.enteringNumero = false;
  }

  okReject(demand: DemandModel) {
    this.openModal(demand);
  }

  onCancelReject() {
    this.modalRejectVisible = false;
    this.loadingSubmit = false;
  }

  initForm() {
    this.rejectDemandForm = this.fb.group({
      motif: [null, Validators.required],
      // motif: [''],
    });

    // Gestion dynamique de la validation du motif
    this.rejectDemandForm.get('motif')?.valueChanges.subscribe(value => {
      this.motif = value;
      const motifControl = this.rejectDemandForm.get('motif');

      if (value === false) {
        motifControl?.setValidators([Validators.required]);
      } else {
        motifControl?.clearValidators();
      }
      motifControl?.updateValueAndValidity();
    });
  }


  getDemandFull() {
    this.loadingDemands = true;
    this.demandService.getDemandFull().pipe(
        untilDestroyed(this),
        finalize(() => {
          if(this.demands() !== undefined) {
            this.loadingDemands = false;
            this.demandService.currentDemandsSubject.next(this.demands());
          }
        })
    ).subscribe((res) => {
      console.log('res', res);
      this.demands.set(res as DemandModel[]);
    });
  }

  getDemandParam(etat: string) {
    this.loadingDemands = true;
    this.demandService.getDemandParam(etat).pipe(
        untilDestroyed(this),
        finalize(() => {
          if(this.demands() !== undefined) {
            this.loadingDemands = false;
            this.demandService.currentDemandsSubject.next(this.demands());
          }
        })
    ).subscribe((res) => {
      console.log('res', res);
      this.demands.set(res as DemandModel[]);
    });
  }


  onFilterChange(value: any) {
    // Logique de filtrage
    // console.log('value', value);


    if (value === 'all') {
      this.getDemandFull();
    } else {
      this.getDemandParam(value);
    }
  }

  readonly ListChecks = ListChecks;


  filterOptions = [
    {value: 'all', label: 'Tous les statuts'},
    {value: StatusDemandEnum.SOUMIS, label: 'Soumis'},
    {value: StatusDemandEnum.ACCEPTER, label: 'Accepté'},
    // {value: StatusDemandEnum.ETUDE, label: 'Etude'},
    {value: StatusDemandEnum.REJETER, label: 'Rejeté'},
    {value: StatusDemandEnum.REJETER_COMPLEMENT, label: 'Rejeté pour compléments'},
    // {value: StatusDemandEnum.TRAITEMENT, label: 'Traitement'},
    {value: StatusDemandEnum.TRAITER, label: 'Traité'}
  ];




  onOptionSelected(option: any) {
    // Logique supplémentaire si nécessaire
    // console.log('option', option);
  }






  openModal(demand: DemandModel) {

    this.demand = demand;
    this.modalRejectVisible = true;
  }

  // rejectDemand() {
  //   this.loadingSubmit = true;
  //   this.demandService.nowRejectDemandComplement({
  //     numeroDossier: this.demand.numeroDossier,
  //     statutPaiement: this.demand.statutPaiement,
  //     motifRejet: this.motif,
  //     idFormalite: this.demand.idFormalite,
  //     codeAgent: this.compteClient ,
  //     message: this.motif,
  //     // numGenere: this.demand.numGenerer,
  //   }).pipe(
  //       untilDestroyed(this),
  //       tap(() => {
  //         toast.custom(NiceToastComponent, {
  //           position: 'top-center',
  //           componentProps: {
  //             texto: 'Demande de dépotage rejetée',
  //             state: 'success'
  //           }
  //         });
  //       }),
  //       finalize(() => {
  //         this.modalRejectVisible = false;
  //         this.loadingSubmit = false;
  //       })
  //   ).subscribe((res) => {
  //     // this.onClickBack();
  //     this.getDemandFull();
  //   });
  // }

  onClickBack() {

    this.location.back();

  }

  // onSubmit() {
  //   console.log('onSubmit', this.demand);
  //   this.loadingSubmit = true;
  //   this.demandService.acceptDemand({
  //     numeroDossier: this.demand.numeroDossier,
  //      // statutPaiement: this.demand.statutPaiement,
  //   }).pipe(
  //     untilDestroyed(this),
  //     tap(() => {
  //
  //       toast.custom(NiceToastComponent, {
  //         position: 'top-center',
  //         componentProps:{
  //           texto: 'Demande acceptée!',
  //           state: 'success'
  //         }
  //       });
  //       this.getDemandSubmitted();
  //     }),
  //     finalize(() => {
  //       this.modalVisible = false;
  //       this.loadingSubmit = false;
  //     })
  //   ).subscribe((res) => {
  //     console.log('res', res);
  //   });
  //
  // }


  openModalPayer(demand: DemandModel) {
    this.demand = demand;
    this.modalVisiblePayer = true;
  }


  // onProcess() {
  //   this.loadingSubmit = true;
  //   this.demandService.nowTraiter({
  //     idFormalite: this.demand.idFormalite,
  //     statutPaiement: this.demand.statutPaiement,
  //     numeroDossier: this.demand.numeroDossier,
  //     // numGenere: this.demand.numGenerer,
  //   }).pipe(
  //       untilDestroyed(this),
  //       tap(() => {
  //
  //         toast.custom(NiceToastComponent, {
  //           position: 'top-center',
  //           componentProps: {
  //             texto: 'Demande traitée avec succès!',
  //             state: 'success'
  //           }
  //         });
  //
  //       }),
  //       finalize(() => {
  //         this.modalVisiblePayer = false;
  //         this.modalVisible = false;
  //         this.loadingSubmit = false;
  //       })
  //   ).subscribe((res) => {
  //     this.getDemandFull();
  //   });
  //
  //   this.onCancel();
  //
  // }

  // okTraiterDemande(demand: DemandModel) {
  //   if (demand.statutPaiement !== 'PAYER' && demand.montant !== 0) {
  //     toast.custom(NiceToastComponent, {
  //       position: 'top-center',
  //       componentProps: {
  //         texto: 'Impossible de traiter la demande car elle n\'est pas payée.',
  //         state: 'error'
  //       }
  //     });
  //     return;
  //   }
  //   this.openModalTraiter(demand);
  // }

    openModalTraiter(demand: DemandModel) {
        this.demand = demand;
        this.modalTraiterVisible = true;
    }

  xendDetailsInfo(demand: DemandModel) {
    this.demandService.currentDemandSubject.next(demand);
    localStorage.setItem('demandDetail', JSON.stringify(demand));

  }


  onCancel() {
    this.isModalVisible = false;
    this.modalVisible = false;
    this.loadingSubmit = false;
    this.modalVisiblePayer = false;
    this.modalTraiterVisible = false;
  }

  indexHeader =
      viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
          'indexHeader'
      );
  indexCell =
      viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
          'indexCell'
      );
  numeroHeader =
      viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
          'numeroHeader'
      );
  numeroCell =
      viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
          'numeroCell'
      );
  // numeroBLHeader =
  //     viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
  //         'numeroBLHeader'
  //     );
  // numeroBLCell =
  //     viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
  //         'numeroBLCell'
  //     );
  // atpHeader =
  //     viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
  //         'atpHeader'
  //     );
  // atpCell =
  //     viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
  //         'atpCell'
  //     );
  // nomNavireHeader =
  //     viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
  //         'nomNavireHeader'
  //     );
  // nomNavireCell =
  //     viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
  //         'nomNavireCell'
  //     );
  // affreteurHeader =
  //     viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
  //         'affreteurHeader'
  //     );
  // affreteurCell =
  //     viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
  //         'affreteurCell'
  //     );
  // montantRedevanceHeader =
  //     viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
  //         'montantRedevanceHeader'
  //     );
  // montantRedevanceCell =
  //     viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
  //         'montantRedevanceCell'
  //     );
  // statutPaiementHeader =
  //     viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
  //         'statutPaiementHeader'
  //     );
  // statutPaiementCell =
  //     viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
  //         'statutPaiementCell'
  //     );
  statusHeader =
      viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
          'statusHeader'
      );
  statusCell =
      viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
          'statusCell'
      );

  // dateSoumissionHeader =
  //     viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
  //         'dateSoumissionHeader'
  //     );
  // dateSoumissionCell =
  //     viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
  //         'dateSoumissionCell'
  //     );

  dateDmdHeader =
      viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>(
          'dateDmdHeader'
      );
  dateDmdCell =
      viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>(
          'dateDmdCell'
      );


  actionHeader = viewChild.required<TemplateRef<{ $implicit: HeaderContext<any, any> }>>('actionHeader');
  actionCell = viewChild.required<TemplateRef<{ $implicit: CellContext<any, any> }>>('actionCell');

  columns: ColumnDef<DemandModel>[] = [
    {
      id: 'index',
      header: () => this.indexHeader(),
      cell: () => this.indexCell(),
      accessorFn: (row: DemandModel, index: number) =>
          (index + 1),
    },
    {
      id: 'numero',
      header: () => this.numeroHeader(),
      cell: () => this.numeroCell(),
      // return  row.numero and row activite
      accessorFn: (row: DemandModel) => row.numeroDossier,
    },
    // {
    //   id: 'numeroBL',
    //   header: () => this.numeroBLHeader(),
    //   cell: () => this.numeroBLCell(),
    //   accessorFn: (row: DemandModel) => row.numeroBL,
    // },
    // {
    //   id: 'atp',
    //   header: () => this.atpHeader(),
    //   cell: () => this.atpCell(),
    //   accessorFn: (row: DemandModel) => row.atp,
    // },
    // {
    //   id: 'nomNavire',
    //   header: () => this.nomNavireHeader(),
    //   cell: () => this.nomNavireCell(),
    //   accessorFn: (row: DemandModel) => row.nomNavire,
    // },
    // {
    //   id: 'montantRedevance',
    //   header: () => this.montantRedevanceHeader(),
    //   cell: () => this.montantRedevanceCell(),
    //   accessorFn: (row: DemandModel) => row.montantRedevance,
    // },
    // {
    //   id: 'statutPaiement',
    //   header: () => this.statutPaiementHeader(),
    //   cell: () => this.statutPaiementCell(),
    //   accessorFn: (row: DemandModel) => row.statutPaiement,
    // },
    {
      id: 'status',
      header: () => this.statusHeader(),
      cell: () => this.statusCell(),
      accessorFn: (row: DemandModel) => row.etat,
    },
    // {
    //   id: 'dateSoumission',
    //   header: () => this.dateSoumissionHeader(),
    //   cell: () => this.dateSoumissionCell(),
    //   accessorFn: (row: DemandModel) => row.dateSoumission,
    // },

    {
      id: 'dateDmd',
      header: () => this.dateDmdHeader(),
      cell: () => this.dateDmdCell(),
      accessorFn: (row: DemandModel) =>
          moment(getDateDemandByStatus(row))
    },
    {
      id: 'action',
      header: () => this.actionHeader(),
      cell: () => this.actionCell(),
    }
  ];

  protected readonly getPopperConfig = getPopperConfig;
  protected readonly ArrowUp = ArrowUp;
  protected readonly ArrowDown = ArrowDown;
  protected readonly snakeCaseToTitleCase = snakeCaseToTitleCase;


}
