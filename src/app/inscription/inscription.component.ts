import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private router: Router) { }
  particulier = false;
  entreprise = false;

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

  GoToConnexion() {
    this.router.navigate(['/login']);
  }

}
