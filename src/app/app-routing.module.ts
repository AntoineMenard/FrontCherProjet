import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';
import { ProfilEntrepriseComponent } from './profil-entreprise/profil-entreprise.component';
import { DemandesUtilisateursComponent } from './demandes-utilisateurs/demandes-utilisateurs.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProposerProjetEntrepriseComponent } from './proposer-projet-entreprise/proposer-projet-entreprise.component';
import { RechercheEntrepriseComponent } from './recherche-entreprise/recherche-entreprise.component';
import { RechercheProjetComponent } from './recherche-projet/recherche-projet.component';
import { ProposerProjetUtilisateurComponent } from './proposer-projet-utilisateur/proposer-projet-utilisateur.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'login', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'profil-utilisateur', component: ProfilUtilisateurComponent},
  {path: 'profil-entreprise', component: ProfilEntrepriseComponent},
  {path: 'demandes-utilisateurs', component: DemandesUtilisateursComponent},
  {path: 'messagerie', component: MessagerieComponent},
  {path: 'projets', component: ProjetsComponent},
  {path: 'proposer-projet-entreprise', component: ProposerProjetEntrepriseComponent},
  {path: 'recherche-entreprise', component: RechercheEntrepriseComponent},
  {path: 'recherche-projet', component: RechercheProjetComponent},
  {path: 'proposer-projet-utilisateur', component: ProposerProjetUtilisateurComponent},
  {path: 'home-page', component: HomepageComponent},

  { path: '', redirectTo: '/home-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

