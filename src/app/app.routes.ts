import { Routes } from '@angular/router';
import { LetslearnscratchComponent } from './letslearnscratch/letslearnscratch.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./todos/todos.component').then(m => m.TodosComponent) },
  { path: 'developer', loadComponent: () => import('./developer/developer.component').then(m => m.DeveloperComponent) },
  { path: 'letslearnscratch', component: LetslearnscratchComponent },
  { path: '**', redirectTo: '' }
];
