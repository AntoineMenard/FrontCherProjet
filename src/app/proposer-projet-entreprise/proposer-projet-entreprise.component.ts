import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../model/projet';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CherserviceService } from '../cherservice.service';
import { Domaine } from '../model/domaine';
import { DomaineProjet } from '../model/DomaineProjet';

@Component({
  selector: 'app-proposer-projet-entreprise',
  templateUrl: './proposer-projet-entreprise.component.html',
  styleUrls: ['./proposer-projet-entreprise.component.css']
})
export class ProposerProjetEntrepriseComponent implements OnInit {
  domaines;
  visible = false;
  p;
  Projet: Projet = new Projet();
  entreprise;
  Domaine: Domaine = new Domaine();
  Domaine1: Domaine = new Domaine();
  Domaine2: Domaine = new Domaine();
  Domaine3: Domaine = new Domaine();
  Domaine4: Domaine = new Domaine();
  DomainePro: DomaineProjet = new DomaineProjet();
  visible1 = false;
  visible2 = false;
  visible3 = false;
  visible4 = false;
  visible5 = true;
  constructor(
    private router: Router,
    private http: HttpClient,
    private dialog: MatDialog,
    public myService: CherserviceService) { }

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

    this.http.get(this.myService.lienHttp + 'entreprise/' + sessionStorage.getItem('idUtilisateur')).subscribe(data => {
      this.entreprise = data;
    }, err => {
      console.log(err);
    });

  }
  msgVisible() {
    if (this.visible === false) {
      this.visible = true;
    } else {
      this.visible = false;
    }
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

  SoumettreProjet() {

    this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine.idDomaine)
      .subscribe(data => {
        this.DomainePro.domaine = data;
      }, err => { console.log(err); });

    this.Projet.entreprise = this.entreprise;
    this.http.post<Projet>(this.myService.lienHttp + 'projet', this.Projet).subscribe(data => {
      this.DomainePro.projet = data;
      console.log(data);
      this.gérerlessecteurs();
      this.router.navigate(['/projets']);
    }, err => {
      console.log(err);
    });

  }
  gérerlessecteurs() {
    this.http.post(this.myService.lienHttp + 'domaineProjet', this.DomainePro)
      .subscribe(data => {
        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine1.idDomaine)
          .subscribe(data => {
            this.DomainePro.domaine = data;
            this.http.post(this.myService.lienHttp + 'domaineProjet', this.DomainePro)
              .subscribe(data => {
                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine2.idDomaine)
                  .subscribe(data => {
                    this.DomainePro.domaine = data;
                    this.http.post(this.myService.lienHttp + 'domaineProjet', this.DomainePro)
                      .subscribe(data => {
                        this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine3.idDomaine)
                          .subscribe(data => {
                            this.DomainePro.domaine = data;
                            this.http.post(this.myService.lienHttp + 'domaineProjet', this.DomainePro)
                              .subscribe(data => {
                                this.http.get<Domaine>(this.myService.lienHttp + 'domaine/' + this.Domaine4.idDomaine)
                                  .subscribe(data => {
                                    this.DomainePro.domaine = data;
                                    this.http.post(this.myService.lienHttp + 'domaineProjet', this.DomainePro)
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
