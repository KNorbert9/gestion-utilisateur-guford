import {PaysModel} from "./pays.model";

export interface ImmatriculationModel {
  immatriculation: string;
  nomConducteur: string;
  poidsVide: number;
  codePays: PaysModel;
}
