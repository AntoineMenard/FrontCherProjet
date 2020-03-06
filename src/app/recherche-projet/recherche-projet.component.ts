import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';

@Component({
  selector: 'app-recherche-projet',
  templateUrl: './recherche-projet.component.html',
  styleUrls: ['./recherche-projet.component.css']
})
export class RechercheProjetComponent implements OnInit {

  constructor(public myService: CherserviceService) { }

  ngOnInit(): void {
  }

}
