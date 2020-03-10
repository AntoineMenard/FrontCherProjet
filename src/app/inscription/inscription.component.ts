import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Particulier } from '../model/Particulier';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from '../model/Entreprise';
import { CherserviceService } from '../cherservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { InscriptionconnexionComponent } from '../inscriptionconnexion/inscriptionconnexion.component';
import { DomaineEntreprise } from '../model/DomaineEntreprise';
import { DomaineParticulier } from '../model/DomaineParticulier';
import { Domaine } from '../model/domaine';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  domaines;
  particulier = false;
  entreprise = false;
  verifmailpart;
  verifmailentreprise;
  mailincorrect = false;

  dom;
  Domaine: Domaine = new Domaine();
  DomaineEnt: DomaineEntreprise = new DomaineEntreprise();
  DomainePar: DomaineParticulier = new DomaineParticulier();
  partic: Particulier = new Particulier();
  entrep: Entreprise = new Entreprise();
  constructor(public myService: CherserviceService,
              private http: HttpClient,
              private router: Router,
              public dialogRef: MatDialogRef<InscriptionconnexionComponent>,
  ) { }

  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
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


  addParticulier() {
    this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
      .subscribe(data => {
        this.DomainePar.domaine = data;
      }, err => {
        console.log(err);
      });

    this.partic.statut = 1;

    this.http.post<Particulier>(this.myService.lienHttp + 'particulier', this.partic)
      .subscribe(data => {
        this.DomainePar.particulier = data;
        if (!data.mail) {
          this.mailincorrect = true;
        } else {
          this.dialogRef.close();
          this.http.post(this.myService.lienHttp + 'domaineParticulier', this.DomainePar)
            .subscribe(data => {
            }, err => {
              console.log(err);
            });
        }


      }, err => {
        console.log(err);
      });
  }
  addEntreprise() {
    this.http.get(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
      .subscribe(data => {
        this.dom = data;
        this.DomaineEnt.domaine = this.dom;

      }, err => {
        console.log(err);
      });
    this.entrep.statut = 0;

    this.http.post<Entreprise>(this.myService.lienHttp + 'entreprise', this.entrep)
      .subscribe(data => {
        this.dom = data;
        if (!data.mail) {
          this.mailincorrect = true;
        } else {
          this.DomaineEnt.entreprise = this.dom;
          this.dialogRef.close();
          this.http.post(this.myService.lienHttp + 'domaineEntreprise', this.DomaineEnt)
            .subscribe(data => {
            }, err => {
              console.log(err);
            });

        }
      }, err => {
        console.log(err);
      });
  }


}
