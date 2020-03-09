import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-profil-particulier',
  templateUrl: './modif-profil-particulier.component.html',
  styleUrls: ['./modif-profil-particulier.component.css']
})
export class ModifProfilParticulierComponent implements OnInit {

  particulier;
  nom;
  prenom;
  bio;
  mail;
  mdp;
  dateNaissance;
  partmodif;


  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    public dialogRefr: MatDialogRef<ModifProfilParticulierComponent>) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'particulier/' + sessionStorage.getItem('idUtilisateur'),)
    .subscribe(data => {
      this.particulier = data;
      this.nom = this.particulier.nom;
      this.prenom = this.particulier.adresse;
      this.bio = this.particulier.bio;
      this.mail = this.particulier.mail;
      this.mdp = this.particulier.mdp;
      this.dateNaissance = this.particulier.dateNaissance;

      this.partmodif = this.particulier;

    }, err => {
      console.log(err);
    });

  }

  modifParticulier() {
    this.http.put(this.myService.lienHttp + 'particulier/' + sessionStorage.getItem('idUtilisateur'), this.partmodif)
      .subscribe(data => {
        this.dialogRefr.close();
        window.location.reload();


      }, err => {
        console.log(err);
      });
  }

}
