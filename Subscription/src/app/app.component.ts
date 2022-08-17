import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Subscription';

  num = 0;
  
  ngOnInit(): void {
    const s = timer(0, 1000).subscribe(n=>{
      this.num = n;
      if(n === 5 ){
        s.unsubscribe();
      }
    });    
  }

  ngOnDestroy(): void {
    
  }



}
