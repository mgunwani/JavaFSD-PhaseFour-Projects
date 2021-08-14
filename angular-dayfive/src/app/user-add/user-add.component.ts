import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user: User = new User();

  constructor(private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  addUser() {
    this._http.post('https://jsonplaceholder.typicode.com/users', this.user).subscribe(result => {
      alert('User Added Successfully.');
      console.log(result);
      this._router.navigate(['/users']);
    }, (error) => {
      console.log(error)
    })

  }

}
