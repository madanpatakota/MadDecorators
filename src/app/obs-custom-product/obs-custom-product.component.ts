import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-obs-custom-product',
  templateUrl: './obs-custom-product.component.html',
  styleUrls: ['./obs-custom-product.component.css']
})
export class ObsCustomProductComponent implements OnDestroy {


  private subscription: Subscription;

  constructor(private _productService: ProductService) {
    this.subscription = this._productService.productsObservable.subscribe((param) => {
      console.log(param);
    });
  }
  
  OTTsProviders = ["NetFlex", "AmazonPrime", "Aha"];

  // MoviesSubscribe = new Observable<any>((observer) => {
  //   this.OTTsProviders.forEach(element => {
  //     if (!element) {
  //       observer.complete();
  //     }
  //     observer.next(element);
  //   });
  //   observer.next("First Movie");
  // });

  //private _subscription = this._OffersService.

  evtProducts() {
    this.subscription = this._productService.getProducts(10).subscribe((param) => {
      console.log(param);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
