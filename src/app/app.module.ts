import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ProposerProjetUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
