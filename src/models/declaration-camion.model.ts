import {AirStockageModel} from "./air-stockage.model";
import {CamionModel} from "./camion.model";
import {SitePesageModel} from "./site-pesage.model";
import {ImmatriculationModel} from "./immatriculation.model";
import {LieuChargementModel} from "./lieu-chargement.model";
import {SensTrafficModel} from "./sens-traffic.model";
import {ChargeurModel} from "./chargeur.model";

export interface  ImportDeclarationCamionModel {
  immatriculation: string;
  codePays: string;
  codeSensTrafic: string;
  remorque: string;
  lieuChargement: string;
  idSitePesage: number;
  transporteMse: boolean;
  becLigneMseList: string[];
}

export interface ImportDeclarationCamionPesageModel {
  dateBonEntree: number;
  remorque: string;
  immatriculation: string;
  codePays: string;
  codeSensTrafic: string;
  lieuChargement: string;
}

export interface DemandImportDeclarationCamionModel {
  dateBonEntree: number;
  remorque: string;
  immatriculation: ImmatriculationModel;
  transporteMse: boolean;
  codeSensTrafic: SensTrafficModel;
  lieuChargement: LieuChargementModel;
  sitePesage: SitePesageModel | null;


}

export interface DeclarationCamionSimplifiedModel {
  immatriculation: string | null;
  nomConducteur: string | null;
  remorque: string | null;
  libAireStockage: string | null;
  nomTransitaire: string | null;
  raisonSocialTransitaire: string | null;
  poidsVide: number | null;
  poidsCharge: number | null;
  redevance: number | null;
  observationPesage: string | null;
  numBonEntreeCamion: string | null;
  dateBonEntree: string | null;

}

export interface InfosUpdatePoidsCamionModel {
  poidsCharge?: number;
  poidsVide?: number;
  observationPesage?: string;
}

export interface CreateImportDeclarationCamionModel {
  immatriculation: string;
  codePays: string;
  codeSensTrafic: string;
  remorque: string;
  lieuChargement: string;
  idSitePesage: number;
  idLigneMseList: number[];
  transporteMse: boolean;
  becLigneMseList: string[];
  camion: CamionModel;
  sitePesage: SitePesageModel;
  airStockage: AirStockageModel;
  chargeurObj: ChargeurModel;
  chargeur: string;
  bonChargement: string;
  poidsChargeEnleve: number;
}
