import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: ServiceDetailComponent },
  { path: '404NotFound', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/home' },
  { path: '**', redirectTo: '/404NotFound' }
       
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Scroll to top on navigation
      anchorScrolling: 'enabled', // Enable anchor scrolling
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
