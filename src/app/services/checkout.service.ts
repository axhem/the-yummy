import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Http } from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class CheckoutService {
  result: any;
  api_url: any = environment.api_url;
  charge= "checkout";

  constructor(public http: Http) {}

  //get available products
  public getProducts(): Observable<any> {
    return this.http
      .get(this.api_url + this.checkout)
      .pipe(map((result) => (this.result = result.json())));
  }

  //checkout method
  checkout(data, cart): Observable<any> {
    const body = {
      data: data,
      cart: cart,
    }
    return this.http.post(this.api_url + this.charge, body).pipe(
      map((result) => (this.result = result.json())),
      catchError((err) => {
        return throwError(err.json().message);
      })
    );
  }
}
