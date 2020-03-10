import { PipeTransform, Pipe } from '@angular/core';
import { Projet } from './model/projet';
@Pipe({
    name: 'triParDate',
})
export class TriParDate implements PipeTransform {
    transform(projets: Projet[], searchTerm: string): Projet[] {
        if (searchTerm) {
            return projets.sort((a, b) => a.dateDebut.getTime() - b.dateDebut.getTime());

        } else {
            return projets;

        }

    }
}
