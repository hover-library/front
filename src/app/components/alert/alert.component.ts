import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  copyToClipboard(code: string) {
    navigator.clipboard.writeText(code);
  }


}
