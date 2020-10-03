import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { ErrorComponent } from './error/error.component';
import{HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { AboutComponent } from './about/about.component';
import { NetworkComponent } from './network/network.component';
import{ReactiveFormsModule,FormsModule} from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    NetworkComponent,
    MovieDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
