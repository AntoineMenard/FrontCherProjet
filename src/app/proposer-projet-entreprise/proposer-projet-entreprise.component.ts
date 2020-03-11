import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../model/projet';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { Domaine } from '../model/domaine';
import { DomaineProjet } from '../model/DomaineProjet';

@Component({
  selector: 'app-proposer-projet-entreprise',
  templateUrl: './proposer-projet-entreprise.component.html',
  styleUrls: ['./proposer-projet-entreprise.component.css']
})
export class ProposerProjetEntrepriseComponent implements OnInit {
  domaines;
  visible = false;
  p;
  Projet: Projet = new Projet();
  entreprise;
  Domaine: Domaine = new Domaine();
  DomainePro: DomaineProjet = new DomaineProjet();

  constructor(
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
    public myService: CherserviceService) { }

  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'entreprise/' + sessionStorage.getItem('idUtilisateur')).subscribe(data => {
      this.entreprise = data;
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
    this.DomainePro.domaine = data; }, err => {console.log(err); });

    this.Projet.entreprise = this.entreprise;
    this.http.post< Projet >(this.myService.lienHttp + 'projet', this.Projet).subscribe(data => {
    this.DomainePro.projet = data;
    console.log(data);
    this.http.post(this.myService.lienHttp + 'domaineProjet', this.DomainePro)
    // rempli le post avec null null alors que le console log le montre bien rempli et qu'aucune erreur n'est indiquée où que ce soit
        .subscribe(data => {
        }, err => { console.log(err); });
    this.router.navigate(['/projets']);
    }, err => { console.log(err);
    });
    
}}
