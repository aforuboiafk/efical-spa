import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  socialMedia?: {
    linkedin?: string;
    email?: string;
  };
}

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  teamMembers: TeamMember[] = [
    {
      name: "Gabriela Lizama Marín",
      role: "Oficina Técnica",
      description: "Constructor Civil, profesional con experiencia en ejecución y planificación de obras civiles.",
      imageUrl: "",
      socialMedia: {
        email: "efical.climatizacion@gmail.com",
        linkedin: "https://www.linkedin.com/in/gabriela-lizama-m-07231080/",

      }
    },
    {
      name: 'Roderico Riquelme Novoa',
      role: 'Supervisor Técnico',
      description: 'Especialista en Calderas, sistemas caloportadores y climatización en general.',
      imageUrl: '',
      socialMedia: {
        email:"efical.climatizacion@gmail.com"
      }
    },
    {
      name: "Ruth Sandra Negrete Obreque",
      role: "Encargada de Laboratorio y Certificaciones",
      description: "Ingeniera química, profesional facultada por SS Talcahuano registro N°19. Especializada en análisis de laboratorio y procesos de certificación industrial.",
      imageUrl: "",
      socialMedia: {
      }
    },
    {
      name: "Yamandú Lettieri",
      role: "Desarrollador de software",
      description: "Desarrollador con experiencia en tecnologías como Java, Spring Framework y Angular. Apasionado por la tecnología y la programación. Mantenimiento de la página web.",
      imageUrl: "",
      socialMedia: {
        email: "yamandu.lettieri.l@gmail.com",
        linkedin: "https://www.linkedin.com/in/yamand%C3%BA-lettieri-a29354214/"
      }
    },

  ];
}