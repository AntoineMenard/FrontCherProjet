import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModifProfilParticulierComponent } from '../modif-profil-particulier/modif-profil-particulier.component';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {

  particulier;

  constructor(

    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    private dialog: MatDialog

  ) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'particulier/' + sessionStorage.getItem('idUtilisateur'))
      .subscribe(data => {
        this.particulier = data;
      }, err => {
        console.log(err);
      });

  }

  callModifProfilParticulier() {
    const mydial = this.dialog.open(ModifProfilParticulierComponent);
  }

}
