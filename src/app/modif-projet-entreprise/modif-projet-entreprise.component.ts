import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Projet } from '../model/projet';
import { MatDialogRef } from '@angular/material/dialog';
import { Domaine } from '../model/domaine';
import { DomaineProjet } from '../model/DomaineProjet';


@Component({
  selector: 'app-modif-projet-entreprise',
  templateUrl: './modif-projet-entreprise.component.html',
  styleUrls: ['./modif-projet-entreprise.component.css']
})
export class ModifProjetEntrepriseComponent implements OnInit {
  domaines;
  idProjet = sessionStorage.getItem('modifProjet');
  projet;
  projetmodif: Projet = new Projet();
  nomProjet;
  descriptifProjet;
  dateDebutProjet;
  dateFinProjet;
  nbrParticipantsProjet;
  interessementProjet;
  Domaine: Domaine = new Domaine();
  DomainePro: DomaineProjet = new DomaineProjet();

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    public dialogRefr: MatDialogRef<ModifProjetEntrepriseComponent>,

  ) { }

  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + "projet/" + this.idProjet)
      .subscribe(data => {
        this.projet = data;
        this.nomProjet = this.projet.nom;
        this.descriptifProjet = this.projet.descriptif;
        this.dateDebutProjet = this.projet.dateDebut;
        this.dateFinProjet = this.projet.dateFin;
        this.nbrParticipantsProjet = this.projet.nbrParticipants;
        this.interessementProjet = this.projet.interessement;
        this.projetmodif = this.projet;
      }, err => {
        console.log(err);
      });

  }

  modifProjet() {

    this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
      .subscribe(data => {
        this.DomainePro.domaine = data;
        console.log(this.DomainePro.domaine);

        this.http.put<Projet>(this.myService.lienHttp + 'projet/' + this.idProjet, this.projetmodif)
          .subscribe(data => {
            this.DomainePro.projet = data;

            console.log(this.DomainePro);
            console.log(this.projetmodif.idProjet);
            this.http.put(this.myService.lienHttp + 'projetDomaine/' + this.projetmodif.idProjet, this.DomainePro)

            // rempli le post avec null null alors que le console log le montre bien rempli et qu'aucune erreur n'est indiquée où que ce soit
              .subscribe(data => {

              }, err => { console.log(err); });

             this.dialogRefr.close();
             window.location.reload();

          }, err => { console.log(err); });

      }, err => { console.log(err); });




  }





}
