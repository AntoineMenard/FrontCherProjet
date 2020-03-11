import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';
import { ProfilEntrepriseComponent } from './profil-entreprise/profil-entreprise.component';
import { ProposerProjetEntrepriseComponent } from './proposer-projet-entreprise/proposer-projet-entreprise.component';
import { ProjetsComponent } from './projets/projets.component';
import { DemandesUtilisateursComponent } from './demandes-utilisateurs/demandes-utilisateurs.component';
import { RechercheProjetComponent } from './recherche-projet/recherche-projet.component';
import { RechercheEntrepriseComponent } from './recherche-entreprise/recherche-entreprise.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProposerProjetUtilisateurComponent } from './proposer-projet-utilisateur/proposer-projet-utilisateur.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InscriptionconnexionComponent } from './inscriptionconnexion/inscriptionconnexion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModifProfilEntrepriseComponent } from './modif-profil-entreprise/modif-profil-entreprise.component';
import { ProjetsParticulierComponent } from './projets-particulier/projets-particulier.component';
import { ModifProjetEntrepriseComponent } from './modif-projet-entreprise/modif-projet-entreprise.component';
import { DemandeParticipationProjetUtilisateurComponent } from './demande-participation-projet-utilisateur/demande-participation-projet-utilisateur.component';
import { ModifProfilParticulierComponent } from './modif-profil-particulier/modif-profil-particulier.component';
import { FiltreNomProjet } from './filtre-nom-projet.pipe';
import { FiltreNomEntreprise } from './filtre-nom-entreprise.pipe';
import { TriParDate } from './tri-projet-par-date.pipe';
import { GestionComponent } from './gestion/gestion.component';
import { FiltreEntrepriseParNom} from './filtre-entreprises-par-nom.pipe';
import { DemoComponent } from './demo/demo.component';
import { ModifEtapeComponent } from './modif-etape/modif-etape.component';
import { ReceptionMessageParticulierComponent } from './reception-message-particulier/reception-message-particulier.component';
import { EnvoiMessageParticulierComponent } from './envoi-message-particulier/envoi-message-particulier.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilUtilisateurComponent,
    ProfilEntrepriseComponent,
    ProposerProjetEntrepriseComponent,
    ProjetsComponent,
    DemandesUtilisateursComponent,
    RechercheProjetComponent,
    RechercheEntrepriseComponent,
    MessagerieComponent,
    ConnexionComponent,
    InscriptionComponent,
    ProposerProjetUtilisateurComponent,
    HomepageComponent,
    InscriptionconnexionComponent,
    ModifProfilEntrepriseComponent,
    ProjetsParticulierComponent,
    ModifProjetEntrepriseComponent,
    DemandeParticipationProjetUtilisateurComponent,
    ModifProfilParticulierComponent,
    FiltreNomProjet,
    FiltreNomEntreprise,
    TriParDate,
    GestionComponent,
    FiltreEntrepriseParNom,
    DemoComponent,
    ModifEtapeComponent,
    ReceptionMessageParticulierComponent,
    EnvoiMessageParticulierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  entryComponents: [InscriptionconnexionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
