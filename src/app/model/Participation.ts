import { Entreprise } from './Entreprise';
import { Utilisateur } from './Utilisateur';
import { Projet } from './projet';
import { Particulier } from './Particulier';

export class Participation {
    idParticipation: number;
    entreprise: Entreprise;
    particulier: Particulier;
    projet: Projet;

    constructor() {

    }
}