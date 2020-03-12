import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Message } from '../model/Message';
import { Router } from '@angular/router';
import { Particulier } from '../model/Particulier';

@Component({
  selector: 'app-messagerie-projet',
  templateUrl: './messagerie-projet.component.html',
  styleUrls: ['./messagerie-projet.component.css']
})
export class MessagerieProjetComponent implements OnInit {

  messages;
  envoiMsgtxt;
  typeUser = sessionStorage.getItem('statut');
  idUser = sessionStorage.getItem('idUtilisateur');
  projet;
  particulier;
  entreprise;
  auteurMessagerie;
  msgEnvoye: Message = new Message();

  idProjet = sessionStorage.getItem('idProjetFocus');
  constructor(public myService: CherserviceService,
              private http: HttpClient,
              private dialog: MatDialog,
              private router: Router
    ,
    ) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'messages/projet/' + this.idProjet ).subscribe(data => {
      this.messages = data;
      this.messages.sort((a, b) => b.id - a.id);
      this.messages.forEach(message => {
        if (message.auteurP === null) {
          message.auteurP = new Particulier();
          message.auteurP.nom = message.auteurE.nom;
        }
     });
    }, err => {
      console.log(err);
    });
    this.http.get(this.myService.lienHttp + 'projet/' + this.idProjet ).subscribe(data => {
      this.projet = data;
      this.msgEnvoye.projet = this.projet;
    }, err => {
      console.log(err);
    });

    if  (this.typeUser === '1') {
      this.http.get(this.myService.lienHttp + 'particulier/' + this.idUser ).subscribe(data => {
        this.particulier = data;
        this.msgEnvoye.auteurP = this.particulier;
        this.auteurMessagerie = (this.particulier.nom + ' ' + this.particulier.prenom);
      }, err => {
        console.log(err);
      });

    }
    if  (this.typeUser === '0') {
      this.http.get(this.myService.lienHttp + 'entreprise/' + this.idUser ).subscribe(data => {
        this.entreprise = data;
        this.msgEnvoye.auteurE = this.entreprise;
      }, err => {
        console.log(err);
      });

    }

  }

  envoiMsg() {
    this.msgEnvoye.contenu = this.envoiMsgtxt;
    this.http.post(this.myService.lienHttp + '/messages', this.msgEnvoye).subscribe(data => {
      console.log('msg envoyé!!!');
      window.location.reload();
    }, err => {
      console.log(err);
    });

  }


  

}
