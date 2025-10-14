import {CamionModel} from "./camion.model";
import {SyndicatModel} from "./syndicat.model";

export interface DemandAttenteCamionsModel {
  id: number;
  syndicat: SyndicatModel;
  camions: CamionModel[];
  adhesionCamions: CamionModel[];
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}


export interface CreateAttenteCamionsModel {
  syndicat: number;
  camions: string[];
}
