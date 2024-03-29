import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  template: ` <h2 class="mb">{{ title }}</h2>
    <h4 class="mb">{{ subtitle }}</h4>
    <ul *ngFor="let product of products" class="products">
      <li class="product-item" [routerLink]="'/product/' + product.id">
        <div class="product-image">
          <img [src]="product.image" [alt]="product.title" />
        </div>
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <p class="hint">{{ product.genre }}</p>
          <p class="hint">{{ product.release }}</p>
        </div>
      </li>
    </ul>`,
})
export class ProductListComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() products: IProduct[];
}
