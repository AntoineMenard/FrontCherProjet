import { Component, OnInit } from '@angular/core';
import { Message } from '../model/Message';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envoi-message-entreprise',
  templateUrl: './envoi-message-entreprise.component.html',
  styleUrls: ['./envoi-message-entreprise.component.css']
})
export class EnvoiMessageEntrepriseComponent implements OnInit {

  particuliers;
  msgEnvoi: Message = new Message();
  idUser = sessionStorage.getItem('idUtilisateur');
  auteur;
  destinataireP;
  destinataire;



  constructor(public myService: CherserviceService, private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'particulier/').subscribe(data => {
      this.particuliers = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'entreprise/' + this.idUser).subscribe(data => {
      this.auteur = data;
    }, err => {
      console.log(err);
    });
  }
  

  
  envoiMessage() {
    console.log(this.msgEnvoi);
    this.http.get(this.myService.lienHttp + '/particulier/' + this.destinataireP).subscribe(data => {
      this.destinataire = data;
      console.log(this.destinataire);
      this.msgEnvoi.auteurE = this.auteur;
      this.msgEnvoi.destinataireP = this.destinataire;
      console.log(this.msgEnvoi.destinataireP);
      this.http.post(this.myService.lienHttp + '/messages', this.msgEnvoi).subscribe(data => {
    }, err => {
      console.log(err);
    });
    }, err => {
      console.log(err);
    });
    
  }
}
