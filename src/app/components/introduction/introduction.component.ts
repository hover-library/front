import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {

  @ViewChild('codeText', { static: false }) codeText!: ElementRef;

  copyCode() {
    const text = this.codeText.nativeElement.innerText.trim();

    navigator.clipboard.writeText(text).then(() => {
      console.log('Code copied to clipboard!');
      // Aquí puedes activar algún feedback visual (ej: cambiar el texto a "copied!")
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

}
