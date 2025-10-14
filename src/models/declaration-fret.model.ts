import {ChargeurModel} from "./chargeur.model";
import {DestinataireMarchandiseModel} from "./destinataire-marchandise.model";
import {DeclarantModel} from "./declarant.model";
import {EtatMarchandiseEnum, SensTrafficEnum} from "../enums/sens-traffic.enum";

export interface DeclarationFretModel {

  id: number;
  sensTrafic: SensTrafficEnum;
  etatMarchandise: EtatMarchandiseEnum,
  declarant: DeclarantModel;
  chargeur: ChargeurModel;
  isAffreted: boolean | null;
  destinataireMarchandise: DestinataireMarchandiseModel;
  modeTransport: string;
  origineMarchandise: string;
  blNumeroConnaissement: string;
  portEmbarquement: string;
  nomNavire: string;
  nationaliteNavire: string;
  nombreCamionsSouhaite: number;
  prixTransportSouhaiteTonne: number;
  affichagePrixRecepisse: boolean;
  prixRecepisse: number;
  prixRecepisseTonne: number;
  poidsMarchandise: number;
  nombreCamionsRecepisse: number;
  nombreCamionsRecepisseTonne: number;
  numeroDossier: string;
  datePayement: Date;
  statut: boolean | null;
  statutPayment: boolean | null;
  statutAffretement: boolean | null;
  createdBy: string;
  createdAt: number;
  updateBy: string;
  updateAt: number;
}


export interface CreateDeclarationFretModel {
  chargeur: string;
  chargeurObj: ChargeurModel;
  sensTrafic: SensTrafficEnum;
  modeTransport: string;
  origineMarchandise: string;
  poidsMarchandise: number;
  destinataireMarchandise: number;
  destinataireMarchandiseObj: DestinataireMarchandiseModel;
  paysProvenance: string;
  villeProvenance: string;
  paysDestination: string;
  villeDestination: string;
  etatMarchandise: "LOCAL" | "TRANSIT",



  blNumeroConnaissement: string;
  nombreCamionsSouhaite: number;
  prixTransportSouhaiteTonne: number;
  affichagePrixRecepisse: boolean;
  portEmbarquement: string;
  nomNavire: string;
  nationaliteNavire: string;
  produitGrandeConsommation: boolean;
  natureMarchandise: string;
  codeSh: string;
}

