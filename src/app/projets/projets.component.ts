import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { ModifProjetEntrepriseComponent } from '../modif-projet-entreprise/modif-projet-entreprise.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Projet } from '../model/projet';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projetattente;
  projetpasse;
  projetencours;
  projetavenir;
  projet;
  Projet: Projet = new Projet();

  constructor(public myService: CherserviceService, private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8088/projet/entreprise/' + sessionStorage.getItem('idUtilisateur')
      + '/0').subscribe(data => {
        //console.log(data);
        this.projetattente = data;
      }, err => {
        console.log(err);
      });

    this.http.get('http://localhost:8088/projet/entreprise/' + sessionStorage.getItem('idUtilisateur')
      + '/1').subscribe(data => {
        //console.log(data);
        this.projetpasse = data;
      }, err => {
        console.log(err);
      });

    this.http.get('http://localhost:8088/projet/entreprise/' + sessionStorage.getItem('idUtilisateur')
      + '/2').subscribe(data => {
        //console.log(data);
        this.projetencours = data;
      }, err => {
        console.log(err);
      });

    this.http.get('http://localhost:8088/projet/entreprise/' + sessionStorage.getItem('idUtilisateur')
      + '/3').subscribe(data => {
       //console.log(data);
        this.projetavenir = data;
      }, err => {
        console.log(err);
      });
  }

  deleteProjet(p) {
    console.log(p.idProjet);
    this.http.delete(this.myService.lienHttp + 'projet/' + p.idProjet).subscribe(data => {
      window.location.reload();
      p = data;
    }, err => {
      console.log(err);
    });
  }
  modifProjet(p) {
    sessionStorage.setItem('modifProjet', p.idProjet);
    const mydial = this.dialog.open(ModifProjetEntrepriseComponent);
  }
  validerProjet(p) {
    sessionStorage.setItem('validerProjet', p.idProjet);
    this.router.navigate(['demande-participation-projet-utilisateur']);
  }

  goToProjet(p){
    sessionStorage.setItem('idProjetFocus', p.idProjet);
    this.router.navigate(['gestion-projet']);

  }
 
  lancerProjet(p) {
    p.statut = 2;
    //console.log(p.idProjet);
    this.http.put<Projet>(this.myService.lienHttp + 'projet/' + p.idProjet, p).subscribe(data => {
      console.log(p.statut);
      window.location.reload();
    }, err => {
      console.log(err);
    });

  }

  changeForm(img) {
    //console.log(window.atob(img));
    return window.atob(img);
  }
}
