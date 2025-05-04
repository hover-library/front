import { AfterViewInit, Component, effect, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
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
export class HomeComponent implements AfterViewInit, OnInit{

  menuMobileDisplay: boolean = false;
  isLogged: boolean = false;
  menuOpen: boolean = false;


  // Accedemos a la señal directamente
  userMail = this.authService.getUserMail();

  constructor(
    private el: ElementRef,
    private router: Router,
    private authService: AuthService
  ){
    // effect(() => {
    //   console.log('User mail changed: ', this.authService.getUserMail()());
    // });
  }


  ngOnInit(): void {

    if(this.authService.getToken()){
      this.isLogged = true;
    }

  }

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

  logout() {
    this.authService.deleteToken();
    this.authService.setUserMail('');
    this.menuOpen = false;
  }

  menuRoutes = [
    { label: '', route: '/' },
    { label: 'introduction', route: '/documentation/introduction' },
    { label: 'examples', route: '/documentation/components' },
    { label: 'contact', route: '/' }
  ];


emailToggle() {
  this.menuOpen = !this.menuOpen;
}



}
