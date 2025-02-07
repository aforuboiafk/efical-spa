import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'trabajos', component: ProyectosComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' } 
];