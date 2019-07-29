import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
    data: {
      title: 'Clientes'
    }
  },
  { path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
