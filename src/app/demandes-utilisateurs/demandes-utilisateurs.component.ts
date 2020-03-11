import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModifProjetEntrepriseComponent } from '../modif-projet-entreprise/modif-projet-entreprise.component';

@Component({
  selector: 'app-demandes-utilisateurs',
  templateUrl: './demandes-utilisateurs.component.html',
  styleUrls: ['./demandes-utilisateurs.component.css']
})
export class DemandesUtilisateursComponent implements OnInit {

  projetpropose;
  del;
  constructor(public myService: CherserviceService, private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8088/ProjetsProposes').subscribe(data => {
        console.log(data);
        this.projetpropose = data;
      }, err => {
        console.log(err);
      });
}
refuser(p){
  this.http.delete(this.myService.lienHttp
    + 'ProjetPropose/' + p.idProjet).subscribe(data => {
  p.del = data;
  console.log(data);
}, err => {
  console.log(err);

});
}
}
