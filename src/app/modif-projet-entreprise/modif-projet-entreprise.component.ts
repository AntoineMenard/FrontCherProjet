import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif-projet-entreprise',
  templateUrl: './modif-projet-entreprise.component.html',
  styleUrls: ['./modif-projet-entreprise.component.css']
})
export class ModifProjetEntrepriseComponent implements OnInit {
  
  idProjet = sessionStorage.getItem('modifProjet');

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
  ) { }

  ngOnInit(): void {
  }



}
