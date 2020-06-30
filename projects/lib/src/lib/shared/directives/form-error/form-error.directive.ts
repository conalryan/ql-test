import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[libFormError]'
})
export class FormErrorDirective implements OnInit {

  private errorToShow: string = '';

  constructor(
    private readonly elementRef: ElementRef, 
    private readonly renderer: Renderer2,
    private control: NgControl) {
  }

  ngOnInit(): void {
    // TODO: Handle multiple errors, set classes rather than hard coded styles
    this.control.valueChanges?.pipe(debounceTime(500)).subscribe(value => {
      if (this.control.dirty && this.control.invalid) {  
        this.addErrors();
      } else {
        this.removeErrors();
      }
    });
  }

  private addErrors(): void {
    const errors = this.control.errors || {};
    const errorKeys = Object.keys(errors);
    if (this.errorToShow !== errorKeys[0]) {
      if (this.errorToShow) {
        // defensive: cleanup excess errors
        this.removeErrors();
      }
      this.elementRef.nativeElement.setAttribute("style", "border:1px solid red;");
      this.errorToShow = errorKeys[0];
      const p: HTMLParagraphElement = this.renderer.createElement('p');
      p.innerHTML = `Error: ${errorKeys[0]}`;
      p.setAttribute("style", "color:red;");
      const parent = this.renderer.parentNode(this.elementRef.nativeElement)
      this.renderer.appendChild(parent, p);
    }
  }

  private removeErrors(): void {
    this.elementRef.nativeElement.setAttribute("style", "border:1px solid #ced4da;");
    const parent = this.renderer.parentNode(this.elementRef.nativeElement)
    const siblings = [this.elementRef.nativeElement.nextSibling];
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i]) {
        if (siblings[i].nextSibling) {
          siblings.push(siblings[i].nextSibling);
        }
        this.errorToShow = '';
        this.renderer.removeChild(parent, siblings[i]);
      }
    }
  }
}
