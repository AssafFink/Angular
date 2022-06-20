import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gift-card',
    templateUrl: './gift-card.component.html',
    styleUrls: ['./gift-card.component.css']
})
export class GiftCardComponent implements OnInit {

    public amount = 50;
    public itemsCount = 3;

    constructor() { }

    ngOnInit(): void {
    }

}
