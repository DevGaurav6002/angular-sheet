import { Component } from '@angular/core';

interface sectionStyleDecider {
  bg: boolean,
  shadhow: boolean
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  constructor() { }

  classObjMain:sectionStyleDecider = {
    bg: true,
    shadhow: true
  }

  classObjSub:sectionStyleDecider = {
    bg: false,
    shadhow: true
  }

  royalBlue = true
  palevioletred = true

}
