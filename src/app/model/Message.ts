import { Particulier } from './Particulier';
import { Entreprise } from './Entreprise';
import { Projet } from './projet';

export class Message {
    id: number;
    contenu: string;
    date: Date;
    auteurE: Entreprise;
    destinataireE: Entreprise;
    destinataireP: Particulier;
    auteurP: Particulier;
    projet: Projet;
    constructor() {

    }
}