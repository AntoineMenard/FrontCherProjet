import { Component } from '@angular/core';
import { CherserviceService } from './cherservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public myService: CherserviceService) {}

  // visibleNav = true;
  title = 'CherProjet';

  deconnexion() {
  sessionStorage.removeItem('idUtilisateur');
  sessionStorage.removeItem('statut');
  this.myService.visibleNavEntreprise = false;
  this.myService.visibleNavParticulier = false;
  }
}

