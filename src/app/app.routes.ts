import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./todos/todos.component').then(m => m.TodosComponent) },
  { path: 'developer', loadComponent: () => import('./developer/developer.component').then(m => m.DeveloperComponent) },
  { path: '**', redirectTo: '' }
];
