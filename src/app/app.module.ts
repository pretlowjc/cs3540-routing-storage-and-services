import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookPageComponent } from './books/book-page/book-page.component';
import { BookEntryComponent } from './books/book-entry/book-entry.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'books', component: BookListComponent},
  {path: 'books/new', component: BookEntryComponent},
  {path: 'book/:isbn', component: BookPageComponent},
  {path: '**', redirectTo: 'books', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookListComponent,
    BookPageComponent,
    BookEntryComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
