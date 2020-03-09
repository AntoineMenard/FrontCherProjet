import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Entreprise } from '../model/Entreprise';



@Component({
  selector: 'app-modif-profil-entreprise',
  templateUrl: './modif-profil-entreprise.component.html',
  styleUrls: ['./modif-profil-entreprise.component.css']
})
export class ModifProfilEntrepriseComponent implements OnInit {

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



    
    this.http.put(this.myService.lienHttp + 'entreprise/' + this.id, this.entrepmodif)
      .subscribe(data => {
        this.dialogRefr.close();
        window.location.reload();


      }, err => {
        console.log(err);
      });
  }




}
