import {
  Component, OnInit, Input, TemplateRef, ContentChild, ViewChildren,
  QueryList, AfterViewInit, ChangeDetectorRef, EmbeddedViewRef
} from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {
  constructor(private dc: ChangeDetectorRef) {
  }
  ngOnInit() {
  }

  @ViewChildren('customerTeamplate', { read: TemplateRef }) teamplateviews:
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



  ngAfterViewInit() {
    //this.templates = this.teamplateviews;

    this.teamplateviews.forEach((tp, index) => {
      console.log(tp);
      this.templates.push({ template: tp, data: this.TeamplatesData[index].Details });
    });
    this.dc.detectChanges();
  }

}
