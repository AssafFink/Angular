import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.css'],
    // providers: [] // object in component level
})
export class DiscountComponent implements OnInit {

    public styles = {
        // color: Math.random() < 0.5 ? "red" : "blue",
        color: "",
        fontWeight: Math.random() < 0.5 ? "bold" : null
    };

    constructor(private myColorsService: ColorsService) { }

    ngOnInit(): void {
        this.styles.color = this.myColorsService.getRandomColor();
    }

}
