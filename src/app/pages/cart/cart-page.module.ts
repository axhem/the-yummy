import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CartPageComponent } from "./cart-page.component";
import { cartPageRoutes } from "./cart-page.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConvertPipe } from '../../convert.pipe';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(cartPageRoutes),
  ],
  declarations: [CartPageComponent,ConvertPipe],
})
export class CartPageModule {}
