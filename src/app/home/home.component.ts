import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

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



  menuRoutes = [
    { label: 'Home', route: '/home' },
    { label: 'Components', route: '/dashboard' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];


}
