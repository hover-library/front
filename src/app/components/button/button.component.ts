import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  copyToClipboard(code: string) {
    navigator.clipboard.writeText(code);
  }
}
