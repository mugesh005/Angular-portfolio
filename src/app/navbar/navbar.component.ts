import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  navItems = ['About', 'Projects', 'Skills', 'Contact'];
  activeItem: string = this.navItems[0];

  @ViewChild('underline') underline!: ElementRef<HTMLDivElement>;
  @ViewChild('navList') navList!: ElementRef<HTMLUListElement>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const activeLi = this.navList.nativeElement.querySelector('li');
      this.setUnderlineTo(activeLi);
    });
  }

  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === 'li') {
      const text = target.innerText.trim();
      this.activeItem = text;

      // Scroll to section
      const idMap: Record<string, string> = {
        About: 'abo',
        Projects: 'pro',
        Skills: 'skills',
        Contact: 'contact'
      };
      const id = idMap[text];
      if (id) {
        const ele = document.getElementById(id);
        ele?.scrollIntoView({ behavior: 'smooth' });
      }

      this.setUnderlineTo(target);
    }
  }

  private setUnderlineTo(element: HTMLElement | null): void {
    if (!element || !this.underline || !this.navList) return;

    const parentRect = this.navList.nativeElement.getBoundingClientRect();
    const rect = element.getBoundingClientRect();

    this.underline.nativeElement.style.width = `${rect.width}px`;
    this.underline.nativeElement.style.left = `${rect.left - parentRect.left}px`;
  }

}
