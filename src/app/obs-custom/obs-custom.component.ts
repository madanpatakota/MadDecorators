import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs-custom',
  templateUrl: './obs-custom.component.html',
  styleUrls: ['./obs-custom.component.css']
})
export class ObsCustomComponent implements OnInit {

  constructor() {
  }

  SimOffersSynchronousdata = [];
  mySimOffers = [];


  SimOffersObserver(observer) {
    //let Amount = 100;
    //this.mySimOffers = ["100₹", "200₹", "300₹"];
    // setInterval(() => {
    //   observer.next(Amount + "₹");
    //   Amount = Amount + 100;
    //   if (Amount === 500) {
    //     observer.error(new Error("Got the error while calculating the offer "));
    //   }
    //   if (Amount === 300) {
    //     observer.complete();
    //   }
    // }, 1000);
  }

  SimOffersobserverOne(observer) {
    this.mySimOffers = ["100₹",null, "200₹",new Error("Some Error"),  "300₹"];
    this.mySimOffers.forEach(element => {
      if (element?.message === "Some Error") {
        observer.error("Get Error while doing calculation of the offer");
      }
      if (!element) {
        observer.complete();
      }
      observer.next(element);
    });
  }


  ngOnInit(): void {




    const SimObservable = Observable.create(this.SimOffersobserverOne);
    const SimObservable1 = new Observable<any>(this.SimOffersObserver);
    //Observable is acting as a datasource
    //Observer which is useful for emitting the data. 

    //receiving / listen the data..
    SimObservable.subscribe((myOfferPlan) => {

      this.SimOffersSynchronousdata.push(myOfferPlan);
      console.log("%c I am having the Offer now is 😃😃😃😃 " + myOfferPlan,
        'color: green; font-weight: bold;');
    }, error => {
      console.log("%c Subscriber got this error 😭😭😭😭" + error, 'color: red; font-weight: bold;');
    },
      () => {
        {
          console.log("Observer Stops the complete Operation.  🥺🥺🥺🥺");
        }
      });
  }
}

