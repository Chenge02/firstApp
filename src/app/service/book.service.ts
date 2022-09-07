import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResults {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getTopRatedBooks(page = 1): Observable<ApiResults> {
    return this.http.get<ApiResults>(
      `${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }
  getBookDetails(id: string) {
    return this.http.get<any>(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }
  searchBook(value: string) {
    return this.http.get<any>(
      `${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&query=${value}`
    );
  }
}
