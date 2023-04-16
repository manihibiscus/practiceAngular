import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AAAAAA',
  templateUrl: './AAAAAA.component.html',
  styleUrls: ['./AAAAAA.component.css']
})
export class AAAAAAComponent implements OnInit {

  constructor(private http:HttpClient) { }
  countries:any=''
  cities:any=''
  ngOnInit() {
    this.http.get<any>("http://localhost:3000/countries").subscribe(data=>{
      this.countries=data;
    })
    this.http.get<any>("http://localhost:3000"+'/'+this.countries).subscribe()
}
value:any='';
onCountrySelected(country:any){
alert(country);
}
}
