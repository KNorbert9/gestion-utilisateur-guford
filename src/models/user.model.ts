import {ChargeurModel} from "./chargeur.model";
import {TransporteurModel} from "./transporteur.model";

export interface UserModel {
  idUser: number;
  login: string;
  fullname: string;
  lastName: string;
  firstName: string;
  email: string;
  mobile: string;
  entreprise: string;
  fonction: string;
  groupe: GroupeEnum;
  role: RoleVBSEnum;
  chargeur: ChargeurModel | null;
  transporteur: TransporteurModel | null;
  compteClient: string;
}


export enum GroupeEnum {
  CONSIGNATAIRES = 'CONSIGNATAIRES',
  DECLARANT = 'DECLARANT',
  TRANSITAIRES = 'TRANSITAIRES',
  CONCESSIONNAIRES = 'CONCESSIONNAIRE',
  CHARGEUR = 'CHARGEURS',
  TRANSPORTEUR = 'TRANSPORTEURS',
  BUREAU_FRET = 'BUREAU_FRET',
}

export enum RoleVBSEnum {
  SITE_PESAGE = 'SITE_PESAGE',
  MANUTENTIONNAIRE = 'MANUTENTIONNAIRE',
  USER = 'user'
}
