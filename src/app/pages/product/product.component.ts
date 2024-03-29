import { TelegramService } from './../../services/telegram.service';
import { IProduct, ProductsService } from './../../services/products.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    <div>
      <h2 class="mb">{{ product.title }}</h2>
      <br />
      <img [src]="product.image" [alt]="product.title" />
      <p>{{ product.genre }}</p>
      <p>{{ product.release }}</p>
      <a [href]="product.link" target="_blank">Открыть страницу с игрой</a>
    </div>
  `,
})
export class ProductComponent implements OnInit, OnDestroy {
  product: IProduct;

  constructor(
    private products: ProductsService,
    private telegram: TelegramService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.getById(id);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.telegram.BackButton.show();
    this.telegram.BackButton.onClick(this.goBack);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
