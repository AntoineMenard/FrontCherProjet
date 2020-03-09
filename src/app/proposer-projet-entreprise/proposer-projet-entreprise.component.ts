import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../model/projet';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';

@Component({
  selector: 'app-proposer-projet-entreprise',
  templateUrl: './proposer-projet-entreprise.component.html',
  styleUrls: ['./proposer-projet-entreprise.component.css']
})
export class ProposerProjetEntrepriseComponent implements OnInit {
  visible = false;
  p;
  Projet: Projet = new Projet();
  entreprise;

  constructor(
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
    private myService: CherserviceService) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'entreprise/' + sessionStorage.getItem('idUtilisateur')).subscribe(data => {
      this.entreprise = data;
    }, err => {
      console.log(err);
    });

  }
  msgVisible() {
    if (this.visible === false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  SoumettreProjet() {
    this.Projet.entreprise = this.entreprise;
    console.log(this.Projet);
    this.http.post('http://localhost:8088/projet', this.Projet).subscribe(data => {
        this.router.navigate(['/projets']);
    }, err => { console.log(err);
    });
  }
}
