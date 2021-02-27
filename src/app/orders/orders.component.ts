import { Component, OnInit, DoCheck } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  ObservableCustomer: Observable<any>;
  subjectCustomer: Observable<any>;

  localSubject = new Subject<any>();

  constructor(private _CustomerService: CustomerService) {
  //  this.ObservableCustomer = this._CustomerService.getCustomers(10);
    this.localSubject = _CustomerService.subjectOne;

  }

  ngOnInit() {
    this.localSubject.subscribe((param) => {
      console.log("ngOnint ", param);
    });
  }

  evClick() {
    this._CustomerService.getCustomersProdcuts(10);
  }

  evClick1() {
    this._CustomerService.getCustomersProdcuts(20);
  }

  evClick2(){
    this._CustomerService.getDestroy();
  }

}
