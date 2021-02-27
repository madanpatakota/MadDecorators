import {
  Component, OnInit, AfterViewInit
} from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, of, from, throwError, observable, Subject } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {

  constructor() {
    // this.customerListThree.subscribe(x => {
    //   console.log(x);
    // });
    //this.customerListThree = new Observable();
  }

  // customersListOne = new Observable(this.observerCustomers);

  // customerListTwo : Observable<string>;

  // customerListSubject = new Subject();


  // observerCustomers(observer: any): void;
  // observerCustomers(obs) {
  //   const args = arguments;
  //   obs.next(10);
  // }

  // next() {
  //   console.log("");
  // }


  //  myFunction(param1) { }

  //customerObs = new Observable();



  //customerListThree: Observable<string> = new Observable();
  customerListThree = new Subject();


  btnClick() {
    //this.customersListOne = new Observable(this.observerCustomers);
    //this.customerListSubject.next(20);
    //this.ARoute.params.
    //this.customerListTwo.pipe()
    this.customerListThree.next("jl");
  }


  ngAfterViewInit() {
    // this.customersListOne.subscribe((observer)=>{
    // });
    //this.observerCustomers()

    // this.observerCustomers(ob){

    // }
    //this.customerListSubject.next(10);
  }


  ngOnInit() {
    this.customerListThree.subscribe(x => {
      console.log(x);
    });
    // this.customersListOne.subscribe({
    //   next(p) {
    //     console.log(p);
    //   },
    //   error(p) {
    //     console.log("error happened");
    //     console.log(p);
    //   },
    //   complete() {
    //     console.log("completed");
    //   }
    // });
    // //customersList = from([1, 2, 3, 4]);
    // this.customerListSubject.subscribe((value) => {
    //   console.log(value);
    // });
  }


}
