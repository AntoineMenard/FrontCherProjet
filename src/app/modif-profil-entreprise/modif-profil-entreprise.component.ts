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
  Domaine1: Domaine = new Domaine();
  Domaine2: Domaine = new Domaine();
  Domaine3: Domaine = new Domaine();
  Domaine4: Domaine = new Domaine();
  DomaineEnt: DomaineEntreprise = new DomaineEntreprise();

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    public dialogRefr: MatDialogRef<ModifProfilEntrepriseComponent>,
  ) { }
  domainesEntreprise;
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
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = true;



  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'domaineEntreprise/' + this.id).subscribe(data => {
      this.domainesEntreprise = data;
      this.domaineentreprise.array.forEach(element => {

      });
    }, err => {
      console.log(err);
    });


    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'entreprise/' + this.id, this.entreprise)
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
        this.http.put<Entreprise>(this.myService.lienHttp + 'entreprise/' + this.id, this.entrepmodif)
          .subscribe(data => {
            this.DomaineEnt.entreprise = data;
            console.log(this.DomaineEnt);
            this.gérerlessecteurs();
            this.dialogRefr.close();
            window.location.reload();
          }, err => {
            console.log(err);
          });
      }, err => { console.log(err); });

  }

  rendreNextVisible() {
    if (!this.visible1) { this.visible1 = true; } else {
      if (!this.visible2) { this.visible2 = true; } else {
        if (!this.visible3) { this.visible3 = true; } else {
          if (!this.visible4) { this.visible4 = true;
                                this.visible5 = false; } else {} }}}}


  gérerlessecteurs() {
    this.http.put(this.myService.lienHttp + 'entrepriseDomaine/' + this.entrepmodif.idUtilisateur, this.DomaineEnt)
              .subscribe(data => {
              }, err => { console.log(err); });

  }
}

