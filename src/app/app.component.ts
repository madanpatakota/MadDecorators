import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'AngularDemos';

  customerName = "John";

  evtCustomer() {
    this.customerName = "John smith";
  }

  // tslint:disable-next-line: no-inferrable-types
  details:string = "No content is here";
  //this.CustomerLocationEvent.emit(EmpLocation);
  evtCustomerLocation(Locdetails) {
    this.details = Locdetails;
  }

}
