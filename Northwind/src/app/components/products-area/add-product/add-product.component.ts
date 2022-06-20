import { ProductsService } from './../../../services/products.service';
import { ProductModel } from './../../../models/product.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new ProductModel();

    @ViewChild("myImage")
    public myImage: ElementRef<HTMLInputElement>;

    constructor(private productsService: ProductsService, private router: Router) { }

    async send() {
        this.product.image = this.myImage.nativeElement.files[0];
        await this.productsService.addProduct(this.product);
        this.router.navigateByUrl("/products");
    }
    



}
