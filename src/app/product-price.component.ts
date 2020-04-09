import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-price',
    template: `
        \${{price}}
    `
})
export class ProductPriceComponenet {
    @Input() price: number;
    constructor() {

    }
}