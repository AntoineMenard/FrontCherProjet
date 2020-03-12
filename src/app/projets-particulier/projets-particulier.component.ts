import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets-particulier',
  templateUrl: './projets-particulier.component.html',
  styleUrls: ['./projets-particulier.component.css']
})
export class ProjetsParticulierComponent implements OnInit {

  projetencours;
  projetpasse;
  projetattente;

  constructor(public myService: CherserviceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'participation/particulier/' + sessionStorage.getItem('idUtilisateur')
      + '/2').subscribe(data => {
        this.projetencours = data;
      }, err => {
        console.log(err);
      });

    this.http.get(this.myService.lienHttp + 'participation/particulier/' + sessionStorage.getItem('idUtilisateur')
      + '/1').subscribe(data => {
        this.projetpasse = data;
      }, err => {
        console.log(err);
      });

    this.http.get(this.myService.lienHttp + 'demandeParticipation/particulier/' + sessionStorage.getItem('idUtilisateur')
      + '/0').subscribe(data => {
        this.projetattente = data;
      }, err => {
        console.log(err);
      });

    

  }
  goToProjet(p) {
    sessionStorage.setItem('idProjetFocus', p.projet.idProjet);
    this.router.navigate(['gestion-projet']);

  }

  changeForm(img) {
    console.log(window.atob(img));
    return window.atob(img);
  }

}
