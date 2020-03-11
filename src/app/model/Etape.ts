import { Projet } from './projet';

export class Etape {
    id: number;
    dateDebut: Date;
    dateFin: Date;
    nom: string;
    description: string;
    projet: Projet;
    constructor( nom: string, dateDebut: Date, dateFin: Date, projet: Projet) {
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.nom = nom;
        this.projet = projet;

    }

}
