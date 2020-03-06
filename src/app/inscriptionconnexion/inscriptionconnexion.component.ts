import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscriptionconnexion',
  templateUrl: './inscriptionconnexion.component.html',
  styleUrls: ['./inscriptionconnexion.component.css']
})
export class InscriptionconnexionComponent implements OnInit {

  constructor(private router: Router) { }
  particulier = false;
  entreprise = false;

  ngOnInit(): void {
  }

  visibleParticulierCo() {
    if (this.particulier) {
      this.particulier = false;

    } else {
      this.particulier = true;
      this.entreprise = true;
      this.visibleEntrepriseCo();
    }
  }
  visibleEntrepriseCo() {
    if (this.entreprise) {
      this.entreprise = false;
    } else {
      this.entreprise = true;
      this.particulier = true;
      this.visibleParticulierCo();
    }
  }

}
