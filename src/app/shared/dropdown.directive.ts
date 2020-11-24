import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isOpen = false;
  constructor() { }

  @HostListener('click') toggleDropdown(){
    this.isOpen = !this.isOpen;
  }
}
