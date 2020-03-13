import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Projet } from '../model/projet';
import { MatDialogRef } from '@angular/material/dialog';
import { Domaine } from '../model/domaine';
import { DomaineProjet } from '../model/DomaineProjet';


@Component({
  selector: 'app-modif-projet-entreprise',
  templateUrl: './modif-projet-entreprise.component.html',
  styleUrls: ['./modif-projet-entreprise.component.css']
})
export class ModifProjetEntrepriseComponent implements OnInit {
  domaines;
  idProjet = sessionStorage.getItem('modifProjet');
  projet;
  projetmodif: Projet = new Projet();
  nomProjet;
  descriptifProjet;
  dateDebutProjet;
  dateFinProjet;
  nbrParticipantsProjet;
  interessementProjet;
  Domaine: Domaine = new Domaine();
  Domaine1: Domaine = new Domaine();
  Domaine2: Domaine = new Domaine();
  Domaine3: Domaine = new Domaine();
  Domaine4: Domaine = new Domaine();
  DomainePro: DomaineProjet = new DomaineProjet();
  DomainePro1: DomaineProjet = new DomaineProjet();
  DomainePro2: DomaineProjet = new DomaineProjet();
  DomainePro3: DomaineProjet = new DomaineProjet();
  DomainePro4: DomaineProjet = new DomaineProjet();
  domainesProjet;
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    public myService: CherserviceService,
    public dialogRefr: MatDialogRef<ModifProjetEntrepriseComponent>,

  ) { }

  ngOnInit(): void {

    this.http.get(this.myService.lienHttp + 'domaineProjet/' + this.idProjet).subscribe(data => {
      this.domainesProjet = data;
      this.DomainePro = this.domainesProjet[0];
      this.DomainePro1 = this.domainesProjet[1];
      this.DomainePro2 = this.domainesProjet[2];
      this.DomainePro3 = this.domainesProjet[3];
      this.DomainePro4 = this.domainesProjet[4];

      if (this.DomainePro1.domaine.idDomaine !== 1) { this.visible1 = true; }
      if (this.DomainePro2.domaine.idDomaine !== 1) { this.visible2 = true; }
      if (this.DomainePro3.domaine.idDomaine !== 1) { this.visible3 = true; }
      if (this.DomainePro4.domaine.idDomaine !== 1) { this.visible4 = true;  this.visible5 = false; }
      


    }, err => {
      console.log(err);
    });


    this.http.get(this.myService.lienHttp + 'domaine').subscribe(data => {
      this.domaines = data;
    }, err => {
      console.log(err);
    });

    this.http.get(this.myService.lienHttp + "projet/" + this.idProjet)
      .subscribe(data => {
        this.projet = data;
        this.nomProjet = this.projet.nom;
        this.descriptifProjet = this.projet.descriptif;
        this.dateDebutProjet = this.projet.dateDebut;
        this.dateFinProjet = this.projet.dateFin;
        this.nbrParticipantsProjet = this.projet.nbrParticipants;
        this.interessementProjet = this.projet.interessement;
        this.projetmodif = this.projet;
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
          } else { this.visible5 = false; }
        }
      }
    }
  }

  modifProjet() {



        this.http.put<Projet>(this.myService.lienHttp + 'projet/' + this.idProjet, this.projetmodif)
          .subscribe(data => {
            this.DomainePro.projet = data;

            console.log(this.DomainePro);
            console.log(this.projetmodif.idProjet);


            this.dialogRefr.close();
            window.location.reload();

          }, err => { console.log(err); });






  }


  gérerlessecteurs() {
    this.http.put(this.myService.lienHttp + 'projetDomaine/' + this.DomainePro.id, this.DomainePro)
      .subscribe(data => {
        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine1.idDomaine)
          .subscribe(data => {
            this.DomainePro1.domaine = data;
            this.http.put(this.myService.lienHttp + 'projetDomaine/' + this.DomainePro1.id, this.DomainePro1)
              .subscribe(data => {
                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine2.idDomaine)
                  .subscribe(data => {
                    this.DomainePro2.domaine = data;
                    this.http.put(this.myService.lienHttp + 'projetDomaine/' + this.DomainePro2.id, this.DomainePro2)
                      .subscribe(data => {
                        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine3.idDomaine)
                          .subscribe(data => {
                            this.DomainePro3.domaine = data;
                            this.http.put(this.myService.lienHttp + 'projetDomaine/' + this.DomainePro3.id, this.DomainePro3)
                              .subscribe(data => {
                                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine4.idDomaine)
                                  .subscribe(data => {
                                    this.DomainePro4.domaine = data;
                                    this.http.put(this.myService.lienHttp + 'projetDomaine/' + this.DomainePro4.id, this.DomainePro4)
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
