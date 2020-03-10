import { PipeTransform, Pipe } from '@angular/core';
import { Projet } from './model/projet';
@Pipe({
    name: 'triParDate',
})
export class TriParDate implements PipeTransform {
    transform(projets: Projet[], searchTerm: string): Projet[] {
        if (searchTerm) {
            console.log("ok");
            projets.sort((a, b) => a.dateDebut.valueOf() - b.dateDebut.valueOf());
            console.log(projets[0].dateDebut.getDay() - projets[0].dateDebut.getDay());
            return(projets);
        } else {
            return projets;
        }
    }
}
