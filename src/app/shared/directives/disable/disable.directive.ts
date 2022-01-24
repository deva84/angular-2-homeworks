import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDisableIcon]',
})
export class DisableDirective {
  @Input() set appDisableIcon(value: boolean) {
    this.removePointerEvents(value);
  }

  constructor(private el: ElementRef<HTMLElement>) {}

  removePointerEvents(toDisable: boolean): void {
    if (toDisable) {
      this.el.nativeElement.style.pointerEvents = 'none';
      this.el.nativeElement.style.color = 'lightgrey';
    } else {
      this.el.nativeElement.style.pointerEvents = 'auto';
      this.el.nativeElement.style.color = 'thistle';
    }
  }
}
