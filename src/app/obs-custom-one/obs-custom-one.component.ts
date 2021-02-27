import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-obs-custom-one',
  templateUrl: './obs-custom-one.component.html',
  styleUrls: ['./obs-custom-one.component.css']
})

export class ObsCustomOneComponent {
  constructor(private _OffersService: OffersService) {
  }
  private simSubscription: Subscription;
  SimOffersSynchronousdata = [];

  txtIndex = '';

  evtSimSubcribe() {
    //Here closed will true 
    //whenever your operation is unsubscirbe of the subscription or observer complete the operation.
    if (!this.simSubscription?.closed) {
      this.SimOffersSynchronousdata = [];
      this.simSubscription = this._OffersService.getOffers(+this.txtIndex).subscribe((myOfferPlan) => {
        this.SimOffersSynchronousdata.push(myOfferPlan);
      }, error => {
        // Here you should write the error logic here. Do't pass complete as a second parameter
      }, () => {
        console.log("completed");
        this.SimOffersSynchronousdata.push("Operation has closed/Unsubscribed because null value has raised");
      });
    }
  }

  evtSimUnsubcribe() {
    this.simSubscription.unsubscribe();
    this.SimOffersSynchronousdata = [];
    this.txtIndex = '';
  }

}
