import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  constructor(public myService: CherserviceService) { }

  ngOnInit(): void {
  }

}
