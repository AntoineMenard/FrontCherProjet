import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  Utilisateur: Utilisateur = new Utilisateur();

  constructor() { }

  ngOnInit(): void {
  }

  Connexion() {
      localStorage.setItem(this.Utilisateur.mail, this.Utilisateur.mdp);
      return true;
    }
  }

