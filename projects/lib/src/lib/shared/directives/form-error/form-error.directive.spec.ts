import { FormErrorDirective } from './form-error.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

describe('FormErrorDirective', () => {
  it('should create an instance', () => {
    const directive = new FormErrorDirective({} as ElementRef, {} as Renderer2, {} as NgControl);
    expect(directive).toBeTruthy();
  });
});
