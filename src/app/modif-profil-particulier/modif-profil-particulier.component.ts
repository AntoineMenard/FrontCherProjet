import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Domaine } from '../model/domaine';

@Component({
  selector: 'app-modif-profil-particulier',
  templateUrl: './modif-profil-particulier.component.html',
  styleUrls: ['./modif-profil-particulier.component.css']
})
export class ModifProfilParticulierComponent implements OnInit {

  domaines;
  Domaine: Domaine = new Domaine();
  particulier;
  nom;
  prenom;
  bio;
  mail;
  mdp;
  dateNaissance;
  partmodif;
  photo: any;
  img: any = null;

  selectedFile: File = null;


  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    public dialogRefr: MatDialogRef<ModifProfilParticulierComponent>) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'particulier/' + sessionStorage.getItem('idUtilisateur'),)
    .subscribe(data => {
      this.particulier = data;
      this.nom = this.particulier.nom;
      this.prenom = this.particulier.adresse;
      this.bio = this.particulier.bio;
      this.mail = this.particulier.mail;
      this.mdp = this.particulier.mdp;
      this.dateNaissance = this.particulier.dateNaissance;
      this.photo = this.particulier.photo;

      this.partmodif = this.particulier;

    }, err => {
      console.log(err);
    });

  }

  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event2) => {
      this.img = reader.result;

      if (this.img == null){
        this.partmodif.photo = this.photo;
      } else {
        this.partmodif.photo = window.btoa(this.img);
      }

    };

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
