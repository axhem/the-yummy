import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Product} from "../../model/product";
import {SharedModule} from "../../shared/shared.module";
import {CartService} from "../../services/cart.service";
import {ProductService} from "../../services/products.service";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpModule} from "@angular/http";
import {CartPageComponent} from "./cart-page.component";
import { ConvertPipe } from '../../convert.pipe';

describe('Cart Page', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let products: Product[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SharedModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        CartPageComponent,ConvertPipe
      ],
      providers: [CartService,ProductService,ConvertPipe],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    products = [
      {
        name: "Neapolitan Pizza",
        price: 10
      },
      {
        name: "Marinara",
        price: 7
      }
    ];
  });

  it('change quantity.', () => {
    component.cartList = [{product:products[0],quantity:1},{product:products[1],quantity:2}];//24
    component.changeQuantity(component.cartList[0],2);
    expect(component.cartList).toEqual([{product:products[0],quantity:2},{product:products[1],quantity:2}]);//10*2+ 7*2
    expect(component.totalPrice).toEqual(34);
  });
  it('change quantity.', () => {
    component.cartList = [{product:products[0],quantity:5},{product:products[1],quantity:2}];
    component.changeQuantity(component.cartList[1],1);
    expect(component.cartList).toEqual([{product:products[0],quantity:5},{product:products[1],quantity:1}]);
    expect(component.totalPrice).toEqual(57);
  });
  //add and remove from cart items
  it('remove item.', () => {
    component.cartList = [{product:products[0],quantity:2},{product:products[1],quantity:2}];
    component.changeQuantity(component.cartList[1],3);
    component.removeFromCart(1);
    expect(component.cartList).toEqual([{product:products[0],quantity:2}]);
    expect(component.totalPrice).toEqual(20);
  });
});
