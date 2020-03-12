import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Particulier } from '../model/Particulier';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from '../model/Entreprise';
import { CherserviceService } from '../cherservice.service';
import { MatDialogRef } from '@angular/material/dialog';
import { InscriptionconnexionComponent } from '../inscriptionconnexion/inscriptionconnexion.component';
import { DomaineEntreprise } from '../model/DomaineEntreprise';
import { DomaineParticulier } from '../model/DomaineParticulier';
import { Domaine } from '../model/domaine';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  domaines;
  particulier = true;
  entreprise = false;
  verifmailpart;
  verifmailentreprise;
  mailincorrect = false;

  dom;
  Domaine: Domaine = new Domaine();
  Domaine1: Domaine = new Domaine();
  Domaine2: Domaine = new Domaine();
  Domaine3: Domaine = new Domaine();
  Domaine4: Domaine = new Domaine();



  DomaineEnt: DomaineEntreprise = new DomaineEntreprise();
  DomainePar: DomaineParticulier = new DomaineParticulier();
  partic: Particulier = new Particulier();
  entrep: Entreprise = new Entreprise();
  constructor(public myService: CherserviceService,
    private http: HttpClient,
    private router: Router,
    public dialogRef: MatDialogRef<InscriptionconnexionComponent>,
  ) { }

  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = true;

  ngOnInit(): void {

    this.Domaine1.idDomaine = 0 ;
    this.Domaine2.idDomaine = 0 ;
    this.Domaine3.idDomaine = 0 ;
    this.Domaine4.idDomaine = 0 ;


    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });
  }

  visibleParticulier() {
    if (this.particulier) {
      this.particulier = false;

    } else {
      this.particulier = true;
      this.entreprise = true;
      this.visibleEntreprise();
    }
  }
  visibleEntreprise() {
    if (this.entreprise) {
      this.entreprise = false;
    } else {
      this.entreprise = true;
      this.particulier = true;
      this.visibleParticulier();
    }
  }


  addParticulier() {
    this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
      .subscribe(data => {
        this.DomainePar.domaine = data;
      }, err => {
        console.log(err);
      });

    this.partic.statut = 1;

    this.http.post<Particulier>(this.myService.lienHttp + 'particulier', this.partic)
      .subscribe(data => {
        this.DomainePar.particulier = data;
        if (!data.mail) {
          this.mailincorrect = true;
        } else {
          this.dialogRef.close();
          this.gérerlessecteursP();

        }


      }, err => {
        console.log(err);
      });
  }
  addEntreprise() {
    this.http.get(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
      .subscribe(data => {
        this.dom = data;
        this.DomaineEnt.domaine = this.dom;
      }, err => {
        console.log(err);
      });
    this.entrep.statut = 0;

    this.http.post<Entreprise>(this.myService.lienHttp + 'entreprise', this.entrep)
      .subscribe(data => {
        this.dom = data;
        if (!data.mail) {
          this.mailincorrect = true;
        } else {
          this.DomaineEnt.entreprise = this.dom;
          this.gérerlessecteursE();
          this.dialogRef.close();

        }
      }, err => {
        console.log(err);
      });
  }

  rendreNextVisible() {
    if (!this.visible1) { this.visible1 = true; } else {
      if (!this.visible2) { this.visible2 = true; } else {
        if (!this.visible3) { this.visible3 = true; } else {
          if (!this.visible4) {
            this.visible4 = true;
            this.visible5 = false;
          } else { }
        }
      }
    }
  }

  gérerlessecteursP() {
    this.http.post(this.myService.lienHttp + 'domaineParticulier', this.DomainePar)
      .subscribe(data => {
        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine1.idDomaine)
          .subscribe(data => {
            this.DomainePar.domaine = data;
            this.http.post(this.myService.lienHttp + 'domaineParticulier', this.DomainePar)
              .subscribe(data => {
                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine2.idDomaine)
                  .subscribe(data => {
                    this.DomainePar.domaine = data;
                    this.http.post(this.myService.lienHttp + 'domaineParticulier', this.DomainePar)
                      .subscribe(data => {
                        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine3.idDomaine)
                          .subscribe(data => {
                            this.DomainePar.domaine = data;
                            this.http.post(this.myService.lienHttp + 'domaineParticulier', this.DomainePar)
                              .subscribe(data => {
                                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine4.idDomaine)
                                  .subscribe(data => {
                                    this.DomainePar.domaine = data;
                                    this.http.post(this.myService.lienHttp + 'domaineParticulier', this.DomainePar)
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



  gérerlessecteursE() {
    this.http.post(this.myService.lienHttp + 'domaineEntreprise', this.DomaineEnt)
      .subscribe(data => {
        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine1.idDomaine)
          .subscribe(data => {
            this.DomaineEnt.domaine = data;
            this.http.post(this.myService.lienHttp + 'domaineEntreprise', this.DomaineEnt)
              .subscribe(data => {
                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine2.idDomaine)
                  .subscribe(data => {
                    this.DomaineEnt.domaine = data;
                    this.http.post(this.myService.lienHttp + 'domaineEntreprise', this.DomaineEnt)
                      .subscribe(data => {
                        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine3.idDomaine)
                          .subscribe(data => {
                            this.DomaineEnt.domaine = data;
                            this.http.post(this.myService.lienHttp + 'domaineEntreprise', this.DomaineEnt)
                              .subscribe(data => {
                                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine4.idDomaine)
                                  .subscribe(data => {
                                    this.DomaineEnt.domaine = data;
                                    this.http.post(this.myService.lienHttp + 'domaineEntreprise', this.DomaineEnt)
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
