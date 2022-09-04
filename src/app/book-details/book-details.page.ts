import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {
  book = null;
  imageBaseUrl = environment.images;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookDetails(id).subscribe((res) => {
      console.log(res);
      this.book = res;
    });
  }

}
