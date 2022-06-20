import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sale',
    templateUrl: './sale.component.html',
    styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

    public item = "Pizza";

    public isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1;
        return day >= 6;
    }

    constructor() { }

    ngOnInit(): void {
    }

}
