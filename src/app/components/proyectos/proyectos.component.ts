import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  type: string;
  client: string;
  year: string;
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
      title: 'Mantenimiento Caldera Industrial',
      description: 'Mantenimiento preventivo y correctivo de caldera de alta presión',
      imageUrl: 'assets/projects/caldera1.jpg',
      type: 'Mantención',
      client: 'Industria Textil S.A.',
      year: '2023'
    },
    {
      title: 'Instalación Sistema de Hornos',
      description: 'Diseño e instalación de sistema de hornos industriales',
      imageUrl: 'assets/projects/horno1.jpg',
      type: 'Instalación',
      client: 'Panadería Industrial Norte',
      year: '2023'
    },
    {
      title: 'Certificación Equipos Térmicos',
      description: 'Proceso de certificación completa de equipos térmicos',
      imageUrl: 'assets/projects/certificacion1.jpg',
      type: 'Certificación',
      client: 'Planta Procesadora Ltd.',
      year: '2024'
    }
  ];
}