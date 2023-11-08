import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  constructor(private router: Router, private bookService: BookService) { }

  addBook(form: NgForm) {
    const book: Book = {
      title: form.value.title,
      blurb: form.value.blurb,
      author: form.value.author,
      isbn: form.value.isbn
    };
    this.bookService.addBook(book);
    this.router.navigate(['/books']);
  }
}
