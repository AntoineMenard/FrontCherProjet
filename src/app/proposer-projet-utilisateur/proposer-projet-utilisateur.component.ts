import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjetPropose } from '../model/ProjetPropose';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { Domaine } from '../model/domaine';
import { DomaineProjetPropose } from '../model/DomaineProjetPropose';
import { Entreprise } from '../model/Entreprise';

@Component({
  selector: 'app-proposer-projet-utilisateur',
  templateUrl: './proposer-projet-utilisateur.component.html',
  styleUrls: ['./proposer-projet-utilisateur.component.css']
})
export class ProposerProjetUtilisateurComponent implements OnInit {

  domaines;
  visible = false;
  p;
  projetpropose: ProjetPropose = new ProjetPropose();
  entreprise;
  particulier;
  Domaine: Domaine = new Domaine();
  Domaine1: Domaine = new Domaine();
  Domaine2: Domaine = new Domaine();
  Domaine3: Domaine = new Domaine();
  Domaine4: Domaine = new Domaine();
  Entre: Entreprise = new Entreprise();
  DomainePro: DomaineProjetPropose = new DomaineProjetPropose();

  constructor(
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
    public myService: CherserviceService) { }

    visible1 = false;
    visible2 = false;
    visible3 = false;
    visible4 = false;
    visible5 = true;

  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'entreprise/').subscribe(data => {
      this.entreprise = data;
      //console.log(this.entreprise);
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'particulier/' + sessionStorage.getItem('idUtilisateur')).subscribe(data => {
      this.particulier = data;
      //console.log(this.entreprise);
    }, err => {
      console.log(err);
    });

  }
  msgVisible() {
    if (this.visible === false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  SoumettreProjet() {

    this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
    .subscribe(data => {
      //console.log(data);
    this.DomainePro.domaine = data;    
    this.http.get<Entreprise>(this.myService.lienHttp + 'entreprise/nom/' + this.Entre.nom)
    .subscribe(data => {
      //console.log(data);
    this.entreprise = data;
    this.projetpropose.entreprise = this.entreprise;
    this.projetpropose.particulier = this.particulier; 
    this.http.post< ProjetPropose >(this.myService.lienHttp + 'ProjetPropose', this.projetpropose).subscribe(data => {
    this.DomainePro.projetpropose = data;
    //console.log(this.DomainePro);
    this.http.post(this.myService.lienHttp + 'domaineProjet', this.DomainePro)
    // rempli le post avec null null alors que le console log le montre bien rempli et qu'aucune erreur n'est indiquée où que ce soit
        .subscribe(data => {
          //console.log(data); 
        }
        , err => {console.log(err); });

}
        , err => {console.log(err); });

        }, err => { console.log(err); });
    this.router.navigate(['/recherche-projet']);
    }, err => { console.log(err);
    });
}

rendreNextVisible() {
  if (!this.visible1) { this.visible1 = true; } else {
    if (!this.visible2) { this.visible2 = true; } else {
      if (!this.visible3) { this.visible3 = true; } else {
        if (!this.visible4) {
          this.visible4 = true;
          this.visible5 = false;
        } else { }
      }
    }
  }
}

gérerlessecteurs(){
  
}

}
