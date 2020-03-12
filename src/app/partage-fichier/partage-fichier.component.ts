import { Component, OnInit } from '@angular/core';
import { UploadFichierComponent } from '../upload-fichier/upload-fichier.component';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PartageFichier } from '../model/PartageFichier';
import { Utilisateur } from '../model/Utilisateur';
import { Entreprise } from '../model/Entreprise';
import { Particulier } from '../model/Particulier';

@Component({
  selector: 'app-partage-fichier',
  templateUrl: './partage-fichier.component.html',
  styleUrls: ['./partage-fichier.component.css']
})
export class PartageFichierComponent implements OnInit {

  
  partagefichier;
  entreprise: Entreprise = new Entreprise();
  particulier: Particulier = new Particulier();
  nom;
  entrepvisible = false;
  partivisible = false;


  constructor(
    private http: HttpClient,
    public myService: CherserviceService,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'partageFichier/projet/' + sessionStorage.getItem('idProjetFocus')).subscribe(data => {
      this.partagefichier = data;
    }, err => {
      console.log(err);
    });

    if (this.partagefichier.particulier == null) {
      this.entrepvisible = true;
    } else {
      this.partivisible = true;
    }

    }



openUploadFichier() {
    const mydial = this.dialog.open(UploadFichierComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();

});

}
}
