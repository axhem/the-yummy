import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    private sub;
    public product:Product;
    quantity: number = 1;
    image_url: string =environment.image_url;

    constructor(private route: ActivatedRoute,
                private productService:ProductService,
                private cartService:CartService
    ) { }

    ngOnInit() {
        this.route.params
            .subscribe(res => {
                this.getProduct(res.id);
            })
    }
    //get product details(by id)
    getProduct = (id) => {
        this.sub = this.productService.getProductsById(id)
            .subscribe(res => {
                this.product = res;
            })
    };

    //change quantity
    changeQuantity = (newQuantity:number) => {
        this.quantity = newQuantity;
    };

    //add product to cart
    addToCart = (product) => {
        if(this.quantity) this.cartService.addToCart({product,quantity:this.quantity})
    };

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
