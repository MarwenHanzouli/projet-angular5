import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AppareilService {
  appareilsSubject = new Subject<any[]>();
  appareils = [
      // {
      //   id: 1,
      //   name: 'Machine à laver',
      //   status: 'éteint'
      // },
      // {
      //   id: 2,
      //   name: 'Frigo',
      //   status: 'allumé'
      // },
      // {
      //   id: 3,
      //   name: 'Ordinateur',
      //   status: 'éteint'
      // }
  ];
  constructor(private httpClient: HttpClient){}
  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'éteint';
      }
  }
  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
  }
  switchOffOne(i: number) {
      this.appareils[i].status = 'éteint';
  }
  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
  }
  saveAppareilsToServer() {
    this.httpClient
      .put('https://gestion-appareils-18742.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://httpclient-demo.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
