import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModifProfilEntrepriseComponent } from '../modif-profil-entreprise/modif-profil-entreprise.component';
import { Entreprise } from '../model/Entreprise';


@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.css']
})
export class ProfilEntrepriseComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    private dialog: MatDialog) { }

  entreprise;
  e: Entreprise = new Entreprise();
  id = sessionStorage.getItem('idUtilisateur');



  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'entreprise/' + this.id, this.entreprise)
      .subscribe(data => {
        this.entreprise = data;
        this.e = this.entreprise;


      }, err => {
        console.log(err);
      });
  }

  changeForm(img) {
    return window.atob(img);
  }

  photoExist(img) {
    if (img == null) {
      return false;
    } else {
      return true;
    }
  }

  callModifProfilEntreprise() {
    const mydial = this.dialog.open(ModifProfilEntrepriseComponent);
  }





}
