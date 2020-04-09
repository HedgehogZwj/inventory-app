import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponenet } from './products-list.component';
import { ProductDepartmentComponenet } from './product-department.component';
import { ProductRowComponenet } from './product-row.component';
import { ProductPriceComponenet } from './product-price.component';
import { ProductImageComponenet } from './product-image.component';


// declarations:所有属于该模块的组件，都必须在这里申明，如果未申明，就不能使用或者使用出错
// imports：导入其他模块
//providers：可注入对象的提供
//bootstrap：表示该模块启动的组件

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponenet,
    ProductDepartmentComponenet,
    ProductImageComponenet,
    ProductPriceComponenet,
    ProductRowComponenet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
