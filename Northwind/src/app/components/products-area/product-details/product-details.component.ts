import { environment } from './../../../../environments/environment.prod';
import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;
    public imageSource: string;

    constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService) { }

    async ngOnInit(): Promise<void> {
        const id = this.activatedRoute.snapshot.params["prodId"];
        const color = this.activatedRoute.snapshot.queryParams["color"];

        this.product = await this.productsService.getOneProduct(id);
        this.imageSource = environment.productsUrl + "images/" + this.product.imageName;
    }

}
