import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

    public time: string;
    private timerId: number;

    constructor() { }
    
    ngOnInit(): void {

        this.timerId = window.setInterval(() => {
            const now = new Date();
            this.time = now.toLocaleTimeString();
        }, 1000);

    }

    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }

}
