import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

interface InfoCard {
  title: string;
  content: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  infoCards: InfoCard[] = [
    {
      title: 'Misión',
      content: 'Brindar soluciones integrales en mantenimiento y certificación de equipos térmicos industriales, garantizando la eficiencia y seguridad en cada servicio.'
    },
    {
      title: 'Visión',
      content: 'Ser líderes en el sector de mantenimiento y certificación de equipos térmicos, reconocidos por nuestra excelencia técnica y compromiso con la calidad.'
    }
  ];

  valueCards: ValueCard[] = [
    {
      icon: 'verified',
      title: 'Certificaciones',
      description: 'Certificación profesional de calderas, hornos y quemadores industriales'
    },
    {
      icon: 'build',
      title: 'Mantenciones',
      description: 'Servicio técnico especializado en equipos térmicos industriales'
    },
    {
      icon: 'shopping_cart',
      title: 'Ventas',
      description: 'Equipos y repuestos originales para sistemas térmicos'
    },
    {
      icon: 'hardware',
      title: 'Ferretería Termoindustrial',
      description: 'Suministros especializados para la industria térmica'
    }
  ];
}