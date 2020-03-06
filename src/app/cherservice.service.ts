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
}
