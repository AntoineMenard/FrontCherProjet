import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CherserviceService } from '../cherservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gestion-projet',
  templateUrl: './gestion-projet.component.html',
  styleUrls: ['./gestion-projet.component.css']
})
export class GestionProjetComponent implements OnInit {

  projet;
  idProjet = sessionStorage.getItem('idProjetFocus');
  participations;


  constructor(
    private http: HttpClient,
    public myService: CherserviceService,
    private modal: NgbModal,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.idProjet);
    this.http.get(this.myService.lienHttp + 'projet/' + this.idProjet)
    .subscribe(data => {
      this.projet = data;
      console.log(this.projet);
    }, err => {
      console.log(err);
    });
    this.http.get(this.myService.lienHttp + 'participation/projet/' + this.idProjet)
    .subscribe(data => {
      this.participations = data;

    }, err => {
      console.log(err);
    });
  }

}
