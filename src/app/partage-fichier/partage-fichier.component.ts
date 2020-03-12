import { Component, OnInit } from '@angular/core';
import { UploadFichierComponent } from '../upload-fichier/upload-fichier.component';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-partage-fichier',
  templateUrl: './partage-fichier.component.html',
  styleUrls: ['./partage-fichier.component.css']
})
export class PartageFichierComponent implements OnInit {

  constructor(
    private http: HttpClient,
    public myService: CherserviceService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openUploadFichier() {
    const mydial = this.dialog.open(UploadFichierComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();

});

}

}
