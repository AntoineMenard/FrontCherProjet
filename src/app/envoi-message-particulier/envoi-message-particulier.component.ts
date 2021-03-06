import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Message } from '../model/Message';

@Component({
  selector: 'app-envoi-message-particulier',
  templateUrl: './envoi-message-particulier.component.html',
  styleUrls: ['./envoi-message-particulier.component.css']
})
export class EnvoiMessageParticulierComponent implements OnInit {
  entreprises;
  msgEnvoi: Message = new Message();
  idUser = sessionStorage.getItem('idUtilisateur');
  auteur;
  destinataireE;
  destinataire;



  constructor(public myService: CherserviceService, private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'entreprise/').subscribe(data => {
      this.entreprises = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'particulier/' + this.idUser).subscribe(data => {
      this.auteur = data;
    }, err => {
      console.log(err);
    });
  }
  

  
  envoiMessage() {
    console.log(this.msgEnvoi);
    this.http.get(this.myService.lienHttp + '/entreprise/nom/' + this.destinataireE).subscribe(data => {
      this.destinataire = data;
      this.msgEnvoi.auteurP = this.auteur;
      this.msgEnvoi.destinataireE = this.destinataire;
      console.log(this.msgEnvoi.destinataireE);
      this.http.post(this.myService.lienHttp + '/messages', this.msgEnvoi).subscribe(data => {
        window.location.reload();
    }, err => {
      console.log(err);
    });
    }, err => {
      console.log(err);
    });
    
  }

}
