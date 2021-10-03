import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmroomComponent } from './filmroom/filmroom.component';

const routes: Routes = [
  { path: '**', component: FilmroomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
