import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModifProfilParticulierComponent } from '../modif-profil-particulier/modif-profil-particulier.component';
import { Particulier } from '../model/Particulier';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {
  domainesParticulier;
  particulier;
  p: Particulier = new Particulier();


  constructor(

    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'domaineParticulier/' + sessionStorage.getItem('idUtilisateur')).subscribe(data => {
      this.domainesParticulier = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'particulier/' + sessionStorage.getItem('idUtilisateur'))
      .subscribe(data => {
        this.particulier = data;
        this.p = this.particulier;
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

  callModifProfilParticulier() {
    const mydial = this.dialog.open(ModifProfilParticulierComponent);
  }

}
