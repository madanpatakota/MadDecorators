import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }


  Products = [];
  ngOnInit(): void {
    this.Products =
      [{ Sorting: 1, ProductID: 1, ProductName: "Chai	", QuantityPerUnit: "10 boxes x 20 bags", UnitPrice: 18.00 },
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
  }
}
