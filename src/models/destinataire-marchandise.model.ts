export interface DestinataireMarchandiseModel {
  id: number;
  nom: string;
  email: string;
  nationalite: string;
  typeDestinataire: string;
  telephone: string;
  natureMarchandise: string;
  codeSh: string;
  nombreProduit: number;
  produitGrandeConsommation: number;
  createdBy: string;
  createdAt: number;
  updateBy: string;
  updateAt: number;

}


export interface CreateDestinataireMarchandiseModel {
  nom: string;
  typeDestinataire: string;
  telephone: string;
  email: string;
  nationalite: string;
  natureMarchandise: string;
  codeSh: string;
  nombreProduit: number;
  produitGrandeConsommation: number;

}
