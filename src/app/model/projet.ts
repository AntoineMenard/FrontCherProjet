import { Entreprise } from './Entreprise';

export class Projet {
    idProjet: number;
    nom: string;
    descriptif: string;
    dateDebut: Date;
    dateFin: Date;
    nbrParticipants: number;
    nbrParticipantsReel: number;
    entreprise: Entreprise;
    interessement: string;
    statut: number;

    constructor() {

    }
}
