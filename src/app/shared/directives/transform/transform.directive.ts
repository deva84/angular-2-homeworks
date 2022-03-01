import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransform]',
})
export class TransformDirective implements OnInit, OnDestroy {
  @Input('transformColor') color = '#FF0000';

  private eventListener!: () => void;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Думаю, что этот функционал можно реализовать через @HostListener и тогда не надо будет
  // вручную все делать
  ngOnInit(): void {
    this.eventListener = this.renderer.listen(this.el.nativeElement, 'click', () => {
      this.el.nativeElement.style.color = this.color;
    });
  }

  ngOnDestroy(): void {
    this.eventListener();
  }
}
