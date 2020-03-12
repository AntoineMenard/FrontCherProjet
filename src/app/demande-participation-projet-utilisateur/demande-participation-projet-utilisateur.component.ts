import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { DemandeParticipation } from '../model/DemandeParticipation';
import { Participation } from '../model/participation';
@Component({
  selector: 'app-demande-participation-projet-utilisateur',
  templateUrl: './demande-participation-projet-utilisateur.component.html',
  styleUrls: ['./demande-participation-projet-utilisateur.component.css']
})
export class DemandeParticipationProjetUtilisateurComponent implements OnInit {
  part;
  part2;
  del;
  entreprise;
  projet;
  participe;
  particulier;
  particulier2;
  idParticulier;
  participation: Participation = new Participation();
  constructor(
    public myService: CherserviceService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'demandeParticipation/entreprise/' + sessionStorage.getItem('idUtilisateur')
    + '/' + sessionStorage.getItem('validerProjet') ).subscribe(data => {
    this.part = data;
    console.log(data);
  }, err => {
    console.log(err);
  });

}

supprimerCandidature(p){
  this.http.delete(this.myService.lienHttp
    + 'demandeParticipation/' + p.idParticipation).subscribe(data => {
      window.location.reload();
      p.del = data;
      console.log(data);
}, err => {
  console.log(err);

});
}

accepterCandidature(p){

  this.http.get(this.myService.lienHttp + 'entreprise/' + sessionStorage.getItem('idUtilisateur')).subscribe(data => {
    p.entreprise = data;
    this.participation.entreprise = p.entreprise; 
    this.http.get(this.myService.lienHttp + 'projet/' + sessionStorage.getItem('validerProjet')).subscribe(data => {
    p.projet = data;
    this.participation.projet = p.projet;
    this.participation.particulier = p.particulier;  
    this.http.post(this.myService.lienHttp + 'participation/', this.participation).subscribe(data => {
    console.log(data);
    this.supprimerCandidature(p);
  }, err => {
    console.log(err);
  });
  }, err => {
    console.log(err);
  });
  }, err => {
    console.log(err);
  });
  
}



changeForm(img) {
  console.log(window.atob(img));
  return window.atob(img);
}


}
