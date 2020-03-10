import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Projet } from '../model/projet';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modif-projet-entreprise',
  templateUrl: './modif-projet-entreprise.component.html',
  styleUrls: ['./modif-projet-entreprise.component.css']
})
export class ModifProjetEntrepriseComponent implements OnInit {
  
  idProjet = sessionStorage.getItem('modifProjet');
  projet;
  projetmodif: Projet = new Projet();
  nomProjet;
  descriptifProjet;
  dateDebutProjet;
  dateFinProjet;
  nbrParticipantsProjet;
  interessementProjet;

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    public dialogRefr: MatDialogRef<ModifProjetEntrepriseComponent>,

  ) { }

  ngOnInit(): void {
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

  modifProjet(){
    this.http.put(this.myService.lienHttp + 'projet/' + this.idProjet, this.projetmodif)
    .subscribe(data => {
      this.dialogRefr.close();
      window.location.reload();


    }, err => {
      console.log(err);
    });
  }





}
