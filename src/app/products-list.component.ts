import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from './product';

@Component({
    selector: 'products-list',
    templateUrl: 'products-list.component.html',
    styleUrls: ['products-list.component.css'],
    inputs: ['productsList']
})
export class ProductsListComponenet {
    productsList: Product[];

    @Output() productSelected: EventEmitter<Product>;

    currentProduct: Product;

    constructor() {
        this.productSelected = new EventEmitter();
    }
    onProductClicked(product: Product) {
        this.currentProduct = product;
        this.productSelected.emit(product);
    }
    isSelected(product: Product) {
        // console.log(this.currentProduct);
        // console.log(product);
        if (this.currentProduct == null || product.sku == null) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}