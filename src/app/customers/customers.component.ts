import { Template } from '@angular/compiler/src/render3/r3_ast';
import {
  Component, OnInit, Input, TemplateRef, ContentChild, ViewChildren,
  //<<<<<<< Updated upstream
  QueryList, AfterViewInit, ChangeDetectorRef, EmbeddedViewRef
  //=======
  //   QueryList, AfterViewInit, ChangeDetectorRef, EmbeddedViewRef, ViewChild
  // >>>>>>> Stashed changes
} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {
  //<<<<<<< Updated upstream
  constructor(private dc: ChangeDetectorRef) {
    //=======
    //   customerTeamplateRef: string = "";
    //   constructor(private dc: ChangeDetectorRef) {
    //     this.customerTeamplateRef = 'customerTeamplate';
    // >>>>>>> Stashed changes
  }
  ngOnInit() {
  }

  // <<<<<<< Updated upstream
  //   @ViewChildren('customerTeamplate', { read: TemplateRef }) teamplateviews:
  // =======
  // customerTeamplateRef1() {
  //   this.customerTeamplateRef
  // }

  // How to create the list of component dynamically here.
  //@ViewChild("abc") _viewChildSample:TemplateRef<any>;

  //Type

  @ViewChildren("customerTeamplate", { read: TemplateRef }) teamplateviews:
    //>>>>>>> Stashed changes
    QueryList<TemplateRef<any>>;

  // TeamplatesData = [
  //   {
  //     $implict: { Location: "Hyderabad" }, Details: { ID: 1, Name: "Mad" }
  //   },
  //   {
  //     $implict: { Location: "Chennai" }, Details: { ID: 2, Name: "reddy" }
  //   },
  //   {
  //     $implict: { Location: "Bangolore" }, Details: { ID: 2, Name: "reddy" }
  //   }];


  TeamplatesData = [
    {
      Details: { ID: 1, Name: "Clerk" }
    },
    {
      Details: { ID: 2, Name: "Madan" }
    },
    {
      Details: { ID: 3, Name: "Sudheer" }
    }];

  templates: any = [];

  // @ViewChildren('customerTeamplate', { read: TemplateRef }) teamplateviews:
  //   QueryList<TemplateRef<any>>;
  // <<<<<<< Updated upstream



  //   ngAfterViewInit() {
  //     //this.templates = this.teamplateviews;

  // =======
  ngAfterViewInit() {
    //this.templates = this.teamplateviews;
    //this._viewChildSample;
    //>>>>>>> Stashed changes
    this.teamplateviews.forEach((tp, index) => {
      console.log(tp);
      this.templates.push({ template: tp, data: this.TeamplatesData[index].Details });
    });
    this.dc.detectChanges();
  }

}
