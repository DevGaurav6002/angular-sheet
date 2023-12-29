import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[app-superb-heighlight]'
})
export class SuperbHeighlight{

    default = '#111'
    @Input() textColor = this.default

    constructor(private elementRef:ElementRef){}

    @HostBinding('style.color') color:string = this.textColor;

    @HostListener('mouseenter') onEnter(){
        this.color = this.textColor
    }

    @HostListener('mouseleave') onLeave(){
        this.color = this.default
    }
}