import { Component, OnInit } from '@angular/core';
import { CherserviceService } from '../cherservice.service';
import { HttpClient } from '@angular/common/http';
import { DemandeParticipation } from '../model/DemandeParticipation';
@Component({
  selector: 'app-demande-participation-projet-utilisateur',
  templateUrl: './demande-participation-projet-utilisateur.component.html',
  styleUrls: ['./demande-participation-projet-utilisateur.component.css']
})
export class DemandeParticipationProjetUtilisateurComponent implements OnInit {

  visible = false;
  pro;
  part;
  particulier;
  constructor(
    public myService: CherserviceService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.myService.lienHttp + 'demandeParticipation').subscribe(data => {
      this.particulier = data;
      //console.log(data);
    }, err => {
      console.log(err);
    })}

consult(p){
  this.http.get(this.myService.lienHttp + 'demandeParticipation/entreprise/' + sessionStorage.getItem('idUtilisateur')
  + '/' + p.projet.idProjet ).subscribe(data => {
  this.part = data;
  console.log(data);
  this.visible=true;
}, err => {
  console.log(err);

});

}






}
