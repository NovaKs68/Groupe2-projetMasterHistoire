import {Injectable} from "@angular/core";
import {rejects} from "assert";

@Injectable({
  providedIn:'root'
})

export class ExpositionService{

  constructor() {}

  public getAllExposition(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/api/exposition/', {
        method: 'GET',
        headers: { 'Content-type' : 'application/json; charset=UTF-8' }
      })
        .then((exposition) => {
          exposition.json().then((data) => {
            resolve(data);
          });
        })
        .catch((err) => {
          console.log('Fetch Error : ' , err);
          reject(err);
        });
    });
  }

  postExposition(nomExposition: string, dateDebutExposition: Date, dateFinExposition: Date, tarifExposition: number, ageExposition: string, idMusee: number, idTheme: number): any {
    return new Promise((resolve, reject) => {
      let exposition = {
        "nom_exposition": nomExposition,
        "date_debut": dateDebutExposition,
        "date_fin": dateFinExposition,
        "tarif": tarifExposition,
        "tranche_age": ageExposition,
        "id_musee": idMusee,
        "id_theme": idTheme
      };
      let json = JSON.stringify(exposition);
      fetch('http://localhost:8080/api/exposition/', {
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
