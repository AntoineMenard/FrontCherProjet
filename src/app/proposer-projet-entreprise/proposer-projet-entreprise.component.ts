import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../model/projet';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-proposer-projet-entreprise',
  templateUrl: './proposer-projet-entreprise.component.html',
  styleUrls: ['./proposer-projet-entreprise.component.css']
})
export class ProposerProjetEntrepriseComponent implements OnInit {
  visible = false;
  p;
  Projet: Projet = new Projet();

  constructor(
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  msgVisible() {
    if (this.visible === false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  SoumettreProjet() {
    this.http.post('http://localhost:8088/projet', this.Projet).subscribe(data => {
        this.p = data;
        this.router.navigate(['/projets']);
    }, err => { console.log(err);
    });
  }
}
