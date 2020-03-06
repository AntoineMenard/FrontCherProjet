import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Particulier } from '../model/Particulier';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from '../model/Entreprise';


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
  mailcorrect = false;



  partic: Particulier = new Particulier();
  entrep: Entreprise = new Entreprise();
  constructor(private http: HttpClient, private router: Router) { }

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

  GoToHome() {
    this.router.navigate(['/home-page']);
  }


  addParticulier() {
    this.http.post('http://localhost:8088/particulier', this.partic)
    .subscribe(data => {
      this.verifmailpart = data;
      if (!this.verifmailpart) {
        this.mailcorrect = true;
      }
      

    }, err => {
      console.log(err);
    });
  }
  addEntreprise() {
    this.http.post('http://localhost:8088/entreprise', this.entrep)
    .subscribe(data => {
      this.verifmailentreprise = data;
      if (!this.verifmailentreprise) {
        this.mailcorrect = true;
      }
    }, err => {
      console.log(err);
    });
  }


}
