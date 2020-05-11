import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PokemonNotFoundComponent } from './pokemon-not-found/pokemon-not-found.component';

const routes: Routes = [
  {path: 'not-found/', component: PokemonNotFoundComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
