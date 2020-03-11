import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjetPropose } from '../model/ProjetPropose';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { Domaine } from '../model/domaine';
import { DomaineProjetPropose } from '../model/DomaineProjetPropose';

@Component({
  selector: 'app-proposer-projet-utilisateur',
  templateUrl: './proposer-projet-utilisateur.component.html',
  styleUrls: ['./proposer-projet-utilisateur.component.css']
})
export class ProposerProjetUtilisateurComponent implements OnInit {

  domaines;
  visible = false;
  p;
  ProjetPropose: ProjetPropose = new ProjetPropose();
  entreprise;
  Domaine: Domaine = new Domaine();
  DomainePro: DomaineProjetPropose = new DomaineProjetPropose();

  constructor(
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
    private myService: CherserviceService) { }

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

    this.ProjetPropose.entreprise = this.entreprise;
    this.http.post< ProjetPropose >(this.myService.lienHttp + 'ProjetPropose', this.ProjetPropose).subscribe(data => {
    this.DomainePro.projetpropose = data;
    console.log(data);
    this.http.post(this.myService.lienHttp + 'domaineProjet', this.DomainePro)
    // rempli le post avec null null alors que le console log le montre bien rempli et qu'aucune erreur n'est indiquée où que ce soit
        .subscribe(data => {
        }, err => { console.log(err); });
    this.router.navigate(['/projets']);
    }, err => { console.log(err);
    });
}}
