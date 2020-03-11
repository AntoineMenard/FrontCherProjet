import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CherserviceService } from '../cherservice.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modif-etape',
  templateUrl: './modif-etape.component.html',
  styleUrls: ['./modif-etape.component.css']
})
export class ModifEtapeComponent implements OnInit {

  idEtape = sessionStorage.getItem('modifEtapeId');
  etape;
  etapeModif;
  dateDeb;
  erreur = false;
  dateFin;


  constructor(private http: HttpClient,
              public myService: CherserviceService,
              public dialogRefr: MatDialogRef<ModifEtapeComponent>

              

  ) { }


  ngOnInit(): void{
    this.http.get(this.myService.lienHttp + 'etapeProjet/' + this.idEtape)
      .subscribe(data => {
        this.etape = data;
        this.etapeModif = data;
        this.dateDeb = this.etape.dateDebut;
        this.dateFin = this.etape.dateFin;

      }, err => {
        console.log(err);
      });
    }

    modifEtape() {
      if (this.etapeModif.dateFin >= this.etapeModif.dateDebut) {

        this.http.put(this.myService.lienHttp + 'etapeProjet/' + this.idEtape, this.etapeModif)
        .subscribe(data => {
          this.dialogRefr.close();
          window.location.reload();
  
  
        }, err => {
          console.log(err);
        });
      }else{
        this.erreur = true;
      }

    }

}
