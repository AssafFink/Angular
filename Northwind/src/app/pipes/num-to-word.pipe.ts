import { Pipe, PipeTransform } from '@angular/core';

// Custom Pipe.

@Pipe({ name: 'numToWord' })
export class NumToWordPipe implements PipeTransform {

    public transform(num: number, uppercase?: boolean): string {
        const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
        const word = uppercase ? words[num] : words[num].toLowerCase();
        return word;
    }
}