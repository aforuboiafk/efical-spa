import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  imageUrl: string;
  type: string;
  client: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, RouterModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  projects: Project[] = [
    {
      title: 'Mantenimiento de Caldera Instituto Alemán de Puerto Montt.',
      imageUrl: '/assets/trabajos/colegio-aleman.jpg',
      type: 'Mantención',
      client: 'Instituto Alemán de Puerto Montt'
    },
    {
      title: 'Cambio de estanque ACS, de 3.000 L.',
      imageUrl: '/assets/trabajos/boiler2.jpg',
      type: 'Instalación',
      client: 'Hospital de Santa Cruz',
    },
    {
      title: 'Cambio y calibracion de válvula reguladora de presión Spence.',
      imageUrl: '/assets/trabajos/spence.jpg',
      type: 'Instalación',
      client: 'Armada de Chile',
    },
    {
      title: 'Mantención control de nivel McDonell 150.',
      client: 'Armada de Chile',
      imageUrl: '/assets/trabajos/mcdonell.jpg',
      type: 'Mantención'
    },
    {
      title: 'Suministro, instalación y calibracion, quemador Riello 40G20.',
      client: 'CESFAM Yerbas Buenas',
      imageUrl: '/assets/trabajos/Riello.jpg',
      type: 'Instalación'
    },
    {
      title: 'Suministro, instalación, calibracion, válvula reguladora de presión Spirax Sarco, cambio Bypass.',
      client: 'Cecinas Pincheira, Ñuble',
      imageUrl: '/assets/trabajos/spirax.jpg',
      type: 'Instalación'
    },
    {
      title: 'Análisis falla caldera SIME.',
      client: 'CESFAM Santa Fe, Los Ángeles.',
      imageUrl: '/assets/trabajos/sime.jpg',
      type: 'Instalación'
    },
    {
      title: 'Certificación de calderas murales.',
      client: 'Junji Ñuble.',
      imageUrl: '/assets/trabajos/ds10.jpg',
      type: 'Certificación'
    },
    {
      title: 'Mantención estanques de petróleo.',
      client: 'Infantería Marina, Armada de Chile.',
      imageUrl: '/assets/trabajos/petroleo.jpg',
      type: 'Mantención'
    },
    {
      title: 'Mantención quemador Riello RL 44 y Caldera IVAR SUPERAC 695.',
      client: 'Municipalida de los Alamos.',
      imageUrl: '/assets/trabajos/rielloivan.jpg',
      type: 'Mantención'
    },
    {
      title: 'Calibracion de electrodos de encendido y cambio de boquillas, quemador Riello RL 44.',
      client: 'Municipalida de los Alamos.',
      imageUrl: '/assets/trabajos/rielloalamos.jpg',
      type: 'Mantención'
    },
    {
      title: 'Mantención y certificación D.S. 10, Caldera a Vapor, Pirotubular de antehogar húmedo.',
      client: 'COAGRA, Planta Victoria.',
      imageUrl: '/assets/trabajos/ds10caldera.jpg',
      type: 'Mantención y Certificación'
    },
    {
      title: 'Cambio de tubos Mannesman, sin costura 3.2 mm, Caldera VISA, Pirotubular.',
      client: 'Pesquera Blumar, Talcahuano.',
      imageUrl: '/assets/trabajos/mannesman.jpg',
      type: 'Mantención'
    },
    {
      title: 'Suministro, instalación y calibracion, válvulas de seguridad con Certificación D.S.10.',
      client: 'Pesquera Blumar, Talcahuano.',
      imageUrl: '/assets/trabajos/ds10pesquera.jpg',
      type: 'Instalación'
    },
  ];
}