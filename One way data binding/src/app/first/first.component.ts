import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  text = "One way binding";
  isDisabled: boolean = false;

  onClick(){
    console.log("Button has clicked");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
