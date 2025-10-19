import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appActualWidth]',
  standalone: true
})
export class ActualWidthDirective implements AfterViewInit {
  @Input() offset = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      try {
        const actualWidth = this.el.nativeElement.offsetWidth + this.offset;

        console.log(`[SetActualWidth] Element width: ${ actualWidth }px`);

        this.renderer.setStyle(this.el.nativeElement, 'width', `${ actualWidth }px`);
      } catch (error) {
        console.error('[SetActualWidth] Error setting width:', error);
      }
    });
  }
}
