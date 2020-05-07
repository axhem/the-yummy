
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable()
export class ProductService {
    result: any;
    api_url: any = environment.api_url;
    load_products = "products";
    get_product = "product";


    constructor(public http: Http) { }

    //get available products
    public getProducts(): Observable<any> {
      return this.http
        .get(this.api_url + this.load_products)
        .pipe(map(result => (this.result = result.json())));
    }

    //get producdt by id
    public getProductsById(id): Observable<any> {
      return this.http
        .get(this.api_url + this.get_product + '/' + id)
        .pipe(map(result => (this.result = result.json())));
    }
}
