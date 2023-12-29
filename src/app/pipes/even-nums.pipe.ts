import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'evenNums'
})
export class EvenNumsPipe implements PipeTransform{

    transform(value: Array<number>, ...args: any[]) {
            return value.filter((el) => (+el%2) == 0)
    }
}   