import { ProductModel } from './../../../models/product.model';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[];

    constructor(private productsService: ProductsService) { }

    async ngOnInit() {
        this.products = await this.productsService.getAllProducts();
        console.log(this.products);
    }

}
