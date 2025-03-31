// uppercase.directive.ts
import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  standalone: true,
  selector: '[appUppercase]'
})
export class UppercaseDirective {
  el = inject(ElementRef<HTMLInputElement>)
  control = inject(NgControl)

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = this.el.nativeElement;
    const caretPos = input.selectionStart;
    const upperValue = input.value.toUpperCase();

    this.control.control?.setValue(upperValue, { emitEvent: false });

    requestAnimationFrame(() => {
      input.setSelectionRange(caretPos, caretPos);
    });
  }
}
