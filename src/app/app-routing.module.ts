import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './public/home/home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home',
  },
  {
    path: 'home', pathMatch: 'full', component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
