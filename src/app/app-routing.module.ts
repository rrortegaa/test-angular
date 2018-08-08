import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component'
import { DashboardComponent }   from './dashboard/dashboard.component'
import { PersonaDetalleComponent }   from './persona-detalle/persona-detalle.component'

const routes: Routes = [
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detalle/:id',
    component: PersonaDetalleComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
