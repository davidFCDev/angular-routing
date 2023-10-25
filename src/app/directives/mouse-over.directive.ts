import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseOver]',
})
export class MouseOverDirective {
  @Input() defaultColor = '';
  @Input('appMouseOver') backgroundColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this._elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._elementRef.nativeElement.style.backgroundColor = this.defaultColor;
  }

  constructor(private _elementRef: ElementRef) {}

  private _setColor(backgroundColor: string | null, color: string | null) {
    this._elementRef.nativeElement.style.backgroundColor = backgroundColor;
    this._elementRef.nativeElement.style.color = color;
  }
}
