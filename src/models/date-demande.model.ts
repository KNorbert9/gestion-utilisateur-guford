import {StatusDemandEnum} from "./demand.model";


export interface DemandDateModel {
    status: StatusDemandEnum;
    etat: StatusDemandEnum;
    dateDmd: Date;
    dateSoumission: Date;
    dateSoumise: Date;
    dateDemande: Date;
    dateInspection?: Date;
    dateAccepter: Date;
    dateRejeter: Date;
    dateValider: Date;
    dateTraiter: Date;
    dateAnnuler: Date;
    dateTraitement: Date;
    createdAt: Date;
    updatedAt: Date;
    dateRejet: Date;
    dateAccepte: Date;
}
