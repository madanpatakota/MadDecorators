import { Component, OnInit } from '@angular/core';
import { Subscription, Subscriber, Observable, ObservableLike, observable } from 'rxjs';

@Component({
  selector: 'app-obs-custom-two',
  templateUrl: './obs-custom-two.component.html',
  styleUrls: ['./obs-custom-two.component.css']
})
export class ObsCustomTwoComponent implements OnInit {

  JioRechargePlans = ["349₹", "399₹", "444₹", "555₹"];
  OTTPlatForms = ["Disney+ Hotstar", "Amazon Prime Video", "SonyLiv", "Netflix", "Voot"];
  YoutubeChannelsList = ["TheNewBoston", "GoogleDevelopers", "LearnCodeAcademy"];

  private JioSubscription: Subscription;
  private OTTSubscription: Subscription;
  private YoutubeSubscription: Subscription;

  constructor() {
   
  }

  JioObservable: Observable<any> = null;
  OTTObservable: Observable<any> = null;
  YoutubeChannelObservable: Observable<any> = null;


  //this.JioRechargePlans = ["349₹", "399₹", "444₹", "555₹"];


  CommonObserver(Sourse, observer) {
    Sourse.forEach((value) => {
      observer.next(value);
    });
  }


  ngOnInit(): void {

    this.JioObservable = new Observable<any>((observer) => {
      this.CommonObserver(this.JioRechargePlans, observer);
    });

    this.OTTObservable = new Observable<any>((observer) => {
      this.CommonObserver(this.OTTPlatForms, observer);
    });

    this.YoutubeChannelObservable = new Observable<any>((observer) => {
      this.CommonObserver(this.YoutubeChannelsList, observer);
    });
  }

  userChoice = [];
 
  subscriber(subscibeValue?) {
    return new Subscriber((value) => {
      console.log("%c Suscribed '" + value + "'", 'color:green;font-weight:bold');
      if (value === subscibeValue) {
        this.userChoice.push(value);
      }
    });
  }

  subscriberOne(subscibeValue?) {
    return new Subscriber((value) => {
      console.log("%c Suscribed '" + value + "'", 'color:green;font-weight:bold');
      if (value === subscibeValue) {
        this.userChoice.push(value);
      }
    });
  }


  JIOsubscriptionToken: Subscription;
  OTTSubscriptionToken: Subscription;
  YoutubeChannelsSubscriptionToken: Subscription;

  evtSubscribe() {
    //One subscriber is doing multi Observers means providers or platforms.
    //Each subscribe needs maintain one subscription.
    this.JIOsubscriptionToken = this.JioObservable.subscribe(this.subscriber("349₹"));
    this.OTTSubscriptionToken = this.OTTObservable.subscribe(this.subscriber("Netflix"));
    this.YoutubeChannelsSubscriptionToken = this.YoutubeChannelObservable.subscribe(this.subscriber("GoogleDevelopers"));

  }

  evtUnSubscribe() {
    this.JIOsubscriptionToken.unsubscribe();
    this.OTTSubscriptionToken.unsubscribe();
    this.YoutubeChannelsSubscriptionToken.unsubscribe();
  }

}
