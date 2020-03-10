import { PipeTransform, Pipe } from '@angular/core';
import { Projet } from './model/projet';
@Pipe({
    name: 'filtreNomProjet',
})
export class FiltreNomProjet implements PipeTransform {
    transform(projets: Projet[], searchTerm: string): Projet[] {
        if (!projets || !searchTerm) {
            console.log(searchTerm);
            return projets;
        } else {
            console.log(searchTerm);
            return projets.filter(projet =>
                projet.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

        }

    }
}
