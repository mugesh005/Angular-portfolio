import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  navItems = ['About', 'Projects', 'Skills', 'Contact'];
  activeItem: string = this.navItems[0];

  @ViewChild('underline') underline!: ElementRef<HTMLDivElement>;
  @ViewChild('navList') navList!: ElementRef<HTMLUListElement>;
  @ViewChild('navbar') navbar!: ElementRef<HTMLElement>; // Add #navbar in HTML

  ngAfterViewInit(): void {
    setTimeout(() => {
      const activeLi = this.navList.nativeElement.querySelector('li');
      this.setUnderlineTo(activeLi);
    });

    // Slide navbar from top
    gsap.from(this.navbar.nativeElement, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });

    // Stagger in nav items
    const navItems = this.navList.nativeElement.querySelectorAll('li');
    gsap.from(navItems, {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'back.out(1.7)',
      delay: 0.3
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
      const ele = document.getElementById(id);
      ele?.scrollIntoView({ behavior: 'smooth' });

      this.setUnderlineTo(target);
    }
  }

  private setUnderlineTo(element: HTMLElement | null): void {
    if (!element || !this.underline || !this.navList) return;

    const parentRect = this.navList.nativeElement.getBoundingClientRect();
    const rect = element.getBoundingClientRect();

    gsap.to(this.underline.nativeElement, {
      width: rect.width,
      left: rect.left - parentRect.left,
      duration: 0.4,
      ease: 'power3.out',
    });
  }
}
