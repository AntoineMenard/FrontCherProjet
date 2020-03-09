import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projets-particulier',
  templateUrl: './projets-particulier.component.html',
  styleUrls: ['./projets-particulier.component.css']
})
export class ProjetsParticulierComponent implements OnInit {

  projetencours;
  projetpasse;
  projetattente;

  constructor(public myService: CherserviceService, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'participation/particulier/' + sessionStorage.getItem('idUtilisateur')
      + '/1').subscribe(data => {
        console.log(data);
        this.projetencours = data;
      }, err => {
        console.log(err);
      });

    this.http.get(this.myService.lienHttp + 'participation/particulier/' + sessionStorage.getItem('idUtilisateur')
      + '/2').subscribe(data => {
        console.log(data);
        this.projetpasse = data;
      }, err => {
        console.log(err);
      });

    this.http.get(this.myService.lienHttp + 'demandeParticipation/particulier/' + sessionStorage.getItem('idUtilisateur')
      + '/0').subscribe(data => {
        console.log(data);
        this.projetattente = data;
      }, err => {
        console.log(err);
      });

  }

}
