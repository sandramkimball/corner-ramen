import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './components/review/review.component';
import { CardComponent } from './components/card/card.component';


const routes: Routes = [
  { path: 'reviews', component: ReviewComponent },
  { path: 'products', component: CardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
