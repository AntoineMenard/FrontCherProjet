import { Component } from '@angular/core';
import { CherserviceService } from './cherservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public myService: CherserviceService, public router: Router) {}

  // visibleNav = true;
  title = 'CherProjet';

  deconnexion() {
  sessionStorage.removeItem('idUtilisateur');
  sessionStorage.removeItem('statut');
  sessionStorage.removeItem('modifProjet');
  this.myService.visibleNavEntreprise = false;
  this.myService.visibleNavParticulier = false;
  }
}

