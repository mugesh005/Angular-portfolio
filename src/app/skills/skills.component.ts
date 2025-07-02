import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: string[] = [
    'Angular',
    'TypeScript',
    'HTML5',
    'CSS3',
    'JavaScript',
    'RxJS',
    'Angular Material',
    'SCSS',
    'REST API Integration',
    'Git & GitHub'
  ];
}
