import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard] ,component:HomeComponent},
  {path:'movies',canActivate:[AuthGuard] ,component:MoviesComponent},
  {path:'tv',canActivate:[AuthGuard] , component:TvComponent},
  {path:'people',canActivate:[AuthGuard] ,component:PeopleComponent},
  {path:'network',canActivate:[AuthGuard] ,component:NetworkComponent},
  {path:'about',canActivate:[AuthGuard] ,component:AboutComponent},
  {path:'movie-details/:type/:id',canActivate:[AuthGuard] ,component:MovieDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
