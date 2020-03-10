import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Entreprise } from '../model/Entreprise';
import { Domaine } from '../model/domaine';
import { DomaineEntreprise } from '../model/DomaineEntreprise';



@Component({
  selector: 'app-modif-profil-entreprise',
  templateUrl: './modif-profil-entreprise.component.html',
  styleUrls: ['./modif-profil-entreprise.component.css']
})
export class ModifProfilEntrepriseComponent implements OnInit {
  domaines;
  Domaine: Domaine = new Domaine();
  DomaineEnt: DomaineEntreprise = new DomaineEntreprise();

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    public dialogRefr: MatDialogRef<ModifProfilEntrepriseComponent>,
  ) { }

  entreprise;
  nomentreprise;
  mailentreprise;
  descentreprise;
  domaineentreprise;
  adresseentreprise;
  CPentreprise;
  taillentreprise;
  dateCreationentreprise;
  siteWebentreprise;
  mdpentreprise;
  telentreprise;
  id = sessionStorage.getItem('idUtilisateur');
  entrepmodif: Entreprise = new Entreprise();




  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + "entreprise/" + this.id, this.entreprise)
      .subscribe(data => {
        this.entreprise = data;
        this.nomentreprise = this.entreprise.nom;
        this.descentreprise = this.entreprise.description;
        this.mailentreprise = this.entreprise.mail;
        this.domaineentreprise = this.domaineentreprise;
        this.adresseentreprise = this.entreprise.adresse;
        this.CPentreprise = this.entreprise.codePostal;
        this.taillentreprise = this.entreprise.tailleEntreprise;
        this.dateCreationentreprise = this.entreprise.dateCreation;
        this.siteWebentreprise = this.entreprise.siteWeb;
        this.telentreprise = this.entreprise.telephone;
        this.mdpentreprise = this.entreprise.mdp;

        this.entrepmodif = this.entreprise;

      }, err => {
        console.log(err);
      });
  }

  modifEntreprise() {
    this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
      .subscribe(data => {
        this.DomaineEnt.domaine = data;
        console.log(this.DomaineEnt.domaine);
      }, err => { console.log(err); });

    this.http.put<Entreprise>(this.myService.lienHttp + 'entreprise/' + this.id, this.entrepmodif)
      .subscribe(data => { this.DomaineEnt.entreprise = data; }, err => {
        console.log(err);
      });
    console.log(this.DomaineEnt);
    this.http.put(this.myService.lienHttp + 'entrepriseDomaine/' + this.entrepmodif.idUtilisateur, this.DomaineEnt)
      // rempli le post avec null null alors que le console log le montre bien rempli et qu'aucune erreur n'est indiquée où que ce soit
      .subscribe(data => {
      }, err => { console.log(err); });

    // this.dialogRefr.close();
    // window.location.reload();
  }




}
