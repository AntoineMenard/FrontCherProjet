import { PipeTransform, Pipe } from '@angular/core';
import { Entreprise } from './model/entreprise';
@Pipe({
    name: 'FiltreEntrepriseParNom',
})
export class FiltreEntrepriseParNom implements PipeTransform {
    transform(entreprises: Entreprise[], searchTerm: string): Entreprise[] {
        if (!entreprises || !searchTerm) {
            return entreprises;
        } else {
            console.log(searchTerm);
            return entreprises.filter(entreprise =>
                entreprise.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

        }
    }
}
