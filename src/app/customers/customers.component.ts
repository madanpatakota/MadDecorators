import {
  Component, Output, EventEmitter, Input, OnChanges, SimpleChange, SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnChanges {

  EmpName = '';

  constructor() {
  }

  get orderName() {
    console.log("get is executed");
    return this.EmpName;
  }

  @Input('Ordersname')
  set orderName(orderName) {
    console.log("set is executed");
    if(orderName  === undefined){
      this.EmpName = "No name is defined";
    }
    this.EmpName = orderName;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.EmpName = this.orderName;
    console.log(changes);
  }

  EmpLocation = '';
  @Output() CustomerLocationEvent = new EventEmitter<string>();
  evtSend(EmpLocation: string) {
    this.CustomerLocationEvent.emit(EmpLocation);
  }
}
