import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projet;
  constructor(public myService: CherserviceService, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8088/projet').subscribe(data => {
    console.log(data);
    this.projet = data;
      }, err => {
        console.log(err);
      });
  }

}
