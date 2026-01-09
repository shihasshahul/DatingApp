import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = 'Dating App';
  protected members = signal<any>([]);
  protected memberlist :any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: (users) => {
        console.log(users);
        this.memberlist = users;
        this.members.set(users);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }
}
