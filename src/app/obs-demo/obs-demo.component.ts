import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit {

  constructor() { }

  SimOffersSynchronousdata = [];
  mySimOffers = [];
  ngOnInit(): void {
    this.mySimOffers = ["100₹", "200₹", "300₹"];
    // Synchronous data.
    //this.mySimOffers  = http.get('http:myApplicationname.com/123');
    const SimProvider = from(this.mySimOffers);
    // Acting as a observable and from is a angular built-in observable with help of rxjs Library.
    // I have to subscribe this Simprovider. why ?


    // Here my observable 'from' contains the staticdata i.e. [1,2,3]\
    // Doubt 1 : Can i handle the data with mySimOffers with out observable here ?
    // Doubt 2 : you said observer in previous video where is that ?
    // Doubt 3 : what is import { Observable } from 'rxjs'
    // Doubt 4 : where is next , complete and error operations ?
    // Diff b/w observable and from in rxjs ?

    SimProvider.subscribe((myOfferPlan) => {
      this.SimOffersSynchronousdata.push(myOfferPlan);
      console.log(myOfferPlan);
    });





  }
}
