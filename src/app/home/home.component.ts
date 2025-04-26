import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [ // cuando aparece
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [ // cuando desaparece
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class HomeComponent implements AfterViewInit{

  menuMobileDisplay: boolean = false;

  constructor(
    private el: ElementRef
  ){}

  ngAfterViewInit() {
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch(err => {
        console.warn('Autoplay error:', err);
      });
    }
  }

  toggleMenu(){
    this.menuMobileDisplay = !this.menuMobileDisplay;
  }



  menuRoutes = [
    { label: 'Home', route: '/home' },
    { label: 'Components', route: '/dashboard' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];


}
