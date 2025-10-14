import {BonChargementModel} from "./bon-chargement.model";

export interface BonEntreeModel {
  id: number;
  numBonEntreeCamion: string;
  immatriculation: string | null;
  nomConducteur: string;
  transporteur: string;
  sitePesage: string;
  aireStockage: string;
  transporteMse: boolean;
  codeSensTrafic: string;
  airStockage: string;
  chargeur: string;
  poidsChargeEnleve: number;
  dateEnlevementMse: Date;
  poidsVide: number;
  remorque: string;
  dateEffectiveEntree: Date;
  dateEffectiveSortie: Date;
  dateSortiePrevue: Date;
  penaliteReglee: number;
  poidsCharge: number | null;
  statusChargement: boolean | null;
  statutPayement: boolean | null;
  datePayement: Date;
  redevance: number;
  bonChargement: BonChargementModel | null;
  montantPenalite: number | null;
  statutPenalite: StatutPayementPenaliteEnum | null;
  statusNegociation: StatutNegociationEnum | null;
  redevanceSitePessage: number | null;
  motifAnnulation: string | null;
  createdAt: Date;
}

export enum StatutNegociationEnum {
  ENVOYEE = "0",
  ACCEPTEE = "1",
  REJETEE = "2",
  NON_NEGOCIEE = "null"
}

export enum StatutPayementPenaliteEnum {
  NON_APPLICABLE = "NON_APPLICABLE",
  A_PAYER = "false",
  PAYER = "true"
}



export interface CreatePenalityModel {
  montant: number;
  description: string;
  numBonEntree: string;
}


export interface CancelBonEntreeModel {
  numBonEntree: string;
  motifAnnulation: string;
}


export interface PesageModel {
  numBonEntree: string;
  poidsCharge: number;
  observationPesage: string;
}
