import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 count:number = 0

 Add() {
  this.count++

}
Decrease() {
  if(this.count === 0) {

  } else
  this.count--
}

Reset() {
 this.count = 0;
}

}