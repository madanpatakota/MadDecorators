import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  mySimOffers = [];

  constructor() {
    this.mySimOffers = ["100₹", "200₹", "300₹", "400₹", null, "600₹", "700₹"];
  }

  getOffers(txtIndex): Observable<any> {
    return new Observable<any>((observer) => {
      this.mySimOffers.forEach((Offer, index) => {
        if (index < txtIndex) {
          if (!Offer) {
            //.................Focus on this step because 
            //you have to know diff b/w unsubscribe and complete() operation.........
            observer.complete();
          }
          observer.next(Offer);
        }
      });
    });
  }
}
