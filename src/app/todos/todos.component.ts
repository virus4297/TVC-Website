import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements AfterViewInit {
  ngAfterViewInit() {
    const logo = document.getElementById('company-logo') as HTMLImageElement;
    const container = document.querySelector('.logo-sticky-container') as HTMLDivElement;
    if (!logo || !container) return;

    const setup = () => {
      const maxWidth = 500; // px
      const minWidth = 100; // px
      const shrinkDistance = 300; // px to reach min size

      const onScroll = () => {
        const scrollY = window.scrollY;
        let width = maxWidth - ((maxWidth - minWidth) * Math.min(scrollY, shrinkDistance) / shrinkDistance);
        logo.style.maxWidth = `${width}px`;
        logo.style.width = '100%';
        // Let container height be auto (no manual setting)
      };

      window.addEventListener('scroll', onScroll);
      onScroll();
    };

    if (logo.complete) {
      setup();
    } else {
      logo.onload = setup;
    }
  }
}
