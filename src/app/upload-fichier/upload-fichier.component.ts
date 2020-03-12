import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PartageFichier } from '../model/PartageFichier';
import { Projet } from '../model/projet';

@Component({
  selector: 'app-upload-fichier',
  templateUrl: './upload-fichier.component.html',
  styleUrls: ['./upload-fichier.component.css']
})
export class UploadFichierComponent implements OnInit {

  proj;
  selectedFile: File = null;
  fichierURL: any;
  fich;
  pf: PartageFichier = new PartageFichier();
  p: Projet= new Projet();

  constructor(
    private dialogRef: MatDialogRef<UploadFichierComponent>,
    public myService: CherserviceService,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event2) => {
      this.fichierURL = reader.result;
    };
  }

onUpload(commentairefichier) {

  this.pf.commentaire = commentairefichier;
  if (this.fichierURL == null) {
    this.pf.fichier = this.fichierURL;
  } else {
    this.pf.fichier = window.btoa(this.fichierURL);
  }

  this.http.get(this.myService.lienHttp + 'projet/' + sessionStorage.getItem('idProjetFocus')). subscribe(data => {
    this.proj = data;
    this.p = this.proj;
    this.pf.projet = this.p;

    this.http.post(this.myService.lienHttp + 'partageFichier', this.pf).subscribe(data2 => {
    this.dialogRef.close();

  }, err => {console.log(err);
  });



  }, err => {
    console.log(err);
  });
}

}
