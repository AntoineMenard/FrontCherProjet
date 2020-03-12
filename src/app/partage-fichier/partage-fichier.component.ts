import { Component, OnInit } from '@angular/core';
import { UploadFichierComponent } from '../upload-fichier/upload-fichier.component';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { PartageFichier } from '../model/PartageFichier';
import { Utilisateur } from '../model/Utilisateur';
import { Entreprise } from '../model/Entreprise';
import { Particulier } from '../model/Particulier';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-partage-fichier',
  templateUrl: './partage-fichier.component.html',
  styleUrls: ['./partage-fichier.component.css']
})
export class PartageFichierComponent implements OnInit {

  
  partagefichier;
  particulier: Particulier = new Particulier();
  nom;
  url;


  constructor(
    private http: HttpClient,
    public myService: CherserviceService,
    private dialog: MatDialog,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'partageFichier/projet/' + sessionStorage.getItem('idProjetFocus')).subscribe(data => {
      this.partagefichier = data;
      this.partagefichier.forEach(element => {
        if (element.particulier === null){
          element.particulier = new Particulier();
          element.particulier.nom = element.projet.entreprise.nom;
          element.particulier.prenom = '';

        }
        
      });

    }, err => {
      console.log(err);
    });

    }



openUploadFichier() {
    const mydial = this.dialog.open(UploadFichierComponent);
    mydial.afterClosed().subscribe(result => {
      this.ngOnInit();

});

}

changeForm(fichier) {
  //console.log(window.atob(img));
  this.url = window.atob(fichier);
  return this.sanitizer.bypassSecurityTrustResourceUrl(this.url) ;
}

}
