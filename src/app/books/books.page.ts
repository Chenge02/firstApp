import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books = [];
  currentPage = 1;
  imageBaseUrl = environment.images;
  searchTerm: string;

  constructor(
    private bookService: BookService,
    private loadingCtrl: LoadingController,
    public httpClient: HttpClient
  ) { }

  ngOnInit() {
    //this.loadBooks();
  }
  async loadBooks() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'circles',
    });
    await loading.present();

    this.bookService.getTopRatedBooks(this.currentPage).subscribe(res => {
      loading.dismiss();
      this.books = [...this.books, ...res.results];
      console.log(res);
    })
  }

  searchBook(searchTerm) {
    console.log(searchTerm)
    this.bookService.searchBook(this.searchTerm).subscribe(res =>{
      this.books = [...this.books, ...res.results];
      console.log(res);
    });
  }
  onCancel() {
    console.log('CANCEL');
  }

}
