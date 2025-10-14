export interface ManutentionnaireModel {
  id: number;
  nom: string;
  prenoms: string | null;
  nationalite: string | null;
  telephone: string;
  compteClient: string;
  mail: string;
  createdAt: Date;
  updateAt: Date;
}
