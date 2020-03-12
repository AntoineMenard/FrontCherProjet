import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Domaine } from '../model/domaine';
import { DomaineParticulier } from '../model/DomaineParticulier';
import { Particulier } from '../model/Particulier';

@Component({
  selector: 'app-modif-profil-particulier',
  templateUrl: './modif-profil-particulier.component.html',
  styleUrls: ['./modif-profil-particulier.component.css']
})
export class ModifProfilParticulierComponent implements OnInit {

  domaines;
  Domaine: Domaine = new Domaine();
  Domaine1: Domaine = new Domaine();
  Domaine2: Domaine = new Domaine();
  Domaine3: Domaine = new Domaine();
  Domaine4: Domaine = new Domaine();
  DomainePar: DomaineParticulier = new DomaineParticulier();
  DomainePar1: DomaineParticulier = new DomaineParticulier();
  DomainePar2: DomaineParticulier = new DomaineParticulier();
  DomainePar3: DomaineParticulier = new DomaineParticulier();
  DomainePar4: DomaineParticulier = new DomaineParticulier();
  particulier;
  domainesParticulier;
  nom;
  prenom;
  bio;
  mail;
  mdp;
  dateNaissance;
  partmodif;
  photo: any;
  img: any = null;

  selectedFile: File = null;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = true;

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    public dialogRefr: MatDialogRef<ModifProfilParticulierComponent>) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'domaineParticulier/' + sessionStorage.getItem('idUtilisateur')).subscribe(data => {
      this.domainesParticulier = data;
      this.DomainePar = this.domainesParticulier[0];
      this.DomainePar1 = this.domainesParticulier[1];
      this.DomainePar2 = this.domainesParticulier[2];
      this.DomainePar3 = this.domainesParticulier[3];
      this.DomainePar4 = this.domainesParticulier[4];
      if (this.DomainePar1.domaine.idDomaine !== 1) { this.visible1 = true; }
      if (this.DomainePar2.domaine.idDomaine !== 1) { this.visible2 = true; }
      if (this.DomainePar3.domaine.idDomaine !== 1) { this.visible3 = true; }
      if (this.DomainePar4.domaine.idDomaine !== 1) { this.visible4 = true;  this.visible5 = false; }
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'particulier/' + sessionStorage.getItem('idUtilisateur'))
      .subscribe(data => {
        this.particulier = data;
        this.nom = this.particulier.nom;
        this.prenom = this.particulier.adresse;
        this.bio = this.particulier.bio;
        this.mail = this.particulier.mail;
        this.mdp = this.particulier.mdp;
        this.dateNaissance = this.particulier.dateNaissance;
        this.photo = this.particulier.photo;

        this.partmodif = this.particulier;

      }, err => {
        console.log(err);
      });

  }

  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event2) => {
      this.img = reader.result;

      if (this.img == null) {
        this.partmodif.photo = this.photo;
      } else {
        this.partmodif.photo = window.btoa(this.img);
      }

    };

  }
  rendreNextVisible() {
    if (!this.visible1) { this.visible1 = true; } else {
      if (!this.visible2) { this.visible2 = true; } else {
        if (!this.visible3) { this.visible3 = true; } else {
          if (!this.visible4) {
            this.visible4 = true;
            this.visible5 = false;
          } else { this.visible5 = false; }
        }
      }
    }
  }

  modifParticulier() {
    this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
      .subscribe(data => {
        this.DomainePar.domaine = data;
        this.http.put<Particulier>(this.myService.lienHttp + 'particulier/' + sessionStorage.getItem('idUtilisateur'), this.partmodif)
          .subscribe(data => {
            this.DomainePar.particulier = data;
            this.gérerlessecteurs();
            this.dialogRefr.close();
            window.location.reload();

          }, err => {
            console.log(err);
          });
      }, err => {
        console.log(err);
      });
  }
  gérerlessecteurs() {
    this.http.put(this.myService.lienHttp + 'particulierDomaine/' + this.DomainePar.id, this.DomainePar)
      .subscribe(data => {
        console.log(data);
        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine1.idDomaine)
        .subscribe(data => {
          this.DomainePar1.domaine = data;
          this.http.put(this.myService.lienHttp + 'particulierDomaine/' + this.DomainePar1.id, this.DomainePar1)
          .subscribe(data => {
            this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine2.idDomaine)
            .subscribe(data => {
              this.DomainePar2.domaine = data;
              this.http.put(this.myService.lienHttp + 'particulierDomaine/' + this.DomainePar2.id, this.DomainePar2)
              .subscribe(data => {
                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine3.idDomaine)
                .subscribe(data => {
                  this.DomainePar3.domaine = data;
                  this.http.put(this.myService.lienHttp + 'particulierDomaine/' + this.DomainePar3.id, this.DomainePar3)
                  .subscribe(data => {
                    this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine4.idDomaine)
                    .subscribe(data => {
                      this.DomainePar4.domaine = data;
                      this.http.put(this.myService.lienHttp + 'particulierDomaine/' + this.DomainePar4.id, this.DomainePar4)
                      .subscribe(data => {
                        
                      }, err => { console.log(err); });
                    }, err => { console.log(err); });
                  }, err => { console.log(err); });
                }, err => { console.log(err); });
              }, err => { console.log(err); });
            }, err => { console.log(err); });
          }, err => { console.log(err); });
        }, err => { console.log(err); });
      }, err => { console.log(err); });
  }
}
