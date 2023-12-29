import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[app-better-heighlight]'
})
export class BetterHeighlight implements OnInit {

    default = '#fff'
    @Input() color = this.default

    constructor(private elementRef:ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.color)
    }
}