import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Particulier } from '../model/Particulier';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from '../model/Entreprise';
import { CherserviceService } from '../cherservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { InscriptionconnexionComponent } from '../inscriptionconnexion/inscriptionconnexion.component';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  particulier = false;
  entreprise = false;
  verifmailpart;
  verifmailentreprise;
  mailincorrect = false;



  partic: Particulier = new Particulier();
  entrep: Entreprise = new Entreprise();
  constructor(public myService: CherserviceService,
              private http: HttpClient,
              private router: Router,
              public dialogRef: MatDialogRef<InscriptionconnexionComponent>,
  ) { }

  ngOnInit(): void {
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
    this.http.post(this.myService.lienHttp + 'particulier', this.partic)
      .subscribe(data => {
        this.verifmailpart = data;
        if (!this.verifmailpart) {
          this.mailincorrect = true;
        } else {
          this.dialogRef.close();

        }


      }, err => {
        console.log(err);
      });
  }
  addEntreprise() {
    this.http.post(this.myService.lienHttp + 'entreprise', this.entrep)
      .subscribe(data => {
        this.verifmailentreprise = data;
        if (!this.verifmailentreprise) {
          this.mailincorrect = true;
        } else {
          this.dialogRef.close();

        }
      }, err => {
        console.log(err);
      });
  }


}
