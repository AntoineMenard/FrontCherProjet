import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';

declare var jQuery: any;


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public myService: CherserviceService,
  ) { }

  idProjet = sessionStorage.getItem('idProjetFocus');
  projet;
  participations;
 
  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'projet/' + this.idProjet)
    .subscribe(data => {
      this.projet = data;

    }, err => {
      console.log(err);
    });
    this.http.get(this.myService.lienHttp + 'participation/projet/' + this.idProjet)
    .subscribe(data => {
      this.participations = data;

    }, err => {
      console.log(err);
    });
  }
}

