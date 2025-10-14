import {PaysModel} from "./pays.model";
import {GarantModel} from "./garant.model";

export interface TransporteurModel {
  id: number;
  garant: GarantModel;
  raisonSociale: string;
  telephone: string;
  adresse: string;
  mail: string;
  nif: string;
  rccm: string;
  licenceTransport: string;
  createdBy: string;
  createdAt: number;
  updateBy: string;
  updateAt: number;
}


export interface CreateTransporteurModel {

   garant: number;
   garantObj: GarantModel;
   raisonSociale: string;
   telephone: string;
   adresse: string;
   mail: string;
   nif: string;
   rccm: string;
   licenceTransport: string;

}

