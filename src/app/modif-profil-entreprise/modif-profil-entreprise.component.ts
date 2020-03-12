import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Entreprise } from '../model/Entreprise';
import { Domaine } from '../model/domaine';
import { DomaineEntreprise } from '../model/DomaineEntreprise';



@Component({
  selector: 'app-modif-profil-entreprise',
  templateUrl: './modif-profil-entreprise.component.html',
  styleUrls: ['./modif-profil-entreprise.component.css']
})
export class ModifProfilEntrepriseComponent implements OnInit {
  domaines;
  Domaine: Domaine = new Domaine();
  Domaine1: Domaine = new Domaine();
  Domaine2: Domaine = new Domaine();
  Domaine3: Domaine = new Domaine();
  Domaine4: Domaine = new Domaine();
  DomaineEnt: DomaineEntreprise = new DomaineEntreprise();
  DomaineEnt1: DomaineEntreprise = new DomaineEntreprise();
  DomaineEnt2: DomaineEntreprise = new DomaineEntreprise();
  DomaineEnt3: DomaineEntreprise = new DomaineEntreprise();
  DomaineEnt4: DomaineEntreprise = new DomaineEntreprise();
  
  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    public dialogRefr: MatDialogRef<ModifProfilEntrepriseComponent>,
  ) { }
  domainesEntreprise;
  entreprise;
  nomentreprise;
  mailentreprise;
  descentreprise;
  adresseentreprise;
  CPentreprise;
  taillentreprise;
  dateCreationentreprise;
  siteWebentreprise;
  mdpentreprise;
  telentreprise;
  id = sessionStorage.getItem('idUtilisateur');
  entrepmodif;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = true;
  photo: any;
  img: any = null;
  selectedFile: File = null;



  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'domaineEntreprise/' + this.id).subscribe(data => {
      this.domainesEntreprise = data;
      this.DomaineEnt = this.domainesEntreprise[0];
      this.DomaineEnt1 = this.domainesEntreprise[1];
      this.DomaineEnt2 = this.domainesEntreprise[2];
      this.DomaineEnt3 = this.domainesEntreprise[3];
      this.DomaineEnt4 = this.domainesEntreprise[4];
      
      if (this.DomaineEnt1.domaine.idDomaine !== 1) { this.visible1 = true; }
      if (this.DomaineEnt2.domaine.idDomaine !== 1) { this.visible2 = true; }
      if (this.DomaineEnt3.domaine.idDomaine !== 1) { this.visible3 = true; }
      if (this.DomaineEnt4.domaine.idDomaine !== 1) { this.visible4 = true;  this.visible5 = false;  }
      console.log(this.DomaineEnt4.domaine.idDomaine);


    }, err => {
      console.log(err);
    });


    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + 'entreprise/' + this.id, this.entreprise)
      .subscribe(data => {
        this.entreprise = data;
        this.nomentreprise = this.entreprise.nom;
        this.descentreprise = this.entreprise.description;
        this.mailentreprise = this.entreprise.mail;
        this.adresseentreprise = this.entreprise.adresse;
        this.CPentreprise = this.entreprise.codePostal;
        this.taillentreprise = this.entreprise.tailleEntreprise;
        this.dateCreationentreprise = this.entreprise.dateCreation;
        this.siteWebentreprise = this.entreprise.siteWeb;
        this.telentreprise = this.entreprise.telephone;
        this.mdpentreprise = this.entreprise.mdp;
        this.photo = this.entreprise.photo;

        this.entrepmodif = this.entreprise;

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
        this.entrepmodif.photo = this.photo;
      } else {
        this.entrepmodif.photo = window.btoa(this.img);
      }

    };

  }

  modifEntreprise() {
    this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
      .subscribe(data => {
        this.DomaineEnt.domaine = data;
        console.log(this.DomaineEnt.domaine);
        this.http.put<Entreprise>(this.myService.lienHttp + 'entreprise/' + this.id, this.entrepmodif)
          .subscribe(data => {
            this.DomaineEnt.entreprise = data;
            console.log(this.DomaineEnt);
            this.gérerlessecteurs();
            this.dialogRefr.close();
            window.location.reload();
          }, err => {
            console.log(err);
          });
      }, err => { console.log(err); });

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


  gérerlessecteurs() {
    this.http.put(this.myService.lienHttp + 'entrepriseDomaine/' + this.DomaineEnt.id, this.DomaineEnt)
      .subscribe(data => {
        console.log(this.entrepmodif.idUtilisateur);
        console.log(this.DomaineEnt);
        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine1.idDomaine)
          .subscribe(data => {
            this.DomaineEnt1.domaine = data;
            this.http.put(this.myService.lienHttp + 'entrepriseDomaine/' + this.DomaineEnt1.id, this.DomaineEnt1)
              .subscribe(data => {
                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine2.idDomaine)
                  .subscribe(data => {
                    this.DomaineEnt2.domaine = data;
                    this.http.put(this.myService.lienHttp + 'entrepriseDomaine/' + this.DomaineEnt2.id, this.DomaineEnt2)
                      .subscribe(data => {
                        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine3.idDomaine)
                          .subscribe(data => {
                            this.DomaineEnt3.domaine = data;
                            this.http.put(this.myService.lienHttp + 'entrepriseDomaine/' + this.DomaineEnt3.id, this.DomaineEnt3)
                              .subscribe(data => {
                                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine4.idDomaine)
                                  .subscribe(data => {
                                    this.DomaineEnt4.domaine = data;
                                    this.http.put(this.myService.lienHttp + 'entrepriseDomaine/' +this.DomaineEnt4.id, this.DomaineEnt4)
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

