import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CherserviceService {

  visibleNavParticulier = false;
  visibleNavEntreprise = false;
  connecte = false;
  msgIfNotCo = false;
  modifProjet = -1;
  idProjetFocus = -1;
  lienHttp = 'http://localhost:8088/';


  constructor(public router: Router) { }

  userEnLigne() {
    if (sessionStorage.getItem('idUtilisateur') != null) {
      this.connecte = true;
    } else {
      this.connecte = false;
      this.msgIfNotCo = true;
      this.router.navigate(['home-page']);
    }

    return this.connecte;

  }

  EnLigne() {

    if (sessionStorage.getItem('statut') === '0') {
      this.visibleNavEntreprise = true;
      this.visibleNavParticulier = false;
    } else if (sessionStorage.getItem('statut') === '1') {
      this.visibleNavEntreprise = false;
      this.visibleNavParticulier = true;
    } else {
      this.visibleNavEntreprise = false;
      this.visibleNavParticulier = false;
    }

    return true;

  }

}
