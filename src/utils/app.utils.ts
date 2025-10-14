import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import {Options} from "@popperjs/core";
import {DemandDateModel} from "../models/date-demande.model";
import {StatutPaiementFEWEnum} from "../app/enums/status-paiement.enum";
import {StatusDemandEnum} from "../models/demand.model";




export function formatDateBK(dateString: string): string {
  const date = new Date(dateString);
  // Format as YYYY-MM-DDTHH:MM for input[type="datetime-local"]
  return date.toISOString().slice(0, 16);
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function maxDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Pour ignorer l'heure et ne comparer que les dates


    if (selectedDate > today) {
      return {'maxDate': {value: control.value}};
    }
    return null;
  };
}


export function getPopperConfig(): Partial<Options> {
  return {
    strategy: 'fixed',
  };
}




export function minDateValidator(control: AbstractControl): ValidationErrors | null {
  const selectedDate = new Date(control.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Supprime l'heure pour comparer uniquement la date


  return selectedDate < today ? {minDate: true} : null;
}




export function snakeCaseToTitleCase(str: string | null | undefined): string {
  if (str === undefined || str === null) {
    return '—';
  }
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', ' ');
  });
}


export function getStatusDemandByStatutPaiement(statut: StatutPaiementFEWEnum | null) {
  switch (statut) {
    case StatutPaiementFEWEnum.PAYER:
      return 'success';
    case StatutPaiementFEWEnum.PAS_DE_PAIEMENT:
      return 'default';
    case StatutPaiementFEWEnum.IMPAYER:
      return 'info';
    default:
      return 'default';
  }
}


export function getDateDemandByStatus<T>(demand: T & DemandDateModel): Date {
  if(demand.etat === StatusDemandEnum.NON_SOUMIS) {
    return new Date(demand.createdAt);
  }else if(demand.etat === StatusDemandEnum.SOUMIS) {
    return new Date(demand?.dateSoumission ?? demand?.dateSoumise);
  }
  else if(demand.etat === StatusDemandEnum.TRAITER) {
    console.log("date", demand.dateTraitement)
    return demand.dateTraitement;
  }
  else if(demand.etat === StatusDemandEnum.INSPECTION) {
    console.log("date", demand.dateAccepte)
    return demand.dateAccepte;
  }
  else if(demand.etat === StatusDemandEnum.ETUDE) {
    console.log("date", demand.dateAccepte)
    return demand.dateAccepte;
  } else if(demand.etat === StatusDemandEnum.TRAITEMENT) {
    if (demand.dateTraitement !== null) {
      return new Date(demand.dateTraitement);
    }else {
      return new Date(demand.dateTraiter);
    }
  } else if(demand.etat === StatusDemandEnum.REJETER) {
    return new Date(demand.dateRejet);
  } else if(demand.etat === StatusDemandEnum.REJET_DEFINITIF) {
    return new Date(demand.dateRejet);
  } else if(demand.etat === StatusDemandEnum.REJETER_COMPLEMENT || demand.etat === StatusDemandEnum.A_COMPLETER) {
    return new Date(demand.dateRejet);
  } else if(demand.etat === StatusDemandEnum.ANNULER) {
    return new Date(demand.dateAnnuler);
  } else if(demand.etat === StatusDemandEnum.ACCEPTER) {
    return new Date(demand.dateAccepte);
  }else if(demand.etat === StatusDemandEnum.VALIDER) {
    return new Date(demand.dateValider);
  } else{
    return new Date(demand.dateTraiter);
  }
}
