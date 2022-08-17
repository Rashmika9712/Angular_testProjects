import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Styles binding, bind CSS dynamically to html elements';

  isDisabled=true;
  textId = 'sampleId'

  testStyle1 = "color:green; font-style:italic";
  testStyle2 = {'color': 'blue', 'font-style' : 'italic'};
}
