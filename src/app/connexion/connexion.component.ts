import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Utilisateur } from '../model/Utilisateur';
import { Router } from '@angular/router';
=======
import { Particulier } from '../model/Particulier';
import { Entreprise } from '../model/Entreprise';
>>>>>>> f977f152725eeaa6e13d8606150e45490146eea8

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  Particulier: Particulier = new Particulier();
  Entreprise: Entreprise = new Entreprise();

  constructor(private router: Router) { }
  particulier = false;
  entreprise = false;

  ngOnInit(): void {
  }

  Connexion() {
      localStorage.setItem(this.Particulier.mail, this.Particulier.mdp);
      localStorage.setItem(this.Entreprise.mail, this.Entreprise.mdp);
      return true;
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

