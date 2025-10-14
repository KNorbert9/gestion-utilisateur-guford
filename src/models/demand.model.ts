import {DemandDateModel} from "./date-demande.model";

export interface DemandModel extends DemandDateModel {
  numeroDossier: string;
  dateDefinitiveVisite?: string;
  demandePour: string;
  typeAutorisationDepotage: string;
  compteClient: string;
}


export enum StatusDemandEnum {
  NON_SOUMIS = "NON_SOUMIS",
  SOUMIS = "SOUMIS",
  ANNULER = "ANNULER",
  ACCEPTER = "ACCEPTER",
  REJETER = "REJETER",
  REJET_DEFINITIF = "REJET_DEFINITIF",
  TRAITER = "TRAITER",
  ETUDE = "ETUDE",
  INSPECTION = "INSPECTION",
  VALIDER = "VALIDER",
  TRAITEMENT = "TRAITEMENT",
  REJETER_COMPLEMENT = "REJETER_COMPLEMENT",
  REJET_COMPLEMENT = "REJET_COMPLEMENT",
  A_COMPLETER = "A_COMPLETER"
}
