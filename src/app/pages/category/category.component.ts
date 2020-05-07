import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/products.service";
import {Product} from "../../model/product";
import {CartService} from "../../services/cart.service";
import {Router} from "@angular/router";
import { environment } from "../../../environments/environment";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    public products:Array<Product>;
    private sub;
    image_url: string =environment.image_url;

    constructor(
         private productService:ProductService,
         private cartService:CartService,
         private router: Router
    ) { }

    ngOnInit() {
        this.load();
    }

    //load all products
    load = () => {
       this.sub = this.productService.getProducts()
            .subscribe(res => {
                this.products = res;
            })
    };

    //add to cart product
    addToCart = (product) => {
        this.cartService.addToCart({product,quantity:1})
    };

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
