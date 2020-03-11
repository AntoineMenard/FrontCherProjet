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

  constructor(public myService: CherserviceService, private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

}
