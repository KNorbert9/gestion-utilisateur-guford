export enum SpaceCaslAction {
  Manage = "manage",
  Create = "create",
  Read = "read",
  Edit = "edit",
  Delete = "delete",
  Validate = "validate",
  Pay = "pay",
}

export enum SpaceCaslSubject {
  Camions = "camions",
  BonChargement = "bonChargement",
  BonEntree = "bonEntree",
  Affretement = "affretement",
  RendezVous = "rendez-vous",
  ChargementCamion = "chargementCamion",
  PesageCharge = "PesageCharge",
}

export type SpaceAbility =
  | [SpaceCaslAction, SpaceCaslSubject.Camions]
  | [SpaceCaslAction, SpaceCaslSubject.BonChargement]
  | [SpaceCaslAction, SpaceCaslSubject.BonEntree]
  | [SpaceCaslAction, SpaceCaslSubject.Affretement]
  | [SpaceCaslAction, SpaceCaslSubject.RendezVous]
  | [SpaceCaslAction, SpaceCaslSubject.ChargementCamion]
  | [SpaceCaslAction, SpaceCaslSubject.PesageCharge]
