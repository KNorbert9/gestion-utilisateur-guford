import {AffretementCamionModel} from "./affretement.model";

export interface BonChargementModel {
  id: number;
  affretementCamion: AffretementCamionModel;
  proprietaire: string;
  numeroDutm: string;
  typeMarchandise: string;
  status: boolean;
  tonnage: number;
  paysOrigine: string;
  paysDestination: string;
  immatriculation: string;
  montantTicket: number;
  maisonTransit: string;
  transporteur: string;
  fretState: boolean;
  dateCreation: number;
  createdAt: number;
  updateAt: number;

}





