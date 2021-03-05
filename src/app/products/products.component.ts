import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  //encapsulation:ViewEncapsulation.ShadowDom
})
export class ProductsComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor() { }

  //_ProductQuanity= "ProductQuantity" as string || "";

  @ContentChild("ProductQuantity") cProductQuantity: string;


  @ViewChild("ProductName") cProductName: ElementRef;

  ///By default if you refer the tempalte varaible then i.e. ElementRef only.....

  ngOnInit(): void {
    //console.log(this.cProductQuantity.nativeElement.value);
  }

  ngAfterViewInit() {
    console.log("After view init", this.cProductQuantity);
    const ProdutCast: any = this.cProductQuantity as unknown;
    console.log(ProdutCast);
  }

  ngAfterContentInit() {
    console.log("After content init", this.cProductQuantity);
    console.log("After Content Init" , this.cProductName.nativeElement);
  }




}
