import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reception-message-particulier',
  templateUrl: './reception-message-particulier.component.html',
  styleUrls: ['./reception-message-particulier.component.css']
})
export class ReceptionMessageParticulierComponent implements OnInit {

  idDestinataire = sessionStorage.getItem('idUtilisateur');
  messages;


  constructor(public myService: CherserviceService, private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'messages/destinataireP/' + this.idDestinataire ).subscribe(data => {
      this.messages = data;
      this.messages.sort((a, b) => b.id - a.id);
    }, err => {
      console.log(err);
    });
  }

}
