import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public myService: CherserviceService) { }

  ngOnInit(): void {
  }

}
