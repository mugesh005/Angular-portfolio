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

  logos = [
    { name: 'Angular', file: './programing.png' },
    { name: 'TypeScript', file: './typescript.png' },
    { name: 'JavaScript', file: 'js.png' },
    { name: 'HTML5', file: 'html-5.png' },
    { name: 'CSS3', file: 'css-3.png' },
    { name: 'SCSS', file: 'sass.png' },
    { name: 'REST API', file: 'integration.png' },
    { name: 'Git', file: 'git.png' }
  ];
}
