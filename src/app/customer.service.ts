import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }


  GetProducts(param) {
    // return new Observable<any>((obs) => {
    //   const FilterdData = this.Products.filter(x => x.ProductID === param);
    //   obs.next(FilterdData);
    // });
  }

  
  subjectOne = new Subject<any>();
  getCustomersProdcuts(param) {
    this.subjectOne.next(param);
  }

  getDestroy() {
    this.subjectOne.unsubscribe();
  }

}

