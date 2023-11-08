import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
    Components Used:
    about
    inside of books folder...
        books-entry
        books-list
        books-page
    footer
    header
*/
import { AboutComponent } from './about/about.component';
import { BookEntryComponent } from './books/book-entry/book-entry.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookPageComponent } from './books/book-page/book-page.component';

const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'books', component: BookListComponent },
    { path: 'books/new', component: BookEntryComponent },
    { path: 'book/:isbn', component: BookPageComponent },
    { path: '**', redirectTo: 'books', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AngularRoutingModule { }