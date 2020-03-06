import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-profil-entreprise',
  templateUrl: './modif-profil-entreprise.component.html',
  styleUrls: ['./modif-profil-entreprise.component.css']
})
export class ModifProfilEntrepriseComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    private dialog: MatDialog) { }

  entreprise;
  nomenterprise;
  mailentreprise;
  descentreprise;
  id = sessionStorage.getItem('idUtilisateur');



  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + "entreprise/" + this.id, this.entreprise)
      .subscribe(data => {
        this.entreprise = data;
        this.nomenterprise = this.entreprise.nom;
        this.descentreprise = this.entreprise.description;
        this.mailentreprise = this.entreprise.mail;


      }, err => {
        console.log(err);
      });

      
  }

}
