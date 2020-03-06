import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.css']
})
export class ProfilEntrepriseComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService) { }

  entreprise;
  id = sessionStorage.getItem('idUtilisateur');



  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + "entreprise/" + this.id, this.entreprise)
      .subscribe(data => {
        this.entreprise = data;


      }, err => {
        console.log(err);
      });
  }





}
