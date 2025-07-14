import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;

  ngAfterViewInit() {
    // Animate blobs floating
    gsap.utils.toArray<HTMLElement>('.color-blob').forEach((blob, i) => {
      gsap.to(blob, {
        y: 'random(-30, 30)',
        x: 'random(-30, 30)',
        duration: gsap.utils.random(4, 6),
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: i * 0.5,
      });
    });

    // Animate hero background gradient shift
    if (this.heroSection) {
      gsap.to(this.heroSection.nativeElement, {
        backgroundPosition: '200% center',
        duration: 15,
        repeat: -1,
        ease: 'none',
        backgroundImage: 'linear-gradient(270deg, #f3f9ff, #ffffff, #e0f7fa)',
        backgroundSize: '400% 400%',
      });
    }
  }
}
