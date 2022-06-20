import { Directive, HostBinding, HostListener } from '@angular/core';

// Custom Attribute Directive.

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {

    @HostBinding("style.background-color")
    public color: string = "";

    @HostListener("mouseenter")
    public setHighlight(): void {
        this.color = "yellow";
    }

    @HostListener("mouseleave")
    public setBlack(): void {
        this.color = "";
    }
}