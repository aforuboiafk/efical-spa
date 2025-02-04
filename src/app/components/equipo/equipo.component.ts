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
      name: "Gabriela Lizama M.",
      role: "Constructor Civil",
      description: "Profesional con experiencia en ejecución y planificación de obras civiles y de edificación. Ha trabajado como Jefe de Terreno y Administrador de Contrato en diversas empresas, supervisando el correcto desempeño de las obras y garantizando el cumplimiento de normativas de seguridad, costos y plazos.",
      imageUrl: "URL de la imagen de perfil",
      socialMedia: {
        email: "gabi.lizama@gmail.com",
        linkedin: "https://www.linkedin.com/in/gabriela-lizama-m-07231080/",

      }
    },
    {
      name: 'Roderico',
      role: 'Director Técnico',
      description: 'Especialista en sistemas hidráulicos con más de 20 años de experiencia en el sector industrial.',
      imageUrl: 'assets/team/roderico.jpg',
      socialMedia: {
      }
    },
    {
      name: "Yamandú Lettieri",
      role: "Desarrollador de software",
      description: "Desarrollador con experiencia en tecnologías como Java, Spring Framework y Angular. Ha trabajado en Trebol-IT desarrollando aplicaciones web para clientes como Banco de Chile y actualmente realiza su práctica en Banco BICE. Cuenta con formación en Ingeniería en Informática en la Universidad Técnica Federico Santa María y certificaciones en trabajo en equipo y desarrollo Full-Stack Python.",
      imageUrl: "URL de la imagen de perfil",
      socialMedia: {
        email: "yamandu.lettieri.l@gmail.com",
        linkedin: "https://www.linkedin.com/in/yamand%C3%BA-lettieri-a29354214/"
      }
    },

  ];
}