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
      description: 'Certificación profesional de calderas, hornos, análisis de gases y calibración de quemadores industriales. Certificación de estanques de petróleo y sus componentes según DS10 2012 MINSAL, análisis de gases y calibración de quemadores.'
    },
    {
      icon: 'build',
      title: 'Mantenciones',
      description: 'Servicio técnico especializado en equipos térmicos industriales, redes de vapor, condensado y climatización (calderas de agua caliente y aceite térmico). Redes de vapor y condensado, refractarios y climatización( calderas de agua caliente y aceite térmico)'
    },
    {
      icon: 'shopping_cart',
      title: 'Ventas',
      description: 'Equipos y repuestos originales para sistemas térmicos (RIELLO, ECOFLAM, ANWO, IVAR, SIME, PONAST), manómetros, hidrómetros, electroválvulas.'
    },
    {
      icon: 'hardware',
      title: 'Ferretería Termoindustrial',
      description: 'Suministros especializados para la industria térmica. Norma ISO o DIN, globo, corte rápido, compuerta, fierro fundido, inoxidable o bronce.'
    },
    {
      icon: 'engineering',
      title: 'Desarrollo y mantención de sistemas VRV',
      description: 'Desarrollo y mantención de sistemas VRV, aire acondicionado o Chiller.'
    }
  ];
}