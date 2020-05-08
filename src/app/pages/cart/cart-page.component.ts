import { Component } from "@angular/core";
import { CartBaseComponent } from "./cart-base.component";
import { CartService } from "../../services/cart.service";
import { CheckoutService } from "../../services/checkout.service";
import { environment } from "../../../environments/environment";
import Swal from "sweetalert2";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart-page",
  styleUrls: ["cart-page.component.css"],
  templateUrl: "cart-page.component.html",
})
export class CartPageComponent extends CartBaseComponent {
  image_url: string = environment.image_url;
  paymentFormGroup: FormGroup;
  fullname;
  email;
  address;
  city;
  postal_code;
  country;
  phone;
  constructor(
    protected cartService: CartService,
    protected checkoutService: CheckoutService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    super(cartService);
  }

  changeQuantity = (cart, quantity) => {
    cart.quantity = quantity;
    this.cartService.reloadCart(this.cartList);
  };

  ngOnInit() {
    //validate checkout form  with validation rules
    this.paymentFormGroup = this.formBuilder.group({
      fullname: [this.fullname, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      address: [null, Validators.required],
      city: [null, Validators.required],
      postal_code: [null, Validators.required],
      country: [null, Validators.required],
      phone: [null, Validators.required],
    });
  }
  get f() {
    return this.paymentFormGroup.controls;
  }

  //checkout
  onCheckout(cart) {
    const body = {
      name: this.paymentFormGroup.value.fullname,
      email: this.paymentFormGroup.value.email,
      address: this.paymentFormGroup.value.address,
      city: this.paymentFormGroup.value.city,
      postal_code: this.paymentFormGroup.value.postal_code,
      country: this.paymentFormGroup.value.country,
      phone: this.paymentFormGroup.value.phone,
    };
    this.checkoutService.checkout(body, cart).subscribe({
      next(resp) {
        this.onResponse("success", "", resp.message);

        this.router.navigate(["/category"]);
      },
      error(err) {
        this.onResponse("error", "", err.message);
      },
    });
  }
  // //implementing sweet alert
  onResponse(type, title, message) {
    Swal.fire({
      position: "top-right",
      type: type,
      title: title,
      text: message,
      showConfirmButton: false,
      timer: 2500,
    });
  }
}
