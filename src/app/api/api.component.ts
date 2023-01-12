import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  li:any;
  breweries:any =[];
  input = '84003'
  secondInput =''
  constructor(private http : HttpClient){
     
}

onSearchChange(searchValue: any): void {  
  this.secondInput = searchValue.target.value

}

changeZip() {
  this.http.get(`https://api.zippopotam.us/us/${this.secondInput}`)
    .subscribe(Response => {
      if(Response){ 
      }
      this.breweries=Response;
    });

}
 
  ngOnInit(): void {
    this.http.get(`https://api.zippopotam.us/us/${this.input}`)
    .subscribe(Response => {
      if(Response){ 
      }
      console.log(Response)
      this.breweries=Response;
    });
  }}