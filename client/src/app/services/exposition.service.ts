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

}
