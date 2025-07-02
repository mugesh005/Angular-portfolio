import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built using Angular, featuring sections like about, skills, and projects.',
      link: ''
    },
    {
      title: 'Task Manager App',
      description: 'A task tracking web app using Angular and Firebase with real-time updates and authentication.',
      link: ''
    },
    {
      title: 'Weather Dashboard',
      description: 'Shows weather info using OpenWeatherMap API with Angular services and dynamic UI components.',
      link: ''
    }
  ];
}
