import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[app-heighlight]'
})
export class HeighlightDirective implements OnInit{

    default = '#fff'
    @Input() color = this.default

    constructor(private elementRef: ElementRef){}

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = this.color
    }

}