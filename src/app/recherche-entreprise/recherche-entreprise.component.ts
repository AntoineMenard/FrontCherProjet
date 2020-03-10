import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recherche-entreprise',
  templateUrl: './recherche-entreprise.component.html',
  styleUrls: ['./recherche-entreprise.component.css']
})
export class RechercheEntrepriseComponent implements OnInit {

  entreprise;
  filtreNom;

  constructor(
    public myService: CherserviceService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'entreprise').subscribe(data => {
      this.entreprise = data;
    }, err => {
      console.log(err);
    });
  }

}
