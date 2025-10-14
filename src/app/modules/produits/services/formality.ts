export const dataFormalityInputs = [
    {
        attribut: 'FORM-MAHVDR',
        formality: 'Inspection Phytosanitaire de navire',
        form: {
            typeDemande: {
                value: '',
                label: 'Type de demande',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Inspection phytosanitaire de navire', value: 'NAVIRE' },
                    { label: 'Inspection phytosanitaire de cargaison & conteneur', value: 'CARGAISON_CONTENEUR' },
                    { label: 'Inspection phytosanitaire des produits pharmaceutiques', value: 'PHARMACEUTIQUE' }
                ]
            },
            atp: { value: '', label: 'ATP', inputType: 'text', type: 'input' },
            nomNavire: { value: '', label: 'Nom du navire', inputType: 'text', type: 'input' },
            imo: { value: '', label: 'IMO', inputType: 'text', type: 'input' },
            affreteur: { value: '', label: 'Affréteur', inputType: 'text', type: 'input' },
            userLogin: { value: '', label: 'Utilisateur', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },

            nomDemandeur: { value: '', label: 'Nom du demandeur', inputType: 'text', type: 'input' },
            prenomDemandeur: { value: '', label: 'Prénom du demandeur', inputType: 'text', type: 'input' },
            professionDemandeur: { value: '', label: 'Profession du demandeur', inputType: 'text', type: 'input' },
            adresseDemandeur: { value: '', label: 'Adresse du demandeur', inputType: 'text', type: 'input' },
            structureDemandeur: { value: '', label: 'Structure du demandeur', inputType: 'text', type: 'input' },

            lieuInspection: { value: '', label: 'Lieu de l’inspection', inputType: 'text', type: 'input' },
            numeroBl: { value: '', label: 'Numéro BL', inputType: 'text', type: 'input' },
            expediteur: { value: '', label: 'Expéditeur', inputType: 'text', type: 'input' },

            datePrevuInspection: { value: '', label: 'Date prévue d’inspection', inputType: 'datetime-local', type: 'input' },





            nifImportateur: { value: '', label: 'NIF Importateur', inputType: 'text', type: 'input' },
            nomImportateur: { value: '', label: 'Nom Importateur', inputType: 'text', type: 'input' },
            refTypeInspectionPhyto: { value: '', label: 'Type d’inspection phytosanitaire', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-MAHVDR',
        formality: 'Inspection Phytosanitaire cargaison & conteneur',
        form: {
            typeDemande: {
                value: '',
                label: 'Type de demande',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Inspection phytosanitaire de navire', value: 'NAVIRE' },
                    { label: 'Inspection phytosanitaire de cargaison & conteneur', value: 'CARGAISON_CONTENEUR' },
                    { label: 'Inspection phytosanitaire des produits pharmaceutiques', value: 'PHARMACEUTIQUE' }
                ]
            },
            atp: { value: '', label: 'ATP', inputType: 'text', type: 'input' },
            nomNavire: { value: '', label: 'Nom du navire', inputType: 'text', type: 'input' },
            imo: { value: '', label: 'IMO', inputType: 'text', type: 'input' },
            affreteur: { value: '', label: 'Affréteur', inputType: 'text', type: 'input' },
            userLogin: { value: '', label: 'Utilisateur', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },

            nomDemandeur: { value: '', label: 'Nom du demandeur', inputType: 'text', type: 'input' },
            prenomDemandeur: { value: '', label: 'Prénom du demandeur', inputType: 'text', type: 'input' },
            professionDemandeur: { value: '', label: 'Profession du demandeur', inputType: 'text', type: 'input' },
            adresseDemandeur: { value: '', label: 'Adresse du demandeur', inputType: 'text', type: 'input' },
            structureDemandeur: { value: '', label: 'Structure du demandeur', inputType: 'text', type: 'input' },

            lieuInspection: { value: '', label: 'Lieu de l’inspection', inputType: 'text', type: 'input' },
            numeroBl: { value: '', label: 'Numéro BL', inputType: 'text', type: 'input' },
            expediteur: { value: '', label: 'Expéditeur', inputType: 'text', type: 'input' },

            datePrevuInspection: { value: '', label: 'Date prévue d’inspection', inputType: 'datetime-local', type: 'input' },



            nifImportateur: { value: '', label: 'NIF Importateur', inputType: 'text', type: 'input' },
            nomImportateur: { value: '', label: 'Nom Importateur', inputType: 'text', type: 'input' },
            refTypeInspectionPhyto: { value: '', label: 'Type d’inspection phytosanitaire', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-MAHVDR',
        formality: 'Inspection Phytosanitaire de produits phytopharmaceutiques',
        form: {
            typeDemande: {
                value: '',
                label: 'Type de demande',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Inspection phytosanitaire de navire', value: 'NAVIRE' },
                    { label: 'Inspection phytosanitaire de cargaison & conteneur', value: 'CARGAISON_CONTENEUR' },
                    { label: 'Inspection phytosanitaire des produits pharmaceutiques', value: 'PHARMACEUTIQUE' }
                ]
            },
            atp: { value: '', label: 'ATP', inputType: 'text', type: 'input' },
            nomNavire: { value: '', label: 'Nom du navire', inputType: 'text', type: 'input' },
            imo: { value: '', label: 'IMO', inputType: 'text', type: 'input' },
            affreteur: { value: '', label: 'Affréteur', inputType: 'text', type: 'input' },
            userLogin: { value: '', label: 'Utilisateur', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },

            nomDemandeur: { value: '', label: 'Nom du demandeur', inputType: 'text', type: 'input' },
            prenomDemandeur: { value: '', label: 'Prénom du demandeur', inputType: 'text', type: 'input' },
            professionDemandeur: { value: '', label: 'Profession du demandeur', inputType: 'text', type: 'input' },
            adresseDemandeur: { value: '', label: 'Adresse du demandeur', inputType: 'text', type: 'input' },
            structureDemandeur: { value: '', label: 'Structure du demandeur', inputType: 'text', type: 'input' },

            lieuInspection: { value: '', label: 'Lieu de l’inspection', inputType: 'text', type: 'input' },
            numeroBl: { value: '', label: 'Numéro BL', inputType: 'text', type: 'input' },
            expediteur: { value: '', label: 'Expéditeur', inputType: 'text', type: 'input' },

            datePrevuInspection: { value: '', label: 'Date prévue d’inspection', inputType: 'datetime-local', type: 'input' },





            nifImportateur: { value: '', label: 'NIF Importateur', inputType: 'text', type: 'input' },
            nomImportateur: { value: '', label: 'Nom Importateur', inputType: 'text', type: 'input' },
            refTypeInspectionPhyto: { value: '', label: 'Type d’inspection phytosanitaire', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: 'Demande d\'attestation de reboisement',
        form: {
            idPrefecture: { value: 9007199254740991, label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: 9007199254740991, label: 'Commune', inputType: 'number', type: 'input' },
            nom: { value: 'string', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: 'string', label: 'Prénom', inputType: 'text', type: 'input' },
            telephone: { value: 'string', label: 'Téléphone', inputType: 'text', type: 'input' },
            superficie: { value: 9007199254740991, label: 'Superficie', inputType: 'number', type: 'input' },
            email: { value: 'string', label: 'Email', inputType: 'email', type: 'input' },
            sexe: {
                value: 'MASCULIN',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            datePlantation: { value: 'string', label: 'Date de plantation', inputType: 'date', type: 'input' },
            dateNaissance: { value: '2025-07-03T17:47:32.044Z', label: 'Date de naissance', inputType: 'datetime-local', type: 'input' },
            localite: { value: 'string', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: 'string', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: 'string', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: 'string', label: 'Adresse', inputType: 'text', type: 'input' },
            typeDemandeur: {
                value: 'PERSONNE_PHISIQUE',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: 'string', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: 'string', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: 'string', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: 9007199254740991, label: 'Forme juridique', inputType: 'number', type: 'input' },
            typePieceIdentite: { value: 9007199254740991, label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: 'string', label: 'Numéro de pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '2025-07-03T17:47:32.044Z', label: 'Date d’établissement', inputType: 'datetime-local', type: 'input' },
            dateExpiration: { value: '2025-07-03T17:47:32.044Z', label: 'Date d’expiration', inputType: 'datetime-local', type: 'input' },
            dateEtablissementCfe: { value: '2025-07-03T17:47:32.044Z', label: 'Date établissement CFE', inputType: 'datetime-local', type: 'input' },
            dateExpirationCfe: { value: '2025-07-03T17:47:32.044Z', label: 'Date expiration CFE', inputType: 'datetime-local', type: 'input' },
            bp: { value: 'string', label: 'Boîte postale (BP)', inputType: 'text', type: 'input' },
            profession: { value: 'string', label: 'Profession', inputType: 'text', type: 'input' },

            produits: {
                value: [
                    {
                        nombrePieds: { value: 9007199254740991, label: 'Nombre de pieds', inputType: 'number', type: 'input' },
                        idProduit: { value: 9007199254740991, label: 'ID Produit', inputType: 'number', type: 'input' },
                        superficie: { value: 9007199254740991, label: 'Superficie', inputType: 'number', type: 'input' },
                        schemaCultural: { value: 'string', label: 'Schéma cultural', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: 'Demande d\'autorisation de coupe',
        form: {
            typeCoupe: {
                value: '',
                label: 'Type de coupe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Bois Naturel', value: 'BOISNATUREL' },
                    { label: 'Bois Planté', value: 'BOISPLANTE' }
                ]
            },
            sessionPlantation: {
                value: false,
                label: 'Session de plantation',
                inputType: 'checkbox',
                type: 'input'
            },
            foretCommunautaire: {
                value: false,
                label: 'Forêt communautaire',
                inputType: 'checkbox',
                type: 'input'
            },
            idPrefecture: {
                value: '',
                label: 'Préfecture',
                inputType: 'select',
                type: 'select',
                options: [] // à remplir dynamiquement
            },
            idCommune: {
                value: '',
                label: 'Commune',
                inputType: 'select',
                type: 'select',
                options: [] // à remplir dynamiquement
            },
            typePropriete: {
                value: '',
                label: 'Type de propriété',
                inputType: 'select',
                type: 'select',
                options: [] // à remplir dynamiquement
            },
            superficie: {
                value: 0,
                label: 'Superficie (ha)',
                inputType: 'number',
                type: 'input'
            },
            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            sexe: {
                value: '', label: 'Sexe', inputType: 'select', type: 'select', options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            email: { value: '', label: 'Email', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            dateNaissance: {
                value: '',
                label: 'Date de naissance',
                inputType: 'date',
                type: 'input'
            },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse société', inputType: 'text', type: 'input' },
            formeJuridique: {
                value: '',
                label: 'Forme juridique',
                inputType: 'select',
                type: 'select',
                options: [] // à remplir dynamiquement
            },
            typePieceIdentite: {
                value: '',
                label: 'Type de pièce d’identité',
                inputType: 'select',
                type: 'select',
                options: [] // à remplir dynamiquement
            },
            numeroPiece: { value: '', label: 'Numéro de pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            dateEtablissementCfe: { value: '', label: 'Date étab. CFE', inputType: 'date', type: 'input' },
            dateExpirationCfe: { value: '', label: 'Date exp. CFE', inputType: 'date', type: 'input' },
            emailSociete: { value: '', label: 'Email société', inputType: 'text', type: 'input' },
            telephoneSociete: { value: '', label: 'Téléphone société', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte postale (BP)', inputType: 'text', type: 'input' },

            produits: {
                value: [
                    {
                        nombrePieds: { value: 0, label: 'Nombre de pieds', inputType: 'number', type: 'input' },
                        idProduit: {
                            value: '',
                            label: 'Produit',
                            inputType: 'select',
                            type: 'select',
                            options: [] // à remplir dynamiquement
                        },
                        commentaire: { value: '', label: 'Commentaire', inputType: 'text', type: 'input' },
                        circonference: { value: 0.0, label: 'Circonférence (m)', inputType: 'number', type: 'input' },
                        idTypeBois: {
                            value: '',
                            label: 'Type de bois',
                            inputType: 'select',
                            type: 'select',
                            options: [] // à remplir dynamiquement
                        },
                        idRaisonCoupe: {
                            value: '',
                            label: 'Raison de coupe',
                            inputType: 'select',
                            type: 'select',
                            options: [] // à remplir dynamiquement
                        },
                        idTypeCoupe: {
                            value: '',
                            label: 'Type de coupe',
                            inputType: 'select',
                            type: 'select',
                            options: [] // à remplir dynamiquement
                        }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: 'Autorisation de transport',
        form: {
            type: {
                value: 'COUPE',
                label: 'Type de demande',
                inputType: 'text',
                type: 'input'
            },
            idPrefecture: {
                value: 9007199254740991,
                label: 'Préfecture',
                inputType: 'number',
                type: 'input'
            },
            idCommune: {
                value: 9007199254740991,
                label: 'Commune',
                inputType: 'number',
                type: 'input'
            },
            nom: {
                value: 'string',
                label: 'Nom',
                inputType: 'text',
                type: 'input'
            },
            prenom: {
                value: 'string',
                label: 'Prénom',
                inputType: 'text',
                type: 'input'
            },
            telephone: {
                value: 'string',
                label: 'Téléphone',
                inputType: 'text',
                type: 'input'
            },
            email: {
                value: 'string',
                label: 'Email',
                inputType: 'text',
                type: 'input'
            },
            sexe: {
                value: 'MASCULIN',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            localite: {
                value: 'string',
                label: 'Localité',
                inputType: 'text',
                type: 'input'
            },
            village: {
                value: 'string',
                label: 'Village',
                inputType: 'text',
                type: 'input'
            },
            canton: {
                value: 'string',
                label: 'Canton',
                inputType: 'text',
                type: 'input'
            },
            adresse: {
                value: 'string',
                label: 'Adresse',
                inputType: 'text',
                type: 'input'
            },
            itineraire: {
                value: 'string',
                label: 'Itinéraire',
                inputType: 'text',
                type: 'input'
            },
            typeDemandeur: {
                value: 'PERSONNE_PHISIQUE',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: {
                value: 'string',
                label: 'Raison sociale',
                inputType: 'text',
                type: 'input'
            },
            numeroCfe: {
                value: 'string',
                label: 'Numéro CFE',
                inputType: 'text',
                type: 'input'
            },
            adresseSociete: {
                value: 'string',
                label: 'Adresse société',
                inputType: 'text',
                type: 'input'
            },
            formeJuridique: {
                value: 9007199254740991,
                label: 'Forme juridique',
                inputType: 'number',
                type: 'input'
            },
            dateNaissance: {
                value: 'string',
                label: 'Date de naissance',
                inputType: 'date',
                type: 'input'
            },
            typePieceIdentite: {
                value: 9007199254740991,
                label: 'Type de pièce d’identité',
                inputType: 'number',
                type: 'input'
            },
            numeroPiece: {
                value: 'string',
                label: 'Numéro de pièce',
                inputType: 'text',
                type: 'input'
            },
            dateEtablissement: {
                value: '2025-07-04T09:14:13.296Z',
                label: 'Date d’établissement',
                inputType: 'datetime-local',
                type: 'input'
            },
            dateExpiration: {
                value: '2025-07-04T09:14:13.296Z',
                label: 'Date d’expiration',
                inputType: 'datetime-local',
                type: 'input'
            },
            dateEtablissementCfe: {
                value: '2025-07-04T09:14:13.296Z',
                label: 'Date d’établissement CFE',
                inputType: 'datetime-local',
                type: 'input'
            },
            dateExpirationCfe: {
                value: '2025-07-04T09:14:13.296Z',
                label: 'Date d’expiration CFE',
                inputType: 'datetime-local',
                type: 'input'
            },
            bp: {
                value: 'string',
                label: 'Boîte Postale',
                inputType: 'text',
                type: 'input'
            },
            produits: {
                value: [
                    {
                        quantite: {
                            value: 0.1,
                            label: 'Quantité',
                            inputType: 'number',
                            type: 'input'
                        },
                        idProduit: {
                            value: 9007199254740991,
                            label: 'ID Produit',
                            inputType: 'number',
                            type: 'input'
                        }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: 'Permis de circulation',
        form: {
            idDmdTrans: { value: 9007199254740991, label: 'ID Demande Trans', inputType: 'number', type: 'input' },
            idModeTransport: { value: 9007199254740991, label: 'Mode de transport', inputType: 'number', type: 'input' },
            pays: { value: 'string', label: 'Pays', inputType: 'text', type: 'input' },
            ville: { value: 'string', label: 'Ville', inputType: 'text', type: 'input' },
            immatriculation: { value: 'string', label: 'Immatriculation', inputType: 'text', type: 'input' },

            nom: { value: 'string', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: 'string', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: 'string', label: 'Date de naissance', inputType: 'date', type: 'input' },
            sexe: {
                value: 'MASCULIN',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: 'string', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: 'string', label: 'Boîte postale', inputType: 'text', type: 'input' },

            typePieceIdentite: { value: 9007199254740991, label: 'Type pièce identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: 'string', label: 'Numéro pièce identité', inputType: 'text', type: 'input' },
            dateEtablissement: {
                value: '2025-07-04T09:36:52.913Z',
                label: 'Date établissement pièce',
                inputType: 'datetime-local',
                type: 'input'
            },
            dateExpiration: {
                value: '2025-07-04T09:36:52.913Z',
                label: 'Date expiration pièce',
                inputType: 'datetime-local',
                type: 'input'
            },

            dateEtablissementCfe: {
                value: '2025-07-04T09:36:52.913Z',
                label: 'Date établissement CFE',
                inputType: 'datetime-local',
                type: 'input'
            },
            dateExpirationCfe: {
                value: '2025-07-04T09:36:52.913Z',
                label: 'Date expiration CFE',
                inputType: 'datetime-local',
                type: 'input'
            },

            localite: { value: 'string', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: 'string', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: 'string', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: 'string', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: 'string', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: 'string', label: 'Email', inputType: 'email', type: 'input' },

            typeDemandeur: {
                value: 'PERSONNE_PHISIQUE',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: 'string', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: 'string', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: 'string', label: 'Adresse société', inputType: 'text', type: 'input' },
            formeJuridique: { value: 9007199254740991, label: 'Forme juridique', inputType: 'number', type: 'input' },

            idPrefecture: { value: 9007199254740991, label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: 9007199254740991, label: 'Commune', inputType: 'number', type: 'input' },

            produits: {
                value: [
                    {
                        idProduit: {
                            value: 9007199254740991,
                            label: 'ID Produit',
                            inputType: 'number',
                            type: 'input'
                        },
                        quantite: {
                            value: 9007199254740991,
                            label: 'Quantité',
                            inputType: 'number',
                            type: 'input'
                        }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: 'Demande de certificat d\'empotage',
        form: {
            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'datetime-local', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte postale (BP)', inputType: 'text', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d\'identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d\'établissement', inputType: 'datetime-local', type: 'input' },
            dateExpiration: { value: '', label: 'Date d\'expiration', inputType: 'datetime-local', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'text', type: 'input' },
            provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },
            lieuxEmpotage: { value: '', label: 'Lieux d\'empotage', inputType: 'text', type: 'input' },
            destination: { value: '', label: 'Destination', inputType: 'text', type: 'input' },
            nomFournisseur: { value: '', label: 'Nom du fournisseur', inputType: 'text', type: 'input' },
            prenomFournisseur: { value: '', label: 'Prénom du fournisseur', inputType: 'text', type: 'input' },
            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            idPrefecture: { value: '', label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },
            conteneurs: {
                value: [
                    {
                        idTypeConteneur: { value: '', label: 'Type de conteneur', inputType: 'number', type: 'input' },
                        numConteneur: { value: '', label: 'Numéro du conteneur', inputType: 'text', type: 'input' },
                        natureProduit: { value: '', label: 'Nature du produit', inputType: 'text', type: 'input' },
                        provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },
                        quantite: { value: '', label: 'Quantité', inputType: 'number', type: 'input' },
                        quantitePermis: { value: '', label: 'Quantité du permis', inputType: 'number', type: 'input' },
                        quantitePermisRestant: { value: '', label: 'Quantité restante', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: 'Demande d\'autorisation d\'importation des spécimens de faune sauvages',
        form: {
            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'datetime-local', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte postale (BP)', inputType: 'text', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d\'identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d\'établissement', inputType: 'datetime-local', type: 'input' },
            dateExpiration: { value: '', label: 'Date d\'expiration', inputType: 'datetime-local', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'text', type: 'input' },
            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },
            produits: {
                value: [
                    {
                        idProduitDerive: { value: '', label: 'ID Produit dérivé', inputType: 'number', type: 'input' },
                        quantite: { value: '', label: 'Quantité', inputType: 'number', type: 'input' },
                        longueur: { value: '', label: 'Longueur', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Agrément sanitaire',
        form: {
            activite: { value: '', label: 'Activité', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            nif: { value: '', label: 'NIF', inputType: 'text', type: 'input' },
            typeActeurEconomique: { value: '', label: 'Type d’acteur économique', inputType: 'text', type: 'input' },
            nomResponsable: { value: '', label: 'Nom du responsable', inputType: 'text', type: 'input' },
            prenomsResponsable: { value: '', label: 'Prénoms du responsable', inputType: 'text', type: 'input' },
            sexeResponsable: {
                value: '',
                label: 'Sexe du responsable',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            adresseResponsable: { value: '', label: 'Adresse du responsable', inputType: 'text', type: 'input' },
            telephoneResponsable: { value: '', label: 'Téléphone du responsable', inputType: 'text', type: 'input' },
            emailResponsable: { value: '', label: 'Email du responsable', inputType: 'email', type: 'input' },
            fonctionResponsable: { value: '', label: 'Fonction du responsable', inputType: 'text', type: 'input' },


            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'text', type: 'input' },
            numeroCFE: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },


            regionEntreprise: { value: '', label: 'Région de l’entreprise', inputType: 'text', type: 'input' },
            prefectureEntreprise: { value: '', label: 'Préfecture de l’entreprise', inputType: 'text', type: 'input' },
            communeEntreprise: { value: '', label: 'Commune de l’entreprise', inputType: 'text', type: 'input' },
            emailEntreprise: { value: '', label: 'Email de l’entreprise', inputType: 'email', type: 'input' },
            telephoneEntreprise: { value: '', label: 'Téléphone de l’entreprise', inputType: 'text', type: 'input' },
            faxEntreprise: { value: '', label: 'Fax de l’entreprise', inputType: 'text', type: 'input' },
            adresseEntreprise: { value: '', label: 'Adresse de l’entreprise', inputType: 'text', type: 'input' },
            boitePostaleEntreprise: { value: '', label: 'Boîte postale de l’entreprise', inputType: 'text', type: 'input' },


            dateOuvertureEntreprise: { value: '', label: 'Date d’ouverture de l’entreprise', inputType: 'datetime-local', type: 'input' },
            immatriculationNavire: { value: '', label: 'Immatriculation du navire', inputType: 'text', type: 'input' },
            dateEntreeActivite: { value: '', label: 'Date d’entrée en activité', inputType: 'datetime-local', type: 'input' },

        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Renouvellement d\'agrément sanitaire',
        form: {
            numeroAgrement: { value: '', label: 'Numéro d’agrément', inputType: 'text', type: 'input' },
            activite: { value: '', label: 'Activité', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            nif: { value: '', label: 'NIF', inputType: 'text', type: 'input' },
            typeActeurEconomique: { value: '', label: 'Type d’acteur économique', inputType: 'text', type: 'input' },
            nomResponsable: { value: '', label: 'Nom du responsable', inputType: 'text', type: 'input' },
            prenomsResponsable: { value: '', label: 'Prénoms du responsable', inputType: 'text', type: 'input' },
            sexeResponsable: {
                value: '',
                label: 'Sexe du responsable',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            adresseResponsable: { value: '', label: 'Adresse du responsable', inputType: 'text', type: 'input' },
            telephoneResponsable: { value: '', label: 'Téléphone du responsable', inputType: 'text', type: 'input' },
            emailResponsable: { value: '', label: 'Email du responsable', inputType: 'email', type: 'input' },
            fonctionResponsable: { value: '', label: 'Fonction du responsable', inputType: 'text', type: 'input' },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'text', type: 'input' },
            numeroCFE: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            regionEntreprise: { value: '', label: 'Région de l’entreprise', inputType: 'text', type: 'input' },
            prefectureEntreprise: { value: '', label: 'Préfecture de l’entreprise', inputType: 'text', type: 'input' },
            communeEntreprise: { value: '', label: 'Commune de l’entreprise', inputType: 'text', type: 'input' },
            emailEntreprise: { value: '', label: 'Email de l’entreprise', inputType: 'email', type: 'input' },
            telephoneEntreprise: { value: '', label: 'Téléphone de l’entreprise', inputType: 'text', type: 'input' },
            faxEntreprise: { value: '', label: 'Fax de l’entreprise', inputType: 'text', type: 'input' },
            adresseEntreprise: { value: '', label: 'Adresse de l’entreprise', inputType: 'text', type: 'input' },
            boitePostaleEntreprise: { value: '', label: 'Boîte postale de l’entreprise', inputType: 'text', type: 'input' },
            dateOuvertureEntreprise: { value: '', label: 'Date d’ouverture de l’entreprise', inputType: 'datetime-local', type: 'input' },
            immatriculationNavire: { value: '', label: 'Immatriculation du navire', inputType: 'text', type: 'input' },
            dateEntreeActivite: { value: '', label: 'Date d’entrée en activité', inputType: 'datetime-local', type: 'input' },
            pieceJointeFormaliteDtos: {
                value: [
                    {
                        idTypePieceJointe: { value: 0, label: 'ID Type PJ', inputType: 'number', type: 'input' },
                        ref: { value: '', label: 'Référence PJ', inputType: 'text', type: 'input' },
                        nomOriginePieceJointe: { value: '', label: 'Nom origine PJ', inputType: 'text', type: 'input' },
                        urlPj: { value: '', label: 'URL PJ', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Autorisation d\'Importation d\'animaux vivants',
        form: {
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            nif: { value: '', label: 'NIF', inputType: 'text', type: 'input' },
            numeroAgrement: { value: '', label: 'Numéro d’agrément', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },


            detAutorisationProduitDtos: {
                value: [
                    {
                        unite: { value: '', label: 'Unité', inputType: 'text', type: 'input' },
                        produit: {
                            code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                            libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                            description: { value: '', label: 'Description', inputType: 'text', type: 'input' },
                            refTypeProduit: { value: '', label: 'Réf. type produit', inputType: 'text', type: 'input' }
                        },
                        nombreCarton: { value: 0, label: 'Nombre de cartons', inputType: 'number', type: 'input' },
                        origine: { value: '', label: 'Origine', inputType: 'text', type: 'input' },
                        provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },
                        poidNets: { value: 0, label: 'Poids net', inputType: 'number', type: 'input' },
                        dateProduction: { value: '', label: 'Date de production', inputType: 'datetime-local', type: 'input' },
                        conteneur: { value: '', label: 'Conteneur', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            },





            nomSocieteImportateur: { value: '', label: 'Nom société importateur', inputType: 'text', type: 'input' },
            activiteSocieteImportateur: { value: '', label: 'Activité société importateur', inputType: 'text', type: 'input' },
            adresseSocieteImportateur: { value: '', label: 'Adresse société importateur', inputType: 'text', type: 'input' },
            boitePostaleImportateur: { value: '', label: 'Boîte postale importateur', inputType: 'text', type: 'input' },
            numeroTelephoneImportateur: { value: '', label: 'Téléphone importateur', inputType: 'text', type: 'input' },
            numeroRCCMImportateur: { value: '', label: 'Numéro RCCM importateur', inputType: 'text', type: 'input' },
            villeImportateur: { value: '', label: 'Ville importateur', inputType: 'text', type: 'input' },
            emailImportateur: { value: '', label: 'Email importateur', inputType: 'email', type: 'input' },


            raisonSocialeFournisseur: { value: '', label: 'Raison sociale fournisseur', inputType: 'text', type: 'input' },
            adresseFournisseur: { value: '', label: 'Adresse fournisseur', inputType: 'text', type: 'input' },


            raisonSocialeExportateur: { value: '', label: 'Raison sociale exportateur', inputType: 'text', type: 'input' },
            adresseExportateur: { value: '', label: 'Adresse exportateur', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Autorisation d\'importation de médicaments Vétérinaires',
        form: {
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            nif: { value: '', label: 'NIF', inputType: 'text', type: 'input' },
            numeroAgrement: { value: '', label: 'Numéro d’agrément', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },


            detAutorisationProduitDtos: {
                value: [
                    {
                        unite: { value: '', label: 'Unité', inputType: 'text', type: 'input' },
                        produit: {
                            code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                            libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                            description: { value: '', label: 'Description', inputType: 'text', type: 'input' },
                            refTypeProduit: { value: '', label: 'Réf. type produit', inputType: 'text', type: 'input' }
                        },
                        nombreCarton: { value: 0, label: 'Nombre de cartons', inputType: 'number', type: 'input' },
                        origine: { value: '', label: 'Origine', inputType: 'text', type: 'input' },
                        provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },
                        poidNets: { value: 0, label: 'Poids net', inputType: 'number', type: 'input' },
                        dateProduction: { value: '', label: 'Date de production', inputType: 'datetime-local', type: 'input' },
                        conteneur: { value: '', label: 'Conteneur', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            },





            // Importateur
            raisonSocialeImportateur: { value: '', label: 'Raison sociale importateur', inputType: 'text', type: 'input' },
            formeJuridiqueImportateur: { value: '', label: 'Forme juridique importateur', inputType: 'text', type: 'input' },
            numeroCFEImportateur: { value: '', label: 'Numéro CFE importateur', inputType: 'text', type: 'input' },
            paysImportateur: { value: '', label: 'Pays importateur', inputType: 'text', type: 'input' },
            villeImportateur: { value: '', label: 'Ville importateur', inputType: 'text', type: 'input' },
            adresseSocieteImportateur: { value: '', label: 'Adresse société importateur', inputType: 'text', type: 'input' },
            telephoneImportateur: { value: '', label: 'Téléphone importateur', inputType: 'text', type: 'input' },
            faxImportateur: { value: '', label: 'Fax importateur', inputType: 'text', type: 'input' },
            emailImportateur: { value: '', label: 'Email importateur', inputType: 'email', type: 'input' },
            boitePostaleImportateur: { value: '', label: 'Boîte postale importateur', inputType: 'text', type: 'input' },


            // Responsable
            nomResponsable: { value: '', label: 'Nom du responsable', inputType: 'text', type: 'input' },
            prenomsResponsable: { value: '', label: 'Prénoms du responsable', inputType: 'text', type: 'input' },
            numeroTelephoneResponsable: { value: '', label: 'Téléphone du responsable', inputType: 'text', type: 'input' },
            emailResponsable: { value: '', label: 'Email du responsable', inputType: 'email', type: 'input' },


            // Fournisseur
            raisonSocialeFournisseur: { value: '', label: 'Raison sociale fournisseur', inputType: 'text', type: 'input' },
            paysFournisseur: { value: '', label: 'Pays fournisseur', inputType: 'text', type: 'input' },
            villeFournisseur: { value: '', label: 'Ville fournisseur', inputType: 'text', type: 'input' },
            adresseFournisseur: { value: '', label: 'Adresse fournisseur', inputType: 'text', type: 'input' },
            numeroTelephoneFournisseur: { value: '', label: 'Téléphone fournisseur', inputType: 'text', type: 'input' },
            faxFournisseur: { value: '', label: 'Fax fournisseur', inputType: 'text', type: 'input' },
            emailFournisseur: { value: '', label: 'Email fournisseur', inputType: 'email', type: 'input' },
            boitePostaleFournisseur: { value: '', label: 'Boîte postale fournisseur', inputType: 'text', type: 'input' },


            // Point de contact
            nomPointContact: { value: '', label: 'Nom point de contact', inputType: 'text', type: 'input' },
            prenomsPointContact: { value: '', label: 'Prénoms point de contact', inputType: 'text', type: 'input' },
            fonctionPointContact: { value: '', label: 'Fonction point de contact', inputType: 'text', type: 'input' },
            telephonePointContact: { value: '', label: 'Téléphone point de contact', inputType: 'text', type: 'input' },
            emailPointContact: { value: '', label: 'Email point de contact', inputType: 'email', type: 'input' }
        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Demande de dépotage',
        form: {
            numeroAutorisation: { value: '', label: 'Numéro d’autorisation', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            lieuDepotage: { value: '', label: 'Lieu de dépotage', inputType: 'text', type: 'input' },
        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Certificat sanitaire pour cire',
        form: {
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            demandePour: {
                value: '',
                label: 'Demande pour',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Consommation personnelle', value: 'CONSOMMATION_PERSONNELLE' },
                    { label: 'Usage commercial', value: 'USAGE_COMMERCIAL' }
                ]
            },


            // Expéditeur
            nomExpediteur: { value: '', label: 'Nom de l’expéditeur', inputType: 'text', type: 'input' },
            prenomsExpediteur: { value: '', label: 'Prénoms de l’expéditeur', inputType: 'text', type: 'input' },
            adresseExpediteur: { value: '', label: 'Adresse de l’expéditeur', inputType: 'text', type: 'input' },
            telephoneExpediteur: { value: '', label: 'Téléphone de l’expéditeur', inputType: 'text', type: 'input' },
            emailExpediteur: { value: '', label: 'Email de l’expéditeur', inputType: 'email', type: 'input' },
            paysExpediteur: { value: '', label: 'Pays de l’expéditeur', inputType: 'text', type: 'input' },


            // Destinataire
            nomDestinataire: { value: '', label: 'Nom du destinataire', inputType: 'text', type: 'input' },
            prenomsDestinataire: { value: '', label: 'Prénoms du destinataire', inputType: 'text', type: 'input' },
            adresseDestinataire: { value: '', label: 'Adresse du destinataire', inputType: 'text', type: 'input' },
            telephoneDestinataire: { value: '', label: 'Téléphone du destinataire', inputType: 'text', type: 'input' },
            emailDestinataire: { value: '', label: 'Email du destinataire', inputType: 'email', type: 'input' },
            paysDestinataire: { value: '', label: 'Pays du destinataire', inputType: 'text', type: 'input' },


            detCertificatProduitDtos: {
                value: [
                    {
                        produit: {
                            code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                            libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                            description: { value: '', label: 'Description', inputType: 'text', type: 'input' },
                            refTypeProduit: { value: '', label: 'Réf. type produit', inputType: 'text', type: 'input' }
                        },
                        traitement: { value: '', label: 'Traitement', inputType: 'text', type: 'input' },
                        poidsNet: { value: 0, label: 'Poids net', inputType: 'number', type: 'input' },
                        numeroConteneur: { value: '', label: 'Numéro conteneur', inputType: 'text', type: 'input' },
                        nombreConteneur: { value: 0, label: 'Nombre de conteneurs', inputType: 'number', type: 'input' },
                        natureEmballage: { value: '', label: 'Nature de l’emballage', inputType: 'text', type: 'input' },
                        description: { value: '', label: 'Description', inputType: 'text', type: 'input' },
                        typeProduit: { value: '', label: 'Type de produit', inputType: 'text', type: 'input' },
                        moyenTransport: { value: '', label: 'Moyen de transport', inputType: 'text', type: 'input' },
                        dateDepart: { value: '', label: 'Date de départ', inputType: 'datetime-local', type: 'input' }
                    }
                ],
                isArray: true
            },


            certificatProduitDtos: {
                value: [
                    {
                        typeProduit: { value: '', label: 'Type de produit', inputType: 'text', type: 'input' },
                        traitement: { value: '', label: 'Traitement', inputType: 'text', type: 'input' },
                        description: { value: '', label: 'Description', inputType: 'text', type: 'input' },
                        designation: { value: '', label: 'Désignation', inputType: 'text', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        nombreColis: { value: 0, label: 'Nombre de colis', inputType: 'number', type: 'input' },
                        nombreConteneur: { value: 0, label: 'Nombre de conteneurs', inputType: 'number', type: 'input' },
                        numeroConteneur: { value: '', label: 'Numéro conteneur', inputType: 'text', type: 'input' },
                        natureEmballage: { value: '', label: 'Nature de l’emballage', inputType: 'text', type: 'input' },
                        moyenTransport: { value: '', label: 'Moyen de transport', inputType: 'text', type: 'input' },
                        natureTraitement: { value: '', label: 'Nature du traitement', inputType: 'text', type: 'input' },
                        dateDepart: { value: '', label: 'Date de départ', inputType: 'datetime-local', type: 'input' },
                        poidsTotal: { value: 0, label: 'Poids total', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            },


            pieceJointeFormaliteDtos: {
                value: [
                    {
                        idTypePieceJointe: { value: 0, label: 'ID Type PJ', inputType: 'number', type: 'input' },
                        ref: { value: '', label: 'Référence PJ', inputType: 'text', type: 'input' },
                        nomOriginePieceJointe: { value: '', label: 'Nom origine PJ', inputType: 'text', type: 'input' },
                        urlPj: { value: '', label: 'URL PJ', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Certificat sanitaire pour animaux vivants',
        form: {
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            nif: { value: '', label: 'NIF', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },


            // Demandeur
            nomDemandeur: { value: '', label: 'Nom du demandeur', inputType: 'text', type: 'input' },
            prenomsDemandeur: { value: '', label: 'Prénoms du demandeur', inputType: 'text', type: 'input' },
            sexeDemandeur: {
                value: '',
                label: 'Sexe du demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            telephoneDemandeur: { value: '', label: 'Téléphone du demandeur', inputType: 'text', type: 'input' },
            emailDemandeur: { value: '', label: 'Email du demandeur', inputType: 'email', type: 'input' },
            adresseDemandeur: { value: '', label: 'Adresse du demandeur', inputType: 'text', type: 'input' },
            typePieceDemandeur: { value: '', label: 'Type de pièce du demandeur', inputType: 'text', type: 'input' },
            numeroPieceDemandeur: { value: '', label: 'Numéro de pièce', inputType: 'text', type: 'input' },
            dateEmissionPiece: { value: '', label: 'Date d’émission de la pièce', inputType: 'datetime-local', type: 'input' },
            dateExpirationPiece: { value: '', label: 'Date d’expiration de la pièce', inputType: 'datetime-local', type: 'input' },


            // Destinataire
            nomDestinataire: { value: '', label: 'Nom du destinataire', inputType: 'text', type: 'input' },
            prenomsDestinataire: { value: '', label: 'Prénoms du destinataire', inputType: 'text', type: 'input' },
            sexeDestinataire: {
                value: '',
                label: 'Sexe du destinataire',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            telephoneDestinataire: { value: '', label: 'Téléphone du destinataire', inputType: 'text', type: 'input' },
            emailDestinataire: { value: '', label: 'Email du destinataire', inputType: 'email', type: 'input' },
            adresseDestinataire: { value: '', label: 'Adresse du destinataire', inputType: 'text', type: 'input' },


            // Transport
            moyenTransport: { value: '', label: 'Moyen de transport', inputType: 'text', type: 'input' },
            lieuChargement: { value: '', label: 'Lieu de chargement', inputType: 'text', type: 'input' },
            destination: { value: '', label: 'Destination', inputType: 'text', type: 'input' },


            // Animaux
            detCertificatAnimals: {
                value: [
                    {
                        typeCertificatDemande: {
                            value: '',
                            label: 'Type de certificat',
                            inputType: 'select',
                            type: 'select',
                            options: [
                                { label: 'Animaux de compagnie', value: 'ANIMAUX_COMPAGNIE' },
                                { label: 'Animaux d’élevage', value: 'ANIMAUX_ELEVAGE' }
                            ]
                        },
                        nomAnimal: { value: '', label: 'Nom de l’animal', inputType: 'text', type: 'input' },
                        especes: { value: '', label: 'Espèce', inputType: 'text', type: 'input' },
                        race: { value: '', label: 'Race', inputType: 'text', type: 'input' },
                        dateNaissanceAnimal: { value: '', label: 'Date de naissance', inputType: 'datetime-local', type: 'input' },
                        sexeAnimal: {
                            value: '',
                            label: 'Sexe de l’animal',
                            inputType: 'select',
                            type: 'select',
                            options: [
                                { label: 'Masculin', value: 'MASCULIN' },
                                { label: 'Féminin', value: 'FEMININ' }
                            ]
                        },
                        robe: { value: '', label: 'Robe', inputType: 'text', type: 'input' },
                        numIdentification: { value: '', label: 'N° d’identification', inputType: 'text', type: 'input' },
                        dateVaccination: { value: '', label: 'Date de vaccination', inputType: 'datetime-local', type: 'input' }
                    }
                ],
                isArray: true
            },


            // Pièces jointes
            pieceJointeFormaliteDtos: {
                value: [
                    {
                        idTypePieceJointe: { value: 0, label: 'ID Type PJ', inputType: 'number', type: 'input' },
                        ref: { value: '', label: 'Référence PJ', inputType: 'text', type: 'input' },
                        nomOriginePieceJointe: { value: '', label: 'Nom origine PJ', inputType: 'text', type: 'input' },
                        urlPj: { value: '', label: 'URL PJ', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Autorisation spéciale d\'importation',
        form: {
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            userLogin: { value: '', label: 'Utilisateur', inputType: 'text', type: 'input' },
            bureauDouane: { value: '', label: 'Bureau de douane', inputType: 'text', type: 'input' },
            codeTypeAutorisation: { value: '', label: 'Code type d’autorisation', inputType: 'text', type: 'input' },


            detAutorisationProduitDtos: {
                value: [
                    {
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        unite: { value: '', label: 'Unité', inputType: 'text', type: 'input' },
                        code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                        libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                        dci: { value: '', label: 'DCI', inputType: 'text', type: 'input' },
                        teneurSubstancePsychotropes: { value: '', label: 'Teneur en substances psychotropes', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            },


            


            nifImportateur: { value: '', label: 'NIF Importateur', inputType: 'text', type: 'input' },
            nomDemandeur: { value: '', label: 'Nom du demandeur', inputType: 'text', type: 'input' },
            societeDemandeur: { value: '', label: 'Société du demandeur', inputType: 'text', type: 'input' },
            objetImportation: { value: '', label: 'Objet de l’importation', inputType: 'text', type: 'input' },
            nomImportateur: { value: '', label: 'Nom de l’importateur', inputType: 'text', type: 'input' },
            adresseImportateur: { value: '', label: 'Adresse de l’importateur', inputType: 'text', type: 'input' },
            emailImportateur: { value: '', label: 'Email de l’importateur', inputType: 'text', type: 'input' },
            telephoneImportateur: { value: '', label: 'Téléphone de l’importateur', inputType: 'text', type: 'input' },


            nomBeneficiaire: { value: '', label: 'Nom du bénéficiaire', inputType: 'text', type: 'input' },
            telephoneBeneficiaire: { value: '', label: 'Téléphone du bénéficiaire', inputType: 'text', type: 'input' },
            adresseBeneficiaire: { value: '', label: 'Adresse du bénéficiaire', inputType: 'text', type: 'input' },
            emailBeneficiaire: { value: '', label: 'Email du bénéficiaire', inputType: 'text', type: 'input' },


            provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },
            nomExpediteur: { value: '', label: 'Nom de l’expéditeur', inputType: 'text', type: 'input' },
            paysExpediteur: { value: '', label: 'Pays de l’expéditeur', inputType: 'text', type: 'input' },
            telephoneExpediteur: { value: '', label: 'Téléphone de l’expéditeur', inputType: 'text', type: 'input' },
            voieEntree: { value: '', label: 'Voie d’entrée', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Autorisation officielle d\'exportation',
        form: {
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            userLogin: { value: '', label: 'Utilisateur', inputType: 'text', type: 'input' },
            bureauDouane: { value: '', label: 'Bureau de douane', inputType: 'text', type: 'input' },
            codeTypeAutorisation: { value: '', label: 'Code type d’autorisation', inputType: 'text', type: 'input' },
            detAutorisationProduitDtos: {
                value: [
                    {
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        unite: { value: '', label: 'Unité', inputType: 'text', type: 'input' },
                        code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                        libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                        dci: { value: '', label: 'DCI', inputType: 'text', type: 'input' },
                        teneurSubstancePsychotropes: { value: '', label: 'Teneur en substances psychotropes', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            },
            
            feedBackDto: {
                value: {
                    numeroDossier: { value: '', label: 'Numéro de dossier (Feedback)', inputType: 'text', type: 'input' },
                    record: { value: '', label: 'Record', inputType: 'text', type: 'input' },
                    process: { value: '', label: 'Process', inputType: 'text', type: 'input' },
                    step: { value: '', label: 'Étape', inputType: 'text', type: 'input' },
                    order: { value: 0, label: 'Ordre', inputType: 'number', type: 'input' },
                    feedbackTaskId: { value: '', label: 'ID Tâche Feedback', inputType: 'text', type: 'input' },
                    description: { value: '', label: 'Description', inputType: 'text', type: 'input' }
                }
            },
            nifExportateur: { value: '', label: 'NIF Exportateur', inputType: 'text', type: 'input' },
            nomExportateur: { value: '', label: 'Nom Exportateur', inputType: 'text', type: 'input' },
            adresseExportateur: { value: '', label: 'Adresse Exportateur', inputType: 'text', type: 'input' },
            emailExportateur: { value: '', label: 'Email Exportateur', inputType: 'text', type: 'input' },
            telephoneExportateur: { value: '', label: 'Téléphone Exportateur', inputType: 'text', type: 'input' },
            nomBeneficiaire: { value: '', label: 'Nom du bénéficiaire', inputType: 'text', type: 'input' },
            telephoneBeneficiaire: { value: '', label: 'Téléphone du bénéficiaire', inputType: 'text', type: 'input' },
            adresseBeneficiaire: { value: '', label: 'Adresse du bénéficiaire', inputType: 'text', type: 'input' },
            emailBeneficiaire: { value: '', label: 'Email du bénéficiaire', inputType: 'text', type: 'input' },
            voieSortie: { value: '', label: 'Voie de sortie', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Autorisation spéciale d\'exportation',
        form: {
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            userLogin: { value: '', label: 'Utilisateur', inputType: 'text', type: 'input' },
            bureauDouane: { value: '', label: 'Bureau de douane', inputType: 'text', type: 'input' },
            codeTypeAutorisation: { value: '', label: 'Code type d’autorisation', inputType: 'text', type: 'input' },


            detAutorisationProduitDtos: {
                value: [
                    {
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        unite: { value: '', label: 'Unité', inputType: 'text', type: 'input' },
                        code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                        libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                        dci: { value: '', label: 'DCI', inputType: 'text', type: 'input' },
                        teneurSubstancePsychotropes: { value: '', label: 'Teneur en substances psychotropes', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            },


            


            feedBackDto: {
                value: {
                    numeroDossier: { value: '', label: 'Numéro de dossier (Feedback)', inputType: 'text', type: 'input' },
                    record: { value: '', label: 'Record', inputType: 'text', type: 'input' },
                    process: { value: '', label: 'Processus', inputType: 'text', type: 'input' },
                    step: { value: '', label: 'Étape', inputType: 'text', type: 'input' },
                    order: { value: 0, label: 'Ordre', inputType: 'number', type: 'input' },
                    feedbackTaskId: { value: '', label: 'ID Tâche Feedback', inputType: 'text', type: 'input' },
                    description: { value: '', label: 'Description', inputType: 'text', type: 'input' }
                }
            },


            nifExportateur: { value: '', label: 'NIF Exportateur', inputType: 'text', type: 'input' },
            nomDemandeur: { value: '', label: 'Nom du demandeur', inputType: 'text', type: 'input' },
            societeDemandeur: { value: '', label: 'Société du demandeur', inputType: 'text', type: 'input' },
            objetExportation: { value: '', label: 'Objet de l’exportation', inputType: 'text', type: 'input' },
            nomExportateur: { value: '', label: 'Nom Exportateur', inputType: 'text', type: 'input' },
            adresseExportateur: { value: '', label: 'Adresse Exportateur', inputType: 'text', type: 'input' },
            emailExportateur: { value: '', label: 'Email Exportateur', inputType: 'text', type: 'input' },
            telephoneExportateur: { value: '', label: 'Téléphone Exportateur', inputType: 'text', type: 'input' },


            nomBeneficiaire: { value: '', label: 'Nom du bénéficiaire', inputType: 'text', type: 'input' },
            telephoneBeneficiaire: { value: '', label: 'Téléphone du bénéficiaire', inputType: 'text', type: 'input' },
            adresseBeneficiaire: { value: '', label: 'Adresse du bénéficiaire', inputType: 'text', type: 'input' },
            emailBeneficiaire: { value: '', label: 'Email du bénéficiaire', inputType: 'text', type: 'input' },


            destination: { value: '', label: 'Destination', inputType: 'text', type: 'input' },
            nomExpediteur: { value: '', label: 'Nom de l’expéditeur', inputType: 'text', type: 'input' },
            paysExpediteur: { value: '', label: 'Pays de l’expéditeur', inputType: 'text', type: 'input' },
            telephoneExpediteur: { value: '', label: 'Téléphone de l’expéditeur', inputType: 'text', type: 'input' },
            voieSortie: { value: '', label: 'Voie de sortie', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Autorisation d\'Enlèvement de produits',
        form: {
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            userLogin: { value: '', label: 'Utilisateur', inputType: 'text', type: 'input' },
            bureauDouane: { value: '', label: 'Bureau de douane', inputType: 'text', type: 'input' },
            codeTypeAutorisation: { value: '', label: 'Code type d’autorisation', inputType: 'text', type: 'input' },
            detAutorisationProduitDtos: {
                value: [
                    {
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        unite: { value: '', label: 'Unité', inputType: 'text', type: 'input' },
                        code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                        libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                        dci: { value: '', label: 'DCI', inputType: 'text', type: 'input' },
                        teneurSubstancePsychotropes: { value: '', label: 'Teneur en substances psychotropes', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            },


            


            feedBackDto: {
                value: {
                    numeroDossier: { value: '', label: 'Numéro de dossier (Feedback)', inputType: 'text', type: 'input' },
                    record: { value: '', label: 'Record', inputType: 'text', type: 'input' },
                    process: { value: '', label: 'Processus', inputType: 'text', type: 'input' },
                    step: { value: '', label: 'Étape', inputType: 'text', type: 'input' },
                    order: { value: 0, label: 'Ordre', inputType: 'number', type: 'input' },
                    feedbackTaskId: { value: '', label: 'ID Tâche Feedback', inputType: 'text', type: 'input' },
                    description: { value: '', label: 'Description', inputType: 'text', type: 'input' }
                }
            },


            nifImportateur: { value: '', label: 'NIF Importateur', inputType: 'text', type: 'input' },
            refAutorisation: { value: '', label: 'Référence autorisation', inputType: 'text', type: 'input' },
            nomDemandeur: { value: '', label: 'Nom du demandeur', inputType: 'text', type: 'input' },
            societeDemandeur: { value: '', label: 'Société du demandeur', inputType: 'text', type: 'input' },
            objetEnlevement: { value: '', label: 'Objet de l’enlèvement', inputType: 'text', type: 'input' },


            nomImportateur: { value: '', label: 'Nom Importateur', inputType: 'text', type: 'input' },
            adresseImportateur: { value: '', label: 'Adresse Importateur', inputType: 'text', type: 'input' },
            telephoneImportateur: { value: '', label: 'Téléphone Importateur', inputType: 'text', type: 'input' },
            emailImportateur: { value: '', label: 'Email Importateur', inputType: 'text', type: 'input' },


            nomBeneficiaire: { value: '', label: 'Nom du bénéficiaire', inputType: 'text', type: 'input' },
            adresseBeneficiaire: { value: '', label: 'Adresse du bénéficiaire', inputType: 'text', type: 'input' },
            emailBeneficiaire: { value: '', label: 'Email du bénéficiaire', inputType: 'text', type: 'input' },
            telephoneBeneficiaire: { value: '', label: 'Téléphone du bénéficiaire', inputType: 'text', type: 'input' },


            provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },
            nomExpediteur: { value: '', label: 'Nom de l’expéditeur', inputType: 'text', type: 'input' },
            paysExpediteur: { value: '', label: 'Pays de l’expéditeur', inputType: 'text', type: 'input' },
            telephoneExpediteur: { value: '', label: 'Téléphone de l’expéditeur', inputType: 'text', type: 'input' },
            voieEntree: { value: '', label: 'Voie d’entrée', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: "Licence d'exploitation d'une societé de distribution",
        form: {
            nif: {
                value: 'string',
                label: 'NIF',
                inputType: 'text',
                type: 'input'
            },
            typeLicence: {
                value: 'string',
                label: 'Type Licence',
                inputType: 'text',
                type: 'input'
            }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: "Licence d'exploitation d'une societé de maintenance",
        form: {
            nif: {
                value: 'string',
                label: 'NIF',
                inputType: 'text',
                type: 'input'
            },
            typeLicence: {
                value: 'string',
                label: 'Type Licence',
                inputType: 'text',
                type: 'input'
            }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Autorisation officielle d\'importation',
        form: {
            TypeAutorisation: {
                value: 'string',
                label: 'Type Autorisation',
                inputType: 'text’',
                type: 'input'
            },
            typeSociete: {
                value: 'string',
                label: 'Type Société',
                inputType: 'text',
                type: 'input'
            },
            nif: {
                value: 'string',
                label: 'NIF',
                inputType: 'text',
                type: 'input'
            },
            productsAttentes: {
                value: [
                    {
                        typeProduct: {
                            value: 'string',
                            label: 'Type Produit',
                            inputType: 'text',
                            type: 'input'
                        },
                        quantity: {
                            value: 0.1,
                            label: 'Quantité',
                            inputType: 'number',
                            type: 'input'
                        }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Dératisation désinfection désinsectisation',
        form: {
            atp: { value: '', label: 'ATP', inputType: 'text', type: 'input' },
            nomNavire: { value: '', label: 'Nom du navire', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            imo: { value: '', label: 'IMO', inputType: 'text', type: 'input' },
            affreteur: { value: '', label: 'Affréteur', inputType: 'text', type: 'input' },
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            pavillon: { value: '', label: 'Pavillon', inputType: 'text', type: 'input' },
            nrt: { value: '', label: 'NRT', inputType: 'text', type: 'input' },
            tonnage: { value: 0, label: 'Tonnage', inputType: 'number', type: 'input' },
            cargaison: { value: 0, label: 'Cargaison', inputType: 'number', type: 'input' },
            provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },


            reinspection: { value: '', label: 'Date de réinspection', inputType: 'datetime-local', type: 'input' },
            remarque: { value: '', label: 'Remarque', inputType: 'text', type: 'input' },


            opDesinfection: { value: false, label: 'Opération de désinfection', inputType: 'checkbox', type: 'checkbox' },
            opDeratisation: { value: false, label: 'Opération de dératisation', inputType: 'checkbox', type: 'checkbox' },
            opDesinsectisation: { value: false, label: 'Opération de désinsectisation', inputType: 'checkbox', type: 'checkbox' },


            dateDeDesinfection: { value: '', label: 'Date de désinfection', inputType: 'datetime-local', type: 'input' },
            dateTraitement: { value: '', label: 'Date de traitement', inputType: 'datetime-local', type: 'input' },
            societe: { value: '', label: 'Société en charge', inputType: 'text', type: 'input' },


            pieceJointeFormaliteDtos: {
                value: [
                    {
                        idTypePieceJointe: { value: 0, label: 'ID Type PJ', inputType: 'number', type: 'input' },
                        ref: { value: '', label: 'Référence PJ', inputType: 'text', type: 'input' },
                        nomOriginePieceJointe: { value: '', label: 'Nom origine PJ', inputType: 'text', type: 'input' },
                        urlPj: { value: '', label: 'URL PJ', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Renouvellement de certificat',
        form: {
            atp: { value: '', label: 'ATP', inputType: 'text', type: 'input' },
            nomNavire: { value: '', label: 'Nom du navire', inputType: 'text', type: 'input' },
            imo: { value: '', label: 'IMO', inputType: 'text', type: 'input' },
            affreteur: { value: '', label: 'Affréteur', inputType: 'text', type: 'input' },
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            nuemroCerficatRenouveler: { value: '', label: 'Numéro du certificat à renouveler', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Inspection sanitaire au dépotage',
        form: {
            atp: { value: '', label: 'ATP', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            nomNavire: { value: '', label: 'Nom du navire', inputType: 'text', type: 'input' },
            imo: { value: '', label: 'IMO', inputType: 'text', type: 'input' },
            numeroBL: { value: '', label: 'Numéro BL', inputType: 'text', type: 'input' },
            affreteur: { value: '', label: 'Affréteur', inputType: 'text', type: 'input' },
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },


            datePrevuInspection: { value: '', label: 'Date prévue d’inspection', inputType: 'datetime-local', type: 'input' },
            dateDureeTraitement: { value: '', label: 'Date durée traitement', inputType: 'datetime-local', type: 'input' },
            dureeTraitement: { value: '', label: 'Durée du traitement', inputType: 'text', type: 'input' },


            testFer: { value: '', label: 'Test Fer', inputType: 'text', type: 'input' },
            testIode: { value: '', label: 'Test Iode', inputType: 'text', type: 'input' },
            testVitamineA: { value: '', label: 'Test Vitamine A', inputType: 'text', type: 'input' },


            pieceJointeFormaliteDtos: {
                value: [
                    {
                        idTypePieceJointe: { value: 0, label: 'ID Type PJ', inputType: 'number', type: 'input' },
                        ref: { value: '', label: 'Référence PJ', inputType: 'text', type: 'input' },
                        nomOriginePieceJointe: { value: '', label: 'Nom origine PJ', inputType: 'text', type: 'input' },
                        urlPj: { value: '', label: 'URL PJ', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Inspection sanitaire de navire',
        form: {
            atp: { value: '', label: 'ATP', inputType: 'text', type: 'input' },
            nomNavire: { value: '', label: 'Nom du navire', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            imo: { value: '', label: 'IMO', inputType: 'text', type: 'input' },
            affreteur: { value: '', label: 'Affréteur', inputType: 'text', type: 'input' },
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            destination: { value: '', label: 'Destination', inputType: 'text', type: 'input' },
            provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },
            commandant: { value: '', label: 'Commandant', inputType: 'text', type: 'input' },
            nationalite: { value: '', label: 'Nationalité', inputType: 'text', type: 'input' },


            dateDeclaration: { value: '', label: 'Date de déclaration', inputType: 'datetime-local', type: 'input' },
            datePrevuInspection: { value: '', label: 'Date prévue d’inspection', inputType: 'datetime-local', type: 'input' },
            dateDureeTraitement: { value: '', label: 'Date durée traitement', inputType: 'datetime-local', type: 'input' },


            dureeTraitement: { value: '', label: 'Durée du traitement', inputType: 'text', type: 'input' },
            testFer: { value: '', label: 'Test Fer', inputType: 'text', type: 'input' },
            testIode: { value: '', label: 'Test Iode', inputType: 'text', type: 'input' },
            testVitamineA: { value: '', label: 'Test Vitamine A', inputType: 'text', type: 'input' },


            pieceJointeFormaliteDtos: {
                value: [
                    {
                        idTypePieceJointe: { value: 0, label: 'ID Type PJ', inputType: 'number', type: 'input' },
                        ref: { value: '', label: 'Référence PJ', inputType: 'text', type: 'input' },
                        nomOriginePieceJointe: { value: '', label: 'Nom origine PJ', inputType: 'text', type: 'input' },
                        urlPj: { value: '', label: 'URL PJ', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-HAUQE',
        formality: 'Certification de produits',
        form: {
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            libelleProduit: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
            codeTypeCertification: { value: '', label: 'Code type certification', inputType: 'text', type: 'input' },
            codeTypePrestation: { value: '', label: 'Code type prestation', inputType: 'text', type: 'input' },
            codeTypeDemande: { value: '', label: 'Code type demande', inputType: 'text', type: 'input' },


            // Informations sur l'entreprise
            entreprise: {
                raisonSocial: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
                adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
                codePostal: { value: '', label: 'Code postal', inputType: 'text', type: 'input' },
                telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
                ville: { value: '', label: 'Ville', inputType: 'text', type: 'input' },
                fax: { value: '', label: 'Fax', inputType: 'text', type: 'input' },
                email: { value: '', label: 'Email', inputType: 'email', type: 'input' },


                // Représentant de l'entreprise
                nomCompletRep: { value: '', label: 'Nom complet du représentant', inputType: 'text', type: 'input' },
                adresseRep: { value: '', label: 'Adresse du représentant', inputType: 'text', type: 'input' },
                emailRep: { value: '', label: 'Email du représentant', inputType: 'email', type: 'input' },
                faxRep: { value: '', label: 'Fax du représentant', inputType: 'text', type: 'input' },
                villeRep: { value: '', label: 'Ville du représentant', inputType: 'text', type: 'input' },
                telephoneRep: { value: '', label: 'Téléphone du représentant', inputType: 'text', type: 'input' },
                fonctionRep: { value: '', label: 'Fonction du représentant', inputType: 'text', type: 'input' },


                nif: { value: '', label: 'NIF', inputType: 'text', type: 'input' },
                categorieEntreprise: { value: '', label: 'Catégorie de l\'entreprise', inputType: 'text', type: 'input' }
            }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Autorisation spéciale d\'importation des équipements médicaux',
        form: {
            TypeAutorisation: {
                value: 'string',
                label: 'Type Autorisation',
                inputType: 'text’',
                type: 'input'
            },
            typeSociete: {
                value: 'string',
                label: 'Type Société',
                inputType: 'text',
                type: 'input'
            },
            nif: {
                value: 'string',
                label: 'NIF',
                inputType: 'text',
                type: 'input'
            },
            productsAttentes: {
                value: [
                    {
                        typeProduct: {
                            value: 'string',
                            label: 'Type Produit',
                            inputType: 'text',
                            type: 'input'
                        },
                        quantity: {
                            value: 0.1,
                            label: 'Quantité',
                            inputType: 'number',
                            type: 'input'
                        }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-SANT',
        formality: 'Autorisation spéciale d\'exportation d\'équipements médicaux',
        form: {
            TypeAutorisation: {
                value: 'string',
                label: 'Type Autorisation',
                inputType: 'text’',
                type: 'input'
            },
            typeSociete: {
                value: 'string',
                label: 'Type Société',
                inputType: 'text',
                type: 'input'
            },
            nif: {
                value: 'string',
                label: 'NIF',
                inputType: 'text',
                type: 'input'
            },
            productsAttentes: {
                value: [
                    {
                        typeProduct: {
                            value: 'string',
                            label: 'Type Produit',
                            inputType: 'text',
                            type: 'input'
                        },
                        quantity: {
                            value: 0.1,
                            label: 'Quantité',
                            inputType: 'number',
                            type: 'input'
                        }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Autorisation de dépotage des denrées alimentaires d\'origine animale',
        form: {
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            nomNavire: { value: '', label: 'Nom du navire', inputType: 'text', type: 'input' },
            numeroBl: { value: '', label: 'Numéro BL', inputType: 'text', type: 'input' },
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            nomImportateur: { value: '', label: 'Nom importateur', inputType: 'text', type: 'input' },
            datearrivee: { value: '', label: 'Date d\'arrivée', inputType: 'datetime-local', type: 'input' },
            provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },


            // Détails des produits
            detAutorisationProduitDtos: {
                value: [
                    {
                        unite: { value: '', label: 'Unité', inputType: 'text', type: 'input' },
                        produit: {
                            code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                            libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                            description: { value: '', label: 'Description produit', inputType: 'text', type: 'input' },
                            refTypeProduit: { value: '', label: 'Réf. type produit', inputType: 'text', type: 'input' }
                        },
                        nombreCarton: { value: 0, label: 'Nombre de cartons', inputType: 'number', type: 'input' },
                        origine: { value: '', label: 'Origine', inputType: 'text', type: 'input' },
                        provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },
                        poidNets: { value: 0, label: 'Poids net', inputType: 'number', type: 'input' },
                        dateProduction: { value: '', label: 'Date de production', inputType: 'datetime-local', type: 'input' },
                        conteneur: { value: '', label: 'Conteneur', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            },


            // Pièces jointes
            


            // Informations sur la société
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'text', type: 'input' },
            numeroCFE: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email société', inputType: 'email', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse société', inputType: 'text', type: 'input' },
            numeroTelephone: { value: '', label: 'Numéro téléphone société', inputType: 'text', type: 'input' },
            fax: { value: '', label: 'Fax', inputType: 'text', type: 'input' },
            boitePostale: { value: '', label: 'Boîte postale', inputType: 'text', type: 'input' },
            pays: { value: '', label: 'Pays', inputType: 'text', type: 'input' },
            numeroAutorisation: { value: '', label: 'Numéro d\'autorisation', inputType: 'text', type: 'input' },


            // Responsable
            nomResponsable: { value: '', label: 'Nom responsable', inputType: 'text', type: 'input' },
            prenomsResponsable: { value: '', label: 'Prénoms responsable', inputType: 'text', type: 'input' },
            sexeResponsable: {
                value: 'MASCULIN',
                label: 'Sexe responsable',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            adresseResponsable: { value: '', label: 'Adresse responsable', inputType: 'text', type: 'input' },
            numeroTelephoneResponsable: { value: '', label: 'Numéro téléphone responsable', inputType: 'text', type: 'input' },
            emailResponsable: { value: '', label: 'Email responsable', inputType: 'email', type: 'input' },
            typePieceResponsable: { value: '', label: 'Type de pièce responsable', inputType: 'text', type: 'input' },
            numeroPieceResponsable: { value: '', label: 'Numéro de pièce responsable', inputType: 'text', type: 'input' },
            dateEmissionPieceResponsable: { value: '', label: 'Date émission pièce responsable', inputType: 'datetime-local', type: 'input' },
            dateExpirationPieceResponsable: { value: '', label: 'Date expiration pièce responsable', inputType: 'datetime-local', type: 'input' }
        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Autorisation d\'Importation de denrées d\'origine animales',
        form: {
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            nif: { value: '', label: 'NIF', inputType: 'text', type: 'input' },
            numeroAgrement: { value: '', label: 'Numéro d\'agrément', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },


            // Détails des produits
            detAutorisationProduitDtos: {
                value: [
                    {
                        unite: { value: '', label: 'Unité', inputType: 'text', type: 'input' },
                        produit: {
                            code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                            libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                            description: { value: '', label: 'Description produit', inputType: 'text', type: 'input' },
                            refTypeProduit: { value: '', label: 'Réf. type produit', inputType: 'text', type: 'input' }
                        },
                        nombreCarton: { value: 0, label: 'Nombre de cartons', inputType: 'number', type: 'input' },
                        origine: { value: '', label: 'Origine', inputType: 'text', type: 'input' },
                        provenance: { value: '', label: 'Provenance', inputType: 'text', type: 'input' },
                        poidNets: { value: 0, label: 'Poids net', inputType: 'number', type: 'input' },
                        dateProduction: { value: '', label: 'Date de production', inputType: 'datetime-local', type: 'input' },
                        conteneur: { value: '', label: 'Conteneur', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            },


            // Pièces jointes



            // Importateur
            nomSocieteImportateur: { value: '', label: 'Nom société importateur', inputType: 'text', type: 'input' },
            adresseSocieteImportateur: { value: '', label: 'Adresse société importateur', inputType: 'text', type: 'input' },
            numeroTelephoneImportateur: { value: '', label: 'Numéro téléphone importateur', inputType: 'text', type: 'input' },
            emailImportateur: { value: '', label: 'Email importateur', inputType: 'email', type: 'input' },
            paysImportateur: { value: '', label: 'Pays importateur', inputType: 'text', type: 'input' },


            // Exportateur
            nomSocieteExportateur: { value: '', label: 'Nom société exportateur', inputType: 'text', type: 'input' },
            adresseExportateur: { value: '', label: 'Adresse exportateur', inputType: 'text', type: 'input' },
            paysOrigineExportateur: { value: '', label: 'Pays d\'origine exportateur', inputType: 'text', type: 'input' },
            villeExportateur: { value: '', label: 'Ville exportateur', inputType: 'text', type: 'input' }
        }
    },
    {
        attribut: 'FORM-MRHART',
        formality: 'Certificat sanitaire pour cuirs et peaux',
        form: {
            compteClient: { value: '', label: 'Compte client', inputType: 'text', type: 'input' },
            numeroDossier: { value: '', label: 'Numéro de dossier', inputType: 'text', type: 'input' },
            demandePour: {
                value: '',
                label: 'Demande pour',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Consommation personnelle', value: 'CONSOMMATION_PERSONNELLE' },
                    { label: 'Usage commercial', value: 'USAGE_COMMERCIAL' }
                ]
            },


            // Expéditeur
            nomExpediteur: { value: '', label: 'Nom de l’expéditeur', inputType: 'text', type: 'input' },
            prenomsExpediteur: { value: '', label: 'Prénoms de l’expéditeur', inputType: 'text', type: 'input' },
            adresseExpediteur: { value: '', label: 'Adresse de l’expéditeur', inputType: 'text', type: 'input' },
            telephoneExpediteur: { value: '', label: 'Téléphone de l’expéditeur', inputType: 'text', type: 'input' },
            emailExpediteur: { value: '', label: 'Email de l’expéditeur', inputType: 'email', type: 'input' },
            paysExpediteur: { value: '', label: 'Pays de l’expéditeur', inputType: 'text', type: 'input' },


            // Destinataire
            nomDestinataire: { value: '', label: 'Nom du destinataire', inputType: 'text', type: 'input' },
            prenomsDestinataire: { value: '', label: 'Prénoms du destinataire', inputType: 'text', type: 'input' },
            adresseDestinataire: { value: '', label: 'Adresse du destinataire', inputType: 'text', type: 'input' },
            telephoneDestinataire: { value: '', label: 'Téléphone du destinataire', inputType: 'text', type: 'input' },
            emailDestinataire: { value: '', label: 'Email du destinataire', inputType: 'email', type: 'input' },
            paysDestinataire: { value: '', label: 'Pays du destinataire', inputType: 'text', type: 'input' },


            detCertificatProduitDtos: {
                value: [
                    {
                        produit: {
                            code: { value: '', label: 'Code produit', inputType: 'text', type: 'input' },
                            libelle: { value: '', label: 'Libellé produit', inputType: 'text', type: 'input' },
                            description: { value: '', label: 'Description', inputType: 'text', type: 'input' },
                            refTypeProduit: { value: '', label: 'Réf. type produit', inputType: 'text', type: 'input' }
                        },
                        traitement: { value: '', label: 'Traitement', inputType: 'text', type: 'input' },
                        poidsNet: { value: 0, label: 'Poids net', inputType: 'number', type: 'input' },
                        numeroConteneur: { value: '', label: 'Numéro conteneur', inputType: 'text', type: 'input' },
                        nombreConteneur: { value: 0, label: 'Nombre de conteneurs', inputType: 'number', type: 'input' },
                        natureEmballage: { value: '', label: 'Nature de l’emballage', inputType: 'text', type: 'input' },
                        description: { value: '', label: 'Description', inputType: 'text', type: 'input' },
                        typeProduit: { value: '', label: 'Type de produit', inputType: 'text', type: 'input' },
                        moyenTransport: { value: '', label: 'Moyen de transport', inputType: 'text', type: 'input' },
                        dateDepart: { value: '', label: 'Date de départ', inputType: 'datetime-local', type: 'input' }
                    }
                ],
                isArray: true
            },


            certificatProduitDtos: {
                value: [
                    {
                        typeProduit: { value: '', label: 'Type de produit', inputType: 'text', type: 'input' },
                        traitement: { value: '', label: 'Traitement', inputType: 'text', type: 'input' },
                        description: { value: '', label: 'Description', inputType: 'text', type: 'input' },
                        designation: { value: '', label: 'Désignation', inputType: 'text', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        nombreColis: { value: 0, label: 'Nombre de colis', inputType: 'number', type: 'input' },
                        nombreConteneur: { value: 0, label: 'Nombre de conteneurs', inputType: 'number', type: 'input' },
                        numeroConteneur: { value: '', label: 'Numéro conteneur', inputType: 'text', type: 'input' },
                        natureEmballage: { value: '', label: 'Nature de l’emballage', inputType: 'text', type: 'input' },
                        moyenTransport: { value: '', label: 'Moyen de transport', inputType: 'text', type: 'input' },
                        natureTraitement: { value: '', label: 'Nature du traitement', inputType: 'text', type: 'input' },
                        dateDepart: { value: '', label: 'Date de départ', inputType: 'datetime-local', type: 'input' },
                        poidsTotal: { value: 0, label: 'Poids total', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            },


            pieceJointeFormaliteDtos: {
                value: [
                    {
                        idTypePieceJointe: { value: 0, label: 'ID Type PJ', inputType: 'number', type: 'input' },
                        ref: { value: '', label: 'Référence PJ', inputType: 'text', type: 'input' },
                        nomOriginePieceJointe: { value: '', label: 'Nom origine PJ', inputType: 'text', type: 'input' },
                        urlPj: { value: '', label: 'URL PJ', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: "Demande d'autorisation d'exportation ou re-exportation",
        form: {
            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'date', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte Postale', inputType: 'text', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de la pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'email', type: 'input' },
            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },

            produits: {
                value: [
                    {
                        idProduitDerive: { value: '', label: 'Produit dérivé', inputType: 'number', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        longueur: { value: 0, label: 'Longueur', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: "Autorisation d'importation",
        form: {
            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'date', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte Postale', inputType: 'text', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de la pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'email', type: 'input' },
            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },

            produits: {
                value: [
                    {
                        idProduitDerive: { value: '', label: 'Produit dérivé', inputType: 'number', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        longueur: { value: 0, label: 'Longueur', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: "Demande d'agrément, exportateur , importateur et de reexportateur",
        form: {
            type: {
                value: '',
                label: 'Type de demande',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Importation', value: 'IMPORTATION' },
                    { label: 'Exportation', value: 'EXPORTATION' },
                    { label: 'Réexportation', value: 'REEXPORTATION' }
                ]
            },
            produit: { value: '', label: 'Produit', inputType: 'text', type: 'input' },
            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'date', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte Postale', inputType: 'text', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de la pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'email', type: 'input' },
            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            idPrefecture: { value: '', label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: "Demande d'autorisation de réexportation des spécimens d'espèces de faune sauvage",
        form: {
            typePermis: {
                value: '',
                label: 'Type de permis',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Importation', value: 'IMPORTATION' },
                    { label: 'Exportation', value: 'EXPORTATION' },
                    { label: 'Réexportation', value: 'REEXPORTATION' }
                ]
            },
            typeEspece: {
                value: '',
                label: 'Type d’espèce',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Faune sauvage', value: 'FAUNE_SAUVAGE' },
                    { label: 'Flore', value: 'FLORE' }
                ]
            },
            idButTransaction: { value: '', label: 'But de la transaction', inputType: 'number', type: 'input' },

            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'date', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte Postale', inputType: 'text', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de la pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'email', type: 'input' },

            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },

            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            idPrefecture: { value: '', label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },
            pays: { value: '', label: 'Pays', inputType: 'text', type: 'input' },

            especeQuantites: {
                value: [
                    {
                        idEspece: { value: '', label: 'Espèce', inputType: 'number', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        idTypeSpecimene: { value: '', label: 'Type de spécimen', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: "Demande d'autorisation d'exportation des spécimens d'espèces de faune sauvages",
        form: {
            typePermis: {
                value: '',
                label: 'Type de permis',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Importation', value: 'IMPORTATION' },
                    { label: 'Exportation', value: 'EXPORTATION' },
                    { label: 'Réexportation', value: 'REEXPORTATION' }
                ]
            },
            typeEspece: {
                value: '',
                label: 'Type d’espèce',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Faune sauvage', value: 'FAUNE_SAUVAGE' },
                    { label: 'Flore', value: 'FLORE' }
                ]
            },
            idButTransaction: { value: '', label: 'But de la transaction', inputType: 'number', type: 'input' },

            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'date', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte Postale', inputType: 'text', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de la pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'email', type: 'input' },

            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },

            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            idPrefecture: { value: '', label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },
            pays: { value: '', label: 'Pays', inputType: 'text', type: 'input' },

            especeQuantites: {
                value: [
                    {
                        idEspece: { value: '', label: 'Espèce', inputType: 'number', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        idTypeSpecimene: { value: '', label: 'Type de spécimen', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV',
        formality: "Demande d'autorisation d'exportation des objets d'art ou statuette en bois",
        form: {
            typePermis: {
                value: '',
                label: 'Type de permis',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Importation', value: 'IMPORTATION' },
                    { label: 'Exportation', value: 'EXPORTATION' },
                    { label: 'Réexportation', value: 'REEXPORTATION' }
                ]
            },
            typeEspece: {
                value: '',
                label: 'Type d’espèce',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Faune sauvage', value: 'FAUNE_SAUVAGE' },
                    { label: 'Flore', value: 'FLORE' }
                ]
            },
            idButTransaction: { value: '', label: 'But de la transaction', inputType: 'number', type: 'input' },

            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'date', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte Postale', inputType: 'text', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de la pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'email', type: 'input' },

            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },

            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            idPrefecture: { value: '', label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },
            pays: { value: '', label: 'Pays', inputType: 'text', type: 'input' },

            especeQuantites: {
                value: [
                    {
                        idEspece: { value: '', label: 'Espèce', inputType: 'number', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        idTypeSpecimene: { value: '', label: 'Type de spécimen', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV-MIN',
        formality: 'Demande d\'agrément d\'enlèvement de déchets à bord de navire',
        form: {
            typePermis: {
                value: 'IMPORTATION',
                label: 'Type de permis',
                inputType: 'text',
                type: 'input',
                disabled: true
            },
            typeEspece: {
                value: 'FAUNE_SAUVAGE',
                label: 'Type d\'espèce',
                inputType: 'text',
                type: 'input',
                disabled: true
            },
            idButTransaction: {
                value: '',
                label: 'But de la transaction',
                inputType: 'number',
                type: 'input'
            },
            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'date', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte Postale', inputType: 'text', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de la pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'email', type: 'input' },
            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            idPrefecture: { value: '', label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },
            pays: { value: '', label: 'Pays', inputType: 'text', type: 'input' },

            especeQuantites: {
                value: [
                    {
                        idEspece: { value: '', label: 'Espèce', inputType: 'number', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        idTypeSpecimene: { value: '', label: 'Type de spécimen', inputType: 'number', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV-MIN',
        formality: 'Demande d\'autorisation ou de renouvellement d\'autorisation de gestion des déchets dangereux au TOGO',
        form: {
            type: {
                value: 'IMPORTATION',
                label: 'Type',
                inputType: 'text',
                type: 'input',
                disabled: true
            },
            idPrefecture: { value: '', label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },
            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'email', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'date', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte postale', inputType: 'text', type: 'input' },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de la pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            superficie: { value: '', label: 'Superficie (m² ou ha)', inputType: 'number', type: 'input' },

            produitDechet: {
                value: [
                    {
                        idProduit: { value: '', label: 'Produit', inputType: 'number', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        lieuOperation: { value: '', label: 'Lieu d’opération', inputType: 'text', type: 'input' },
                        lieuCollecte: { value: '', label: 'Lieu de collecte', inputType: 'text', type: 'input' },
                        motifCollecte: { value: '', label: 'Motif de la collecte', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    },
    {
        attribut: 'FORM-ENV-MIN',
        formality: 'Demande d\'autorisation d\'exportation/importation des déchets dangereux (Huiles usagées et chiffons souillés d\'huile usées , battéries usées , etc ...)',
        form: {
            type: {
                value: 'IMPORTATION',
                label: 'Type',
                inputType: 'text',
                type: 'input',
                disabled: true
            },
            idPrefecture: { value: '', label: 'Préfecture', inputType: 'number', type: 'input' },
            idCommune: { value: '', label: 'Commune', inputType: 'number', type: 'input' },
            nom: { value: '', label: 'Nom', inputType: 'text', type: 'input' },
            prenom: { value: '', label: 'Prénom', inputType: 'text', type: 'input' },
            telephone: { value: '', label: 'Téléphone', inputType: 'text', type: 'input' },
            email: { value: '', label: 'Email', inputType: 'email', type: 'input' },
            sexe: {
                value: '',
                label: 'Sexe',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Masculin', value: 'MASCULIN' },
                    { label: 'Féminin', value: 'FEMININ' }
                ]
            },
            dateNaissance: { value: '', label: 'Date de naissance', inputType: 'date', type: 'input' },
            localite: { value: '', label: 'Localité', inputType: 'text', type: 'input' },
            village: { value: '', label: 'Village', inputType: 'text', type: 'input' },
            canton: { value: '', label: 'Canton', inputType: 'text', type: 'input' },
            adresse: { value: '', label: 'Adresse', inputType: 'text', type: 'input' },
            bp: { value: '', label: 'Boîte postale', inputType: 'text', type: 'input' },
            profession: { value: '', label: 'Profession', inputType: 'text', type: 'input' },
            typeDemandeur: {
                value: '',
                label: 'Type de demandeur',
                inputType: 'select',
                type: 'select',
                options: [
                    { label: 'Personne physique', value: 'PERSONNE_PHISIQUE' },
                    { label: 'Personne morale', value: 'PERSONNE_MORALE' }
                ]
            },
            raisonSociale: { value: '', label: 'Raison sociale', inputType: 'text', type: 'input' },
            numeroCfe: { value: '', label: 'Numéro CFE', inputType: 'text', type: 'input' },
            adresseSociete: { value: '', label: 'Adresse de la société', inputType: 'text', type: 'input' },
            formeJuridique: { value: '', label: 'Forme juridique', inputType: 'number', type: 'input' },
            typePieceIdentite: { value: '', label: 'Type de pièce d’identité', inputType: 'number', type: 'input' },
            numeroPiece: { value: '', label: 'Numéro de la pièce', inputType: 'text', type: 'input' },
            dateEtablissement: { value: '', label: 'Date d’établissement', inputType: 'date', type: 'input' },
            dateExpiration: { value: '', label: 'Date d’expiration', inputType: 'date', type: 'input' },
            superficie: { value: '', label: 'Superficie (m² ou ha)', inputType: 'number', type: 'input' },

            produitDechet: {
                value: [
                    {
                        idProduit: { value: '', label: 'Produit', inputType: 'number', type: 'input' },
                        quantite: { value: 0, label: 'Quantité', inputType: 'number', type: 'input' },
                        lieuOperation: { value: '', label: 'Lieu d’opération', inputType: 'text', type: 'input' },
                        lieuCollecte: { value: '', label: 'Lieu de collecte', inputType: 'text', type: 'input' },
                        motifCollecte: { value: '', label: 'Motif de la collecte', inputType: 'text', type: 'input' }
                    }
                ],
                isArray: true
            }
        }
    }


];

