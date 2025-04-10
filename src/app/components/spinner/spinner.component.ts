import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  copyToClipboard(code: string) {
    navigator.clipboard.writeText(code);
  }
}
