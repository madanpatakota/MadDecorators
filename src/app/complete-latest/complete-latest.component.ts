import { Component, Input, OnDestroy, OnInit ,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Observer, range, Subscriber, Subscription } from 'rxjs';



@Component({
  selector: 'app-complete-latest',
  templateUrl: './complete-latest.component.html',
  styleUrls: ['./complete-latest.component.css']
})
export class CompleteLatestComponent implements OnInit,OnDestroy,OnChanges {

  constructor() {
    console.log("constructor")
   }

   _CustomformGroup;
  //@Input('cusFormGroup') CustomerFormGroup;
  get CustomerFormGroup(){
    return this._CustomformGroup;
  }
  @Input('cusFormGroup') set CustomerFormGroup(val:any){
      //if(val.CustomerFormGroup.currentValue.controls["FirstName"].valueChanges.observers.length
      this._CustomformGroup = val
      const observers = this.
      _CustomformGroup.controls["FirstName"].valueChanges.observers.length
      //console.log("Input",observers);
      // if(observers>0){
      // this.CustomerFormGroup.controls["FirstName"].valueChanges.observers =
      // this.CustomerFormGroup.controls["FirstName"].valueChanges.observers.slice(0,1);
      // console.log(this.CustomerFormGroup.controls["FirstName"].valueChanges.observers);
      // }
  }
  
  @Input('data') Data;
  ngOnChanges(changes:SimpleChanges){
    const observers = changes.CustomerFormGroup.currentValue.controls["FirstName"].valueChanges.observers
    //if(observers.length>0){
      changes.CustomerFormGroup.currentValue.controls["FirstName"].valueChanges.observers =
      changes.CustomerFormGroup.currentValue.controls["FirstName"].valueChanges.observers.
      slice(0,0) 
    //}
    console.log(changes.CustomerFormGroup.currentValue.controls["FirstName"].valueChanges.observers);
  }

  
  FirstName : EventEmitter<any>;

  // get data() {
  //   return this._CustomformGroup.get('FirstName') as FormControl;
  // }

  data1: string;
  
  testObservable : Observable<any>;
  // filterNil(data) {
  //   console.log("fired");
  //   return function<T>(source: Observable<T>): Observable<T> {
  //     console.log("data",data);
  //     //source.
  //    return new Observable(subscriber => {
  //       console.log("data1",data);
  //       subscriber.next();
  //    });
  //   }
  // }
  subscription : Subscription = new Subscription();
  ngOnInit() {
    console.log("Loaded");
    this.data1 = "10";
    //this.data.valueChanges.pipe(this.filterNil(this.data)).subscribe(()=>{console.log("madan")});

     this._CustomformGroup.get('FirstName')
                        .valueChanges.subscribe((value)=>{
                             console.log(this._CustomformGroup);
                             console.log("Value Changes");
                        });
    //this.FirstName.observers[0].next

    //this.FirstName.next(this.CustomerFormGroup.get('FirstName').value)

    //range(1,5).pipe(take(1)).subscribe
    //this.CustomerFormGroup.get('FirstName').valueChanges.pipe(First)
    //this.testObservable.pipe(take)

  }

  Firstobserver(observer){
    console.log("madan");
    //break;
    //this.subscription.unsubscribe();
    //return;
  }

  ngOnDestroy(){

  }

}
function take(take: any): Subscription {
  throw new Error('Function not implemented.');
}

