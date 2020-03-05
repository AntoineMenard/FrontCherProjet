import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  
  Utilisateur: Utilisateur = new Utilisateur();

  constructor(private router: Router) { }
  particulier = false;
  entreprise = false;

  ngOnInit(): void {
  }

  Connexion() {
      localStorage.setItem(this.Utilisateur.mail, this.Utilisateur.mdp);
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

