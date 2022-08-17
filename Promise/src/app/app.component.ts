import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Using Promise';

  ngOnInit(): void {   

    console.log('Initiated');

    const value = new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve("This is resolve");
      },2000);
    });

    function firstThen(response: any){
      console.log('1st then executed');
      return new Promise(function(resolve, reject){
        setTimeout(() => {
          resolve(response + " Ok")
        },2000);        
      })
    }

    function secThen(value: any){
      console.log('2nd then executed');
      console.log(value);
    }

    value
    .then(firstThen)
    .then(secThen)
    .catch(function(error){
      console.log('ERROR: ', error);
    });   
    
  }
}
