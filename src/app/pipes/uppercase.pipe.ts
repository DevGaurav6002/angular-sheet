import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name: 'toUpperCase'
})
export class ToUppercasePipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        if(typeof value == 'string'){
            return value.toUpperCase()
        }else{
            return value
        }
    }
}   