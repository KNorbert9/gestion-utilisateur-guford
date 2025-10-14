export interface SyndicatModel {
  id: number;
  raisonSocial: string;
  telephone: string | null;
  adresse: string | null;
  nationalite: string | null;
  mail: string;
  status: string | null;
  createdAt: Date;
  updatedAt: Date;
}
