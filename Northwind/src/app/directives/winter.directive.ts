import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

// Custom Structural Directive.

@Directive({ selector: '[appWinter]' })
export class WinterDirective implements OnInit {

    public constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

    public ngOnInit(): void {
        if (this.isWinter()) {
            // Create the template element inside the container:
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

    private isWinter(): boolean {
        const now = new Date();
        const month = now.getMonth() + 1;
        return month <= 2 || month >= 11;
    }
}