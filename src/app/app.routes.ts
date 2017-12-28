import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule', data: {state: 'home'} },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule', data: {state: 'demo'}},
  { path: '**', component: PageNotFoundComponent }
];
