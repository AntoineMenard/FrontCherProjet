import { Component, OnInit } from '@angular/core';
import { Particulier } from '../model/Particulier';
import { Entreprise } from '../model/Entreprise';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  Particulier: Particulier = new Particulier();
  Entreprise: Entreprise = new Entreprise();

  constructor() { }

  ngOnInit(): void {
  }

  Connexion() {
      localStorage.setItem(this.Particulier.mail, this.Particulier.mdp);
      localStorage.setItem(this.Entreprise.mail, this.Entreprise.mdp);
      return true;
    }
  }

