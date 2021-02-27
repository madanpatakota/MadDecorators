import { Component, OnInit, Input, TemplateRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  messagePromise: Promise<string>;
  //CustomerName: Subscription;
  ngOnInit() {
    this.messagePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("MadanMohan");
      }, 3000);
    });
  }
  GetCustomer() {
    this.messagePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Madan Mohan Reddy");
      }, 2000);
    });

  }

  @Input('ordersTemplate') ordersTemplateInputRef:TemplateRef<any>;
  @ContentChild('contentCustomer') 
  contentCustomerRef:TemplateRef<any>;

  


}
