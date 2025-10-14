import {ChargeurModel} from "./chargeur.model";
import {EtatMarchandiseEnum} from "../enums/sens-traffic.enum";

export interface ParametrageModel {
  id: number;
  chargeur: ChargeurModel;
  nationalite: string | null;
  quota: number | null;
  type: EtatMarchandiseEnum | null;
  createdBy: string | null;
  updateBy: string | null;
  createdAt: number | null;
  updateAt: number | null;
}

