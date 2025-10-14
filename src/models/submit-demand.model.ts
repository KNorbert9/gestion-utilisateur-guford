export interface SubmitDemandModel {
  idDmdAutorisationAgrement?: number;
  numeroDossier: string;
  idFormalite?: number;
  id?: number;
  motifRejet?: string;
  statutPaiement?: string;
  codeAgent?: string;
  compteAgent?: string;
  compteClient?: string;
  firstDate?: Date;
  secondDate?: Date;
  thirdDate?: Date;
  dateVisiteInspection?: Date;
  message?: string;
  avisVisite?: string;
  montantPaiement?: number;
  fraisVisite?: number;
}

export interface SubmitAgrementModel {
  code?: string;
  idDmdAutorisationAgrement?: string;
  numeroDossier?: string;
  // statutPaiement: EnumStatutPaiement;
  statutPaiement: string;
  motifRejet?: string;
  compteClient?: string;
  message?: string;
  dateVisiteInspection?: Date;
  fraisVisite?: number;
  avisVisite?: boolean;
  firstDate?: Date;
  secondDate?: Date;
  thirdDate?: Date;
}

export interface SubmitDatesProposition {
  firstDate: Date;
  secondDate: Date;
  thirdDate: Date;
  numeroDossier: string;
  compteAgent : string;
}

export interface ChooseDateProposition {
  dateDefinitive: string;
  numeroDossier: string;
}

export enum EnumStatutPaiement {
  PAYER = 'PAYER',
  NON_PAYER = 'NON_PAYER',
}
