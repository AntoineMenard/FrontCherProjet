import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-messagerie-projet',
  templateUrl: './messagerie-projet.component.html',
  styleUrls: ['./messagerie-projet.component.css']
})
export class MessagerieProjetComponent implements OnInit {

  messages;
  idProjet = sessionStorage.getItem('idProjetFocus');
  constructor(public myService: CherserviceService, private http: HttpClient, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'messages/projet/' + this.idProjet ).subscribe(data => {
      this.messages = data;
      this.messages.sort((a, b) => b.id - a.id);
    }, err => {
      console.log(err);
    });
  }


  

}
