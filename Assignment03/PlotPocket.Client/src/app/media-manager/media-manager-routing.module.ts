import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingListComponent } from './components/trending-list/trending-list.component';

const routes: Routes = [
  {path: 'trending', component: TrendingListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaManagerRoutingModule { }
