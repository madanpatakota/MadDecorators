import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval, observable, throwError } from 'rxjs';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy {

  private subscription: Subscription;


  private cusObs = new Observable<any>();

  timeObservableOne = new Observable<any>();
  constructor(private _productService: ProductService) {
    this.subscription = this._productService.productsObservable.subscribe((param) => {
      console.log(param);
    });

    this.cusObs.subscribe((observer) => {
      //Property 'next' does not exist on type 'number' you have to set observable to any only. other wise you can get error
      observer.next(10);   // next method is occured when Observable contains <any> only.
    });


    //let timeCount = 1;
    // const timeObservable = new Observable((observer) => {
    //   setInterval(() => {
    //     console.log(timeCount, " times observer/Publisher has emitted/fired/triggerd");
    //     observer.next(timeCount++);
    //     //observer.complete();
    //     if (timeCount === 4) {
    //       observer.complete();
    //     }
    //     if (timeCount === 3) {
    //       observer.error("Error has happened at Fired number " + timeCount);
    //       //Once error or complete has happend from publisher 
    //       //subscriber wo't be take from publisheer
    //     }
    //   }, 1000);
    // });

    // timeObservable.subscribe(
    //   (param) => {
    //     console.log("Subscriber/DataSource/listner/recevier Fired at ", param);
    //   },
    //   error => { console.log(error); },
    //   () => { console.log("Completed!!!!!!!!!!!!!!!!!!!!!"); });
    let timeCount = 1;
    this.timeObservableOne = new Observable((observer) => {
      setInterval(() => {
        //console.log(timeCount, " times observer/Publisher has emitted/fired/triggerd");
        observer.next(timeCount + " times observer/Publisher has emitted/fired/triggerd");
        //  observer.error("")l;
        if (timeCount === 2) {
          observer.complete(); // I am stopped/completed my observer
          // .. So my subscribeer wo't be take values
          //observer.error(new Error("Error has happened at Fired number " + timeCount));

        }
        if (timeCount === 3) {
          observer.error(new Error(" observer/Publisher giving Error , has happened at " + timeCount));
          //observer.complete();
        }
        timeCount++;
      }, 1000);
    });
    this.timeObservableOne.subscribe((param) => {
      console.log("Subscriber/DataSource/listner/recevier Gets the error from ",
        param);
    },
      error => { console.log(error); alert(error); },
      () => { console.log("Completed ... Because my observer stop to me!!!!!!!!!!!!!!!!!!!!!"); });
  }

  evtProducts() {
    //this._productService.getProducts(10);
    // this._productService.productsObservable.subscribe((observer) => {
    //   observer.next(
    //     {
    //       Sorting: 14, ProductID: 28, ProductName: "Northwoods Cranberry Sauce	",
    //       QuantityPerUnit: "12 - 12 oz jars	", UnitPrice: 40.00
    //     });
    // });

    //Here by default ProductsObservable you are trying to subscribe
    // this._productService.productsObservable.subscribe((param) => {
    //   console.log(param);
    // });

    // Here you are trying to subscribe on getProducts subscribe.
    this._productService.getProducts(10).subscribe((param) => {
      console.log(param);
    });
  }


  ngOnDestroy() {
    //this.timeObservableOne.
  }





}
