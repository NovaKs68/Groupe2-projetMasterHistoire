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

}
