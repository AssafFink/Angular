import { environment } from './../../environments/environment.prod';
import { ProductModel } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    // מה לא לעשות
    // public getAllProducts(successCallback: Function, errorCallback: Function) {
    //     const promise = firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));
    //     promise.then(products => successCallback(products))
    //         .catch(err => errorCallback(err));
    // }

    public async getAllProducts(): Promise<ProductModel[]> {
        const products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));
        // Add to redux...
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const product = await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id));
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);
        await firstValueFrom(this.http.post(environment.productsUrl, formData));
    }

    
}
