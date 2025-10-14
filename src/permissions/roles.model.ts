import {SpaceCaslAction, SpaceCaslSubject} from "./use-space-ability";


type Permissions = Permission[];

interface Permission {
  action: SpaceCaslAction;
  subject: SpaceCaslSubject;
}



export const transporteurPermissions: Permissions = [
  {
    action: SpaceCaslAction.Read,
    subject: SpaceCaslSubject.Camions
  },
  {
    action: SpaceCaslAction.Edit,
    subject: SpaceCaslSubject.Camions
  },
  {
    action: SpaceCaslAction.Delete,
    subject: SpaceCaslSubject.Camions
  },
  {
    action: SpaceCaslAction.Create,
    subject: SpaceCaslSubject.Camions
  },
  // Bon de chargement
  {
    action: SpaceCaslAction.Read,
    subject: SpaceCaslSubject.BonChargement
  },
  {
    action: SpaceCaslAction.Pay,
    subject: SpaceCaslSubject.BonChargement
  }
]

export const bureauFretPermissions: Permissions = [
  {
    action: SpaceCaslAction.Read,
    subject: SpaceCaslSubject.Camions
  },

  {
    action: SpaceCaslAction.Validate,
    subject: SpaceCaslSubject.Camions
  },

  // Bon de chargement
  {
    action: SpaceCaslAction.Read,
    subject: SpaceCaslSubject.BonChargement
  },
  {
    action: SpaceCaslAction.Create,
    subject: SpaceCaslSubject.BonChargement
  }
]


export const chargeurPermissions: Permissions = [
  {
    action: SpaceCaslAction.Read,
    subject: SpaceCaslSubject.BonChargement
  },
  {
    action: SpaceCaslAction.Validate,
    subject: SpaceCaslSubject.BonChargement
  }
]

export const transitairePermissions: Permissions = [
  // Bon d'entrée
  {
    action: SpaceCaslAction.Read,
    subject: SpaceCaslSubject.BonEntree
  },
  {
    action: SpaceCaslAction.Create,
    subject: SpaceCaslSubject.BonEntree
  },
  {
    action: SpaceCaslAction.Pay,
    subject: SpaceCaslSubject.BonEntree
  }
]

export const manutentionnairePermissions: Permissions = [
  {
    action: SpaceCaslAction.Read,
    subject: SpaceCaslSubject.RendezVous
  },
  {
    action: SpaceCaslAction.Validate,
    subject: SpaceCaslSubject.RendezVous
  },
  // Chargement
  {
    action: SpaceCaslAction.Read,
    subject: SpaceCaslSubject.ChargementCamion
  },
  {
    action: SpaceCaslAction.Validate,
    subject: SpaceCaslSubject.ChargementCamion
  },
]

export const sitePesagePermissions: Permissions = [
  {
    action: SpaceCaslAction.Read,
    subject: SpaceCaslSubject.RendezVous
  },
  //   Pesage à charge
  {
    action: SpaceCaslAction.Manage,
    subject: SpaceCaslSubject.PesageCharge
  },
]
