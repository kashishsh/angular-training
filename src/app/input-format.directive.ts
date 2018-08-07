// HostListener: Allows us to subscribe to the dom events raised by the host / DOM element.
// ElementRef : Is a service in angular which gives us the access of the DOM object.
import { Directive, HostListener, ElementRef, Input,  } from '@angular/core';

@Directive({
  selector: '[appInputFormat]' // It means that if angular find this value as attribute, it will apply this directive to it.
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  //@Input('format') format;
  constructor(private el: ElementRef) {

  }

  @HostListener('focus') onFocus() {
    console.log('on focus');
  }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if(this.format === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }
}
