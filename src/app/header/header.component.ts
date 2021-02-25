import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // public namemy = "Anand";
  // public success = "success";
  // public isDisabled = false;
  // public hasError = true;
  // public isStyle = true;
  // public eventBinding = "";

  // public multipleClasses = {
  //   "success": !this.hasError,
  //   "danger": this.hasError,
  //   "italic": this.isStyle
  // }
  // public multipleStyles = {
  //   color: "blue",
  //   border: "1px solid blue",
  //   padding: "20px"
  // }
  public objects = [
    {
      id: 1,
      name: 'Anand',
      email: "and@xyz.com"
    },
    {
      id: 2,
      name: 'Nin cheppa',
      email: "and@xyz.com"
    },
    {
      id: 3,
      name: 'Cherukula',
      email: "and@xyz.com"
    },
    {
      id: 4,
      name: 'Vishnu',
      email: "and@xyz.com"
    },
    {
      id: 5,
      name: 'Anirudh',
      email: "and@xyz.com"
    },
  ]

  @Input("sendData") public data = "";
  @Output() public childData = new EventEmitter();

  public twoWaytBing:String = "";

  public location = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * method
   */

  /**
   * sendClidDataToParent
   */
  public sendClidDataToParent() {
    this.childData.emit("Hello Data From Child");
  }

  // public method() {

  //   this.namemy = "New Name";
  // }

  /**
   * clickEvent
   */
  // public clickEvent(event: any) {
  //   console.log(event)
  //   this.eventBinding = "Button Clicked";
  // }

}
