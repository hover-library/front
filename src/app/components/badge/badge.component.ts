import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {

  badgesSizes = `
  <hover-badge text="Small" size="sm"></hover-badge>
  <hover-badge text="Medium"></hover-badge>
  <hover-badge text="Large" size="lg"></hover-badge>`;

  badgesTypes = `
  <hover-badge text="Primary" type="primary"></hover-badge>
  <hover-badge text="Accent" type="accent"></hover-badge>
  <hover-badge text="Warning" type="warn"></hover-badge>
  <hover-badge text="Success" type="success"></hover-badge>
  <hover-badge text="Neutral" type="neutral"></hover-badge>`;

  badgesIcons = `
  <hover-badge text="Info" icon="info"></hover-badge>
  <hover-badge text="Favorite" icon="favorite" type="accent"></hover-badge>
  <hover-badge text="Warning" icon="warning" type="warn"></hover-badge>
  <hover-badge text="Success" icon="thumb_up" type="success"></hover-badge>
  <hover-badge text="Notifications" icon="notifications" type="neutral"></hover-badge>
  <hover-badge text="Premium" icon="✨" type="accent"></hover-badge>`;

  badgesShapes = `
  <hover-badge text="Default"></hover-badge>
  <hover-badge text="Pill" shape="pill"></hover-badge>`;


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
