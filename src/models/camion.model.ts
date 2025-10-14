import {PaysModel} from "./pays.model";
import {TransporteurModel} from "./transporteur.model";
import {ConducteurModel} from "./conducteur.model";
import {TypePieceJointeModel} from "./upload-files.model";
import {NationaliteModel} from "./nationalite.model";
import {AffretementCamionModel} from "./affretement.model";

export interface CamionModel {
  conducteur: ConducteurModel;
  conducteurObj: ConducteurModel;
  id: number;
  transporteur: TransporteurModel;
  immatriculation: string;
  remorque: string;
  poidsVide: number;
  nationalite: string;
  silhouette: string;
  marque: string;
  pays: string;
  paysObj: PaysModel;
  nombreEssieu: number;
  isOutdated: boolean;
  etatCamion: "REJETER" | "VALIDER" | "SOUMIS";
  poids: number; // Poids affecté au camion lors de l'affrètement juste pour l'affretement
  etatBon: boolean; // Etat Bon de chargement du camion lors de l'affrètement
  etatBonChargeur: boolean; // Etat Bon de chargement du camion lors de l'affrètement
  affretementCamion: AffretementCamionModel,


  chargeUtile: number;
  capaciteAutorisee14: number;
  dateExpVisiteTechnique: Date;
  dateExpAssurance: Date |number;
  modeleCarteGrise: string;
  numeroCarteGrise: string;
  numeroCarteTransport: string;
  disponible: boolean | null;

  piecesJustificatives: PieceJustificativeModel[];

  createdBy: string;
  createdAt: number;
  updateBy: string;
  updateAt: number;
}

export interface PieceJustificativeModel {
  id: number;
  declarationFret: string;
  typePiece: TypePieceJointeModel,
  camion: CamionModel,
  libelle: string;
  fichier:string;
  updatedBy: null,
  updatedAt: null
}

export interface CreateCamionModel {
  conducteur: string;
  conducteurObj: ConducteurModel;
  transporteur: string;
  nombreEssieu: number;
  transporteurObj: TransporteurModel;
  immatriculation: string;
  silhouette: string;
  marque: string;
  poidsVide: number;
  remorque: string;

  nationalite: string;
  nomNationalite:string;
  nationaliteObj: NationaliteModel

  pays:string;
  nomPays:string;
  paysObj:PaysModel;

  chargeUtile: number;
  capaciteAutorisee14: number;
  dateExpVisiteTechnique: Date;
  dateExpAssurance: Date;
  modeleCarteGrise: string;
  numeroCarteGrise: string;
  numeroCarteTransport: string;
}
