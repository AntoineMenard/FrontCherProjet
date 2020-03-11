import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-fichier',
  templateUrl: './upload-fichier.component.html',
  styleUrls: ['./upload-fichier.component.css']
})
export class UploadFichierComponent implements OnInit {

  selectedFile: File = null;
  fichierURL: any;
  fichier;

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
      this.fichier = reader.result;
    };
  }

}
