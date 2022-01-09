import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.background') background = 'transparent';
  @HostBinding('style.cursor') cursor = 'default';

  @HostListener('mouseenter')
  onMouseOver(): void {
    this.background = 'rgba(211, 211, 211, 0.5)';
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave')
  onMouseOut(): void {
    this.background = 'transparent';
    this.cursor = 'default';
  }
}
