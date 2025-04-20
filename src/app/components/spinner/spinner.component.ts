import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  spinnersTypes = `
   <hover-spinner type="pulse" color="primary"></hover-spinner>
  <hover-spinner type="wave" color="tech"></hover-spinner>
  <hover-spinner type="cube" color="accent"></hover-spinner>
  <hover-spinner type="neo" color="neon"></hover-spinner>`;

  spinnersSizes = `
   <hover-spinner type="pulse" color="primary" size="sm"></hover-spinner>
  <hover-spinner type="pulse" color="primary" size="md"></hover-spinner>
  <hover-spinner type="pulse" color="primary" size="lg"></hover-spinner>`;

  spinnersColors = `
   <hover-spinner type="pulse" color="primary"></hover-spinner>
  <hover-spinner type="pulse" color="tech"></hover-spinner>
  <hover-spinner type="pulse" color="accent"></hover-spinner>
  <hover-spinner type="pulse" color="neon"></hover-spinner>`;

  copyCode(code: string) {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Code copied to clipboard!');
  }
}
