import {Injectable} from "@angular/core";
import {rejects} from "assert";

@Injectable({
  providedIn:'root'
})

export class ThemesService{

  constructor() {}

  public getAllThemes(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/api/theme/', {
        method: 'GET',
        headers: { 'Content-type' : 'application/json; charset=UTF-8' }
      })
        .then((response) => {
          response.json().then((data) => {
            resolve(data);
          });
        })
        .catch((err) => {
          console.log('Fetch Error : ' , err);
          reject(err);
        });
    });

  }

}
