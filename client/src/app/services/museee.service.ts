import {Injectable} from "@angular/core";
import {rejects} from "assert";

@Injectable({
  providedIn:'root'
})

export class MuseeeService{

  constructor() {}

  public getAllMusee(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/api/musee', {
        method: 'GET',
        headers: { 'Content-type' : 'application/json; charset=UTF-8' }
      })
        .then((musee) => {
          musee.json().then((data) => {
            resolve(data);
          });
        })
        .catch((err) => {
          console.log('Fetch Error : ' , err);
          reject(err);
        });
    });
  }

  postMusee(nomMusee: string, adresseMusee: string, villeMusee: string, codePostalMusee: number, horaireMusee: string, tarifReduitMusee: number, tarifPleinMusee: number): any {
    return new Promise((resolve, reject) => {
      let musee = {
        "nom_musee": nomMusee,
        "adresse": adresseMusee,
        "ville": villeMusee,
        "code_postal": codePostalMusee,
        "horaires": horaireMusee,
        "tarif_reduit": tarifReduitMusee,
        "tarif_plein": tarifPleinMusee
      };
      let json = JSON.stringify(musee);
      fetch('http://localhost:8080/api/musee/', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: json,
      })
        .then((response) => {
          console.log(response);
          resolve(response.status);
        })
        .catch((err) => {
          console.log('Fetch Error : ', err);
          reject(err);
        });
    });
  }

}
