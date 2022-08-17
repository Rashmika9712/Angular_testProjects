import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Async await promise';

  async ngOnInit() {
        
    console.log("Initiated");

    const value = new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is the response");
      }, 2000);
    });

    const response = await value 
    console.log(response);

    console.log("End");
  }
   

}
