import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.component.html',
  styleUrls: ['./recherche-projet.component.css']
})
export class RechercheProjetComponent implements OnInit {

  projet;

  constructor(
    public myService: CherserviceService,
    private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'projet').subscribe(data => {
    console.log(data);
    this.projet = data;
      }, err => {
        console.log(err);
      });

  }

}
