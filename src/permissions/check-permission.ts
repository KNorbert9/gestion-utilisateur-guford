import {
  bureauFretPermissions,
  chargeurPermissions, manutentionnairePermissions, sitePesagePermissions,
  transitairePermissions,
  transporteurPermissions
} from "./roles.model";
import {GroupeEnum, RoleVBSEnum} from "../models/user.model";


export const getPermissionsByRole = (roles: GroupeEnum[], trueRole: RoleVBSEnum) => {
  switch (roles[0]) {
    case GroupeEnum.BUREAU_FRET:
      return bureauFretPermissions;
    case GroupeEnum.TRANSPORTEUR:
      return transporteurPermissions;
    case GroupeEnum.CHARGEUR:
      return chargeurPermissions;
    case GroupeEnum.TRANSITAIRES:
      return transitairePermissions;
      case GroupeEnum.CONCESSIONNAIRES:
        if(trueRole === RoleVBSEnum.MANUTENTIONNAIRE){
          return manutentionnairePermissions;
        }else{
          return sitePesagePermissions;
        }
    default:
      return [];
  }
};
