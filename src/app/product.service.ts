import { Injectable } from '@angular/core';
import { Observable, observable, interval } from 'rxjs';

export class IProduct {
  Sorting: number;
  ProductID: number;
  ProductName: string;
  QuantityPerUnit: string;
  UnitPrice: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products: IProduct[] =
    [{
      Sorting: 1, ProductID: 1, ProductName: "Chai	", QuantityPerUnit: "10 boxes x 20 bags",
      UnitPrice: 18.00
    },
    { Sorting: 2, ProductID: 2, ProductName: "Chang	", QuantityPerUnit: "24 - 12 oz bottles	", UnitPrice: 19.00 },
    { Sorting: 3, ProductID: 3, ProductName: "Aniseed Syrup	", QuantityPerUnit: "12 - 550 ml bottles	", UnitPrice: 10.00 },
    { Sorting: 4, ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning	", QuantityPerUnit: "48 - 6 oz jars	", UnitPrice: 22.00 },
    { Sorting: 5, ProductID: 5, ProductName: "Chef Anton's Gumbo Mix	", QuantityPerUnit: "36 boxes	", UnitPrice: 21.35 },
    { Sorting: 6, ProductID: 6, ProductName: "Grandma's Boysenberry Spread	", QuantityPerUnit: "12 - 8 oz jars	", UnitPrice: 25.00 },
    { Sorting: 7, ProductID: 7, ProductName: "Uncle Bob's Organic Dried Pears	", QuantityPerUnit: "12 - 1 lb pkgs.	", UnitPrice: 30.00 },
    { Sorting: 8, ProductID: 8, ProductName: "Northwoods Cranberry Sauce	", QuantityPerUnit: "12 - 12 oz jars	", UnitPrice: 40.00 },
    { Sorting: 9, ProductID: 9, ProductName: "Mishi Kobe Niku	", QuantityPerUnit: "18 - 500 g pkgs.	", UnitPrice: 97.00 },
    { Sorting: 10, ProductID: 10, ProductName: "Ikura	", QuantityPerUnit: "12 - 200 ml jars	", UnitPrice: 31.00 },
    { Sorting: 11, ProductID: 15, ProductName: "Chef Anton's Gumbo Mix	", QuantityPerUnit: "36 boxes	", UnitPrice: 21.35 },
    { Sorting: 12, ProductID: 26, ProductName: "Grandma's Boysenberry Spread	", QuantityPerUnit: "12 - 8 oz jars	", UnitPrice: 25.00 },
    { Sorting: 13, ProductID: 17, ProductName: "Uncle Bob's Organic Dried Pears	", QuantityPerUnit: "12 - 1 lb pkgs.	", UnitPrice: 30.00 },
    { Sorting: 14, ProductID: 28, ProductName: "Northwoods Cranberry Sauce	", QuantityPerUnit: "12 - 12 oz jars	", UnitPrice: 40.00 }];

  constructor() {
    console.log("fired");
  }
  products = new Observable<string>();


  HandleError(error) {
    return "Exception has raised";
  }
  Complete() {
    return "Task is completed";
  }


  //You have to declare the Observable whenever you are declaring same postion you have to decalare
  //Do't split observable code into 2 parts
  //Always focus that next should be in service. YOu have to give the data to the component
  //Component should subscribe the data.
  //Create Interfaces or classes as separte files.
  //Understading data?
  // Mind that when you are trying to call default next in service
  // U have to write for next in event....

  // productsObservable = new Observable((observer) => {
  //   return observer.next(this.HandleData());
  // });

  ProductObserver(Observer) {
    //const data = this.HandleData();
    Observer.next(this.HandleData());
  }

  HandleData(data?: IProduct) {
    console.log("OK", data);
    return this.Products.filter(x => x.ProductID === data?.ProductID)
      ? ["NoData"] : this.products;
  }


  productsObservable = new Observable((observer)=>{
    observer.next(this.HandleData());
  });

  getProducts(data) {
    // this.productsObservable.subscribe((observer) => {
    //   observer.next(
    //     {
    //       Sorting: 14, ProductID: 28, ProductName: "Northwoods Cranberry Sauce	",
    //       QuantityPerUnit: "12 - 12 oz jars	", UnitPrice: 40.00
    //     });
    // });

  


    return new Observable(observer => {
      observer.next(this.HandleData(data)),
        observer.error(this.HandleError),
        observer.complete();
    });
  }
}
