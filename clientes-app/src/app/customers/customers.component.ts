import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [
    {id:1,name:'David',surname:'Zatón',email:'ejemplo@mail.com',createdAt:'27-12-11'},
    {id:2,name:'David',surname:'Zatón',email:'ejemplo@mail.com',createdAt:'27-12-11'},
    {id:3,name:'David',surname:'Zatón',email:'ejemplo@mail.com',createdAt:'27-12-11'},
    {id:4,name:'David',surname:'Zatón',email:'ejemplo@mail.com',createdAt:'27-12-11'},
    {id:5,name:'David',surname:'Zatón',email:'ejemplo@mail.com',createdAt:'27-12-11'},
    {id:6,name:'David',surname:'Zatón',email:'ejemplo@mail.com',createdAt:'27-12-11'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
