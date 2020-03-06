import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Particulier } from '../model/Particulier';
import { Entreprise } from '../model/Entreprise';
import { HttpClient } from '@angular/common/http';
import { CherserviceService } from '../cherservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { InscriptionconnexionComponent } from '../inscriptionconnexion/inscriptionconnexion.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


  p;
  e;
  Particulier: Particulier = new Particulier();
  Entreprise: Entreprise = new Entreprise();
  particulier = false;
  entreprise = false;
  visible = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    public dialogRef: MatDialogRef<InscriptionconnexionComponent>,
    public myService: CherserviceService) { }

  ngOnInit(): void {
  }

  msgVisible() {
    if (this.visible === false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  connexionParticulier() {
    this.http.post('http://localhost:8088/particuliers', this.Particulier).subscribe(data => {
      this.p = data;
      if (this.p.mail != null) {
        sessionStorage.setItem('idUtilisateur', this.p.idUtilisateur);
        sessionStorage.setItem('statut', this.p.statut);
        this.myService.visibleNavParticulier = true;


        this.router.navigate(['/recherche-projet']);

        this.dialogRef.close();


      } else { this.msgVisible();}
    }, err => { console.log(err);

    });

    }

    connexionEntreprise() {
      this.http.post('http://localhost:8088/entreprises', this.Entreprise).subscribe(data => {
        this.e = data;
        if (this.e.mail != null) {
          sessionStorage.setItem('idUtilisateur', this.e.idUtilisateur);
          sessionStorage.setItem('statut', this.e.statut);
          this.myService.visibleNavEntreprise = true;
          console.log(this.myService.visibleNavEntreprise);
          this.router.navigate(['/projets']);
          this.dialogRef.close();
       } else { this.msgVisible();}
      }, err => { console.log(err);
      });
      }

    visibleParticulier() {
      if (this.particulier) {
        this.particulier = false;
      } else {
        this.particulier = true;
        this.entreprise = true;
        this.visibleEntreprise();
      }
    }
    visibleEntreprise() {
      if (this.entreprise) {
        this.entreprise = false;
      } else {
        this.entreprise = true;
        this.particulier = true;
        this.visibleParticulier();
      }
    }
  }

