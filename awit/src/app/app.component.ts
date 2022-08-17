import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Async and await';
  users:any="";

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.http.get("https://reqres.in/api/users?page=2")
    .subscribe((res:any)=> (this.users = res.data));
  }
}
