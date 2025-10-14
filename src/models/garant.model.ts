export interface CreateGarantModel {
  nom: string;
  prenom: string;
  telephone: string
  genre: string;
  mail: string;
  cin: string;
}


export interface GarantModel {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  genre: string;
  mail: string;
  cin: string;
  createdBy: string;
  updateBy: string;
  createAt: Date;
  updateAt: Date;
}

