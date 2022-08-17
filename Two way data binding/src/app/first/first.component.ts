import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title: string = 'Two way data binding';

  constructor() { }

  ngOnInit(): void {
  }

}
