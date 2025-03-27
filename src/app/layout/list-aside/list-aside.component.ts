import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-aside',
  templateUrl: './list-aside.component.html',
  styleUrl: './list-aside.component.css'
})
export class ListAsideComponent {


  @Input() currentComponent = ''

  sections: string[] = ['Description', 'Examples', 'Sizes', 'Colors', 'Params'];
  selectedIndex: number | null = null;
  currentSection: string = 'NombreDelComponente'; // Ajusta esto según necesites

  selectSection(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }

}
