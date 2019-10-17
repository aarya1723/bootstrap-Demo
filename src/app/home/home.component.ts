import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name:string="Lavanya";  
  a:number=10;
  b:number=11;
  animals:Array<string|number>=[1,"cat","dog","rat"];
  data:object={
    name:"Mahesh",
    age:25,
  }
  dataRecord:Array<object>=[
    {
      name:"Malli",
      age:25,
      cell:9657396432,
    },
    {
      name:"Mahesh",
      age:25,
      cell:9657397747,
    },
    {
      name:"Malli",
      age:25,
      cell:9657396432,
    },
    {
      name:"Mahesh",
      age:25,
      cell:9657397747,
    },
    {
      name:"Malli",
      age:25,
      cell:9657396432,
    },
    {
      name:"Mahesh",
      age:25,
      cell:9657397747,
    }
  ];

  test(){
    alert("Haiii.....");
  }

  homeimg:string="../assets/images/edu1.jpg";

  constructor() { }

  ngOnInit() {
   
  }

}
