import { Component, OnInit } from '@angular/core';
import { Visitor } from '../models/visitor';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  visitor: Visitor = new Visitor();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.visitor);
    this.visitor = new Visitor();
  }

}
