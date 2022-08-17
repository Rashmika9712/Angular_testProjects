import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'original_code_one';

  success="success";
  error="error";
  underline="underline";
  hasError=true;
  multiclass=['success', 'underline']
}
