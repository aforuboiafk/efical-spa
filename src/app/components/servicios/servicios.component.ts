import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  services: Service[] = [
    {
      title: 'Certificaciones',
      description: 'Certificación profesional para equipos industriales',
      icon: 'verified',
      details: [
        'Certificación de calderas',
        'Certificación de hornos industriales',
        'Certificación de quemadores',
        'Informes técnicos detallados'
      ]
    },
    {
      title: 'Mantenciones',
      description: 'Servicio de mantenimiento preventivo y correctivo',
      icon: 'build',
      details: [
        'Mantenimiento de calderas',
        'Mantenimiento de hornos',
        'Mantenimiento de quemadores',
        'Servicios de emergencia 24/7'
      ]
    },
    {
      title: 'Ventas',
      description: 'Equipos y repuestos de alta calidad',
      icon: 'shopping_cart',
      details: [
        'Venta de calderas nuevas',
        'Repuestos originales',
        'Accesorios especializados',
        'Asesoría técnica en compras'
      ]
    },
    {
      title: 'Ferretería Termoindustrial',
      description: 'Suministros industriales especializados',
      icon: 'construction',
      details: [
        'Herramientas especializadas',
        'Insumos industriales',
        'Equipos de medición',
        'Materiales técnicos'
      ]
    }
  ];
}