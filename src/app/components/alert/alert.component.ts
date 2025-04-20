import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

  alertInfo = `
  <hover-alert
    type="info"
    message="This is an info alert."
    [closable]="true">
  </hover-alert>`;

  alertSuccess = `
  <hover-alert
    type="success"
    title="Success"
    message="The data was saved successfully."
    [closable]="true">
  </hover-alert>`;

  alertError = `
  <hover-alert
    type="error"
    title="Error"
    message="The operation could not be completed."
    [showProgressBar]="true"
    [autoClose]="true">
  </hover-alert>`;

  alertWarning = `
  <hover-alert
    type="warning"
    title="Warning"
    message="Please check the input data."
    [closable]="false">
  </hover-alert>`;

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
