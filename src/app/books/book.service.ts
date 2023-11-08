import { Injectable } from '@angular/core';
import { Book } from './book'; // Import your Book interface

@Injectable({
    providedIn: 'root'
})

export class BookService {
    private localStorageKey = 'books';

    constructor() { }

    getBooks(): Array<Book> {
        const booksString = localStorage.getItem(this.localStorageKey);

        if (booksString !== null) {
            return JSON.parse(booksString);
        }

        return [];
    }

    addBook(book: Book): void {
        let books = this.getBooks();
        books.push(book);
        localStorage.setItem(this.localStorageKey, JSON.stringify(books));
    }
}