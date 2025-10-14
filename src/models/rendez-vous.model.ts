import {AirStockageModel} from "./air-stockage.model";
import {SitePesageModel} from "./site-pesage.model";
import {ManutentionnaireModel} from "./manutentionnaire.model";
import {AffretementCamionModel} from "./affretement.model";
import {DeclarationFretModel} from "./declaration-fret.model";
import {DeclarantModel} from "./declarant.model";

export interface CreateRendezVousModel {
  dateFin: string;
  dateDebut: string;
  airStockage: string;
  airStockageObj: AirStockageModel;
  sitePesageObj: SitePesageModel;
  sitePesage: string;
  manutentionnaire: string;
  manutentionnaireObj: ManutentionnaireModel;
  affretementCamion: string | number;

  id: number;
  date: string;
  heure: string;
  duree: string;
  commentaire: string;
  createdBy: string;
  createdAt: number;
  updateBy: string;
  updateAt: number;
}

export interface RendezVousModel {
  id: number;
  affretementCamion: AffretementCamionModel;
  manutentionnaire: ManutentionnaireModel;
  declarant: DeclarantModel;
  sitePesage: string;
  airStockage: string;
  dateDebut: Date;
  dateFin: Date;
  dateFinal: Date;
  createdAt: number;
  updatedAt: number;
  status: boolean | null;
}

