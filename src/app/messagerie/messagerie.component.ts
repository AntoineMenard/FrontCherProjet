import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {

  constructor(public myService: CherserviceService) { }

  ngOnInit(): void {
  }

}
