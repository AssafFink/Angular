import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

    public show(location: HTMLSelectElement): void {
        alert(location.value);
    }

    constructor() { }

    ngOnInit(): void {
    }

}
