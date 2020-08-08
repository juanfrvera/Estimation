import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'lobby', component: LobbyComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/lobby', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
