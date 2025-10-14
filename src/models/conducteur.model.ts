export interface CreateConducteurModel {
  nom: string;
  prenoms: string;
  numeroTelephone: string;
  numeroPermis: string;
  dateEtablissementPermis: string;
  dateExpPermis: string;
  lieuEtablissementPermis: string;
  associationAffiliation: string;
  nationalite: string;
  dateNaissance: string;
  genre: string;
  formatName: string;

}


export interface ConducteurModel {
  id: number;
  nom: string;
  prenoms: string;
  numeroTelephone: string;
  numeroPermis: string;
  formatName: string;
  dateEtablissementPermis: number;
  lieuEtablissementPermis: string;
  associationAffiliation: string;
  dateExpPermis: string;
  nationalite: string;
  dateNaissance: string;
  genre: string;
  createdBy: string;
  createdAt: number;
  updateBy: string;
  updateAt: number;

}
