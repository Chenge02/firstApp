import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.baseUrl;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  bookInfo: any;

  constructor(
    public httpClient: HttpClient
  ) {
    this.loadData();
   }

  ngOnInit() {
  }

  loadData() {
    this.httpClient.get(`${apiUrl}/volumes?q=${"flower"}+intitle:keyes&key=${apiKey}`).subscribe(results =>{
      this.bookInfo = results['volumeInfo'];
      console.log(this.bookInfo)
    })
  }

}
