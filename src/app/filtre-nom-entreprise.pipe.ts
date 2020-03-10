import { PipeTransform, Pipe } from '@angular/core';
import { Projet } from './model/Projet';
@Pipe({
    name: 'filtreNomEntreprise',
})
export class FiltreNomEntreprise implements PipeTransform {
    transform(projets: Projet[], searchTerm: string): Projet[] {
        if (!projets || !searchTerm) {
            console.log(searchTerm);
            return projets;
        } else {
            console.log(searchTerm);
            return projets.filter(projet =>
                projet.entreprise.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        }

    }
}
