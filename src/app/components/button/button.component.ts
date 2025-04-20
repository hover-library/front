import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  buttonsVariants = `
  <hover-button color="primary">Primary</hover-button>
  <hover-button color="secondary">Secondary</hover-button>
  <hover-button color="complete">Complete</hover-button>`;

  buttonsSizes = `
  <hover-button color="primary" size="sm">Small</hover-button>
  <hover-button color="primary" size="md">Medium</hover-button>
  <hover-button color="primary" size="lg">Large</hover-button>`;

  buttonsDisabled = `
  <hover-button color="primary" disabled="disabled">Primary</hover-button>
  <hover-button color="secondary" disabled="disabled">Secondary</hover-button>
  <hover-button color="complete" disabled="disabled">Complete</hover-button>`;

  buttonsIcons = `
  <hover-button color="primary" icon="save" size="sm">Save</hover-button>
  <hover-button color="secondary" icon="home" size="md">Home</hover-button>
  <hover-button color="complete" icon="lock" size="lg">Lock</hover-button>`;

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
