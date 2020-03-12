import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception-message-entrprise',
  templateUrl: './reception-message-entrprise.component.html',
  styleUrls: ['./reception-message-entrprise.component.css']
})
export class ReceptionMessageEntrpriseComponent implements OnInit {

  idDestinataire = sessionStorage.getItem('idUtilisateur');
  messages;


  constructor(public myService: CherserviceService, private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'messages/destinataireE/' + this.idDestinataire ).subscribe(data => {
      this.messages = data;
    }, err => {
      console.log(err);
    });
  }
}
