import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.html',
  styleUrls: ['./career.css'],
})
export class Career implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const timeline = this.el.nativeElement.querySelector('.timeline');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeline.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(timeline);
  }
}
