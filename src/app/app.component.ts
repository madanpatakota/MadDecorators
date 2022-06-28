import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'AngularDemos';

  customerName = "John";
  //customerFormGroup:FormGroup;

  evtCustomer() {
    this.customerName = "John smith";
  }

  // tslint:disable-next-line: no-inferrable-types
  details:string = "No content is here";
  //this.CustomerLocationEvent.emit(EmpLocation);
  evtCustomerLocation(Locdetails) {
    this.details = Locdetails;
  }

  constructor(){
    
  }
  customerFormGroup = new FormGroup({
    'FirstName' : new FormControl()
  })
    
  items : Observable<any>;
  itemsSync = [];
  ngOnInit(){
     this.itemsSync = [1,2,3,4];
     //this.
     this.items = of([1],[2],[3],[4],[5],[6]);
  }


}
