import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesMainSectionComponent } from './quotes-main-section/quotes-main-section.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { FormsModule } from '@angular/forms';
import { QuoteMoreDetailsComponent } from './quote-more-details/quote-more-details.component';
import { CursorPointerDirective } from './cursor-pointer.directive';
import { DateCountPipe } from './date-count.pipe';
import { HighestUpvotesDirective } from './highest-upvotes.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuotesMainSectionComponent,
    QuotesFormComponent,
    QuoteMoreDetailsComponent,
    CursorPointerDirective,
    DateCountPipe,
    HighestUpvotesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
