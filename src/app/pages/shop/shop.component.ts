import { ProductsService } from './../../services/products.service';
import { Component, inject } from '@angular/core';
import { TelegramService } from 'src/app/services/telegram.service';

@Component({
  selector: 'app-shop',
  template: `
    <app-product-list
      title="Отдельный навык"
      subtitle="Изучите востребованные технологии, чтобы расширить свой стек и добавить заветную галочку в резюме"
      [products]="products.byGroup['skill']"
    />
    <app-product-list
      title="Интенсивы"
      subtitle="Экспресс-программы, где за короткий период вы получаете максимум пользы"
      [products]="products.byGroup['intensive']"
    />
    <app-product-list
      title="Бесплатные курсы"
      subtitle="Необходимые навыки и проекты в портфолио за ваши старания"
      [products]="products.byGroup['course']"
    />
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide();
    console.log(this.products.byGroup);
  }
}
