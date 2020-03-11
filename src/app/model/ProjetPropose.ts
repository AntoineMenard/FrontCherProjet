import { Entreprise } from './Entreprise';
import { Particulier } from './Particulier';

export class ProjetPropose {
    idProjet: number;
    nom: string;
    descriptif: string;
    dateDebut: Date;
    dateFin: Date;
    nbrParticipants: number;
    entreprise: Entreprise;
    particulier: Particulier;
    commentaire: string;
    statut: number;

    constructor() {

    }
}