import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';

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
  constructor(public myService: CherserviceService, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8088/projet/entreprise/' + sessionStorage.getItem('idUtilisateur')
      + '/0').subscribe(data => {
        console.log(data);
        this.projetattente = data;
      }, err => {
        console.log(err);
      });

    this.http.get('http://localhost:8088/projet/entreprise/' + sessionStorage.getItem('idUtilisateur')
      + '/1').subscribe(data => {
        console.log(data);
        this.projetpasse = data;
      }, err => {
        console.log(err);
      });

    this.http.get('http://localhost:8088/projet/entreprise/' + sessionStorage.getItem('idUtilisateur')
      + '/2').subscribe(data => {
        console.log(data);
        this.projetencours = data;
      }, err => {
        console.log(err);
      });

    this.http.get('http://localhost:8088/projet/entreprise/' + sessionStorage.getItem('idUtilisateur')
      + '/3').subscribe(data => {
        console.log(data);
        this.projetavenir = data;
      }, err => {
        console.log(err);
      });
  }

  deleteProjetattente(p) {
    console.log(p.idProjet);


    this.http.delete(this.myService.lienHttp + 'projet/' + p.idProjet).subscribe(data => {
      console.log(data);

      p = data;
    }, err => {
      console.log(err);
    });
  }
}
