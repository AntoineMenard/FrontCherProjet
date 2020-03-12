import { Projet } from './projet';
import { Particulier } from './Particulier';

export class PartageFichier {
    id: number;
    commentaire: string;
    fichier: any;
    projet: Projet;
    particulier: Particulier;

}