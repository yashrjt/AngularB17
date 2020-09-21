import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  studentName:string='John';
  cityName:string='San Jose';
  imgSrc:string='../../assets/mickey.jpeg';
  booleanVar:boolean=false;

  studentArr:Array<any>=[
    {
      "studentId":123,
      "studentName":"John",
      "studentActive":true,
      "studentDOb":'Oct-29-2000',
      "fees":3000,
      "studentFile":'3000'
    },
    {
      "studentId":456,
      "studentName":"Dave",
      "studentActive":false,
      "studentDOb":'Aug-29-2000',
      "fees":3000,
      "studentFile":'2000'
    },
    {
      "studentId":789,
      "studentName":"Kenny",
      "studentActive":true,
      "studentDOb":'Sep-29-2000',
      "fees":3000,
      "studentFile":'1800'
    },
    {
      "studentId":122,
      "studentName":"Lilly",
      "studentActive":false,
      "studentDOb":'July-29-2000',
      "fees":3000,
      "studentFile":'1230'
    }
  ]


  constructor() {
    console.log('this is constructor')
   }

  ngOnInit() {
    console.log('this is ngoninit')
  }


  submit(){
    console.log('you clicked the button')
  }
}
