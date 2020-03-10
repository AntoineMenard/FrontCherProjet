import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { DemandeParticipation } from '../model/DemandeParticipation';
import { Particulier } from '../model/Particulier';
import { Entreprise } from '../model/Entreprise';
import { Projet } from '../model/projet';


@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.component.html',
  styleUrls: ['./recherche-projet.component.css']
})
export class RechercheProjetComponent implements OnInit {


  projet;
  filtreNom: string;
  filtreNomEntreprise: string;
  particulier;
  triParDate;
  demandeParti: DemandeParticipation = new DemandeParticipation();


  constructor(
    public myService: CherserviceService,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'projetPropose').subscribe(data => {
      this.projet = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'particulier/' + sessionStorage.getItem('idUtilisateur')).subscribe(data => {
      this.particulier = data;
    }, err => {
      console.log(err);
    });

  }
  engagement(p) {

    this.demandeParti.particulier = this.particulier;
    this.demandeParti.projet = p;

    this.http.post(this.myService.lienHttp + 'demandeParticipation', this.demandeParti).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }



}
