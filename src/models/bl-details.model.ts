import {PaysModel} from "./pays.model";
import {EtatMarchandiseEnum} from "../enums/sens-traffic.enum";

export interface BlDetailsModel {
  portOrigine: PortOrigineModel;
  portDestination: PortDestinationModel;
  nomNavire: string;
  pavillonNavire: string;
  codeRegimeTarifaire: EtatMarchandiseEnum;
  ligneMseList: LigneMseModel[];
  paysDestination: PaysModel;
}

export interface PortOrigineModel {
  codePort: string;
  locode: string;
  nomPort: string;
  timeZonePort: string;
  villePort: string;
  codeVillePort: string;
  adressePort: string;
  telPort: string;
  faxPort: string;
  emailPort: string;
  siteWebPort: string;
  listeNoire: number;
  dateAjoutListeNoire: string;
  dateRetraitListeNoire: string;
  pays: PaysModel;
}

export interface PortDestinationModel {
  codePort: string;
  locode: string;
  nomPort: string;
  timeZonePort: string;
  villePort: string;
  codeVillePort: string;
  adressePort: string;
  telPort: string;
  faxPort: string;
  emailPort: string;
  siteWebPort: string;
  listeNoire: number;
  dateAjoutListeNoire: string;
  dateRetraitListeNoire: string;
  pays: PaysModel;
}

export interface LigneMseModel {
  idLigneMse: number;
  descMse: string;
  poidsBrut: number;
  idBl: IdBlModel;
  numConteneur: NumConteneurModel;
  codeMarchandise: CodeMarchandiseModel;
  paysOrigine: PaysModel;
}

export interface IdBlModel {
  idBl: number;
  numBl: string;
  dateEnvoiBl: number;
  dateAbandon: string;
  descriptionBl: string;
  nomProprietaireInconnu: string;
  nomRepresentant: string;
  depotage: number;
  dmdfactr: number;
}

export interface NumConteneurModel {
  numConteneur: string;
  interdit: boolean;
  libre: boolean;
  vide: boolean;
  codeTypeConteneur: CodeTypeConteneurModel;
}

export interface CodeTypeConteneurModel {
  code: string;
  libelle: string;
  categConteneur: string;
}

export interface CodeMarchandiseModel {
  codeMarchandise: string;
  libMarchandise: string;
  motsCles: string;
  descMse: string;
  numeroUn: string
  qteLimite: string;
}


