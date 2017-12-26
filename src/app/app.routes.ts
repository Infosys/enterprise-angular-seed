import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' }
];
