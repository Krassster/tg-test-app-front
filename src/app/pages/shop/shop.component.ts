import { ProductsService } from './../../services/products.service';
import { Component, inject } from '@angular/core';
import { TelegramService } from 'src/app/services/telegram.service';

@Component({
  selector: 'app-shop',
  template: `
    <app-product-list
      title="Ожидаемые"
      subtitle="Самые ожидаемые игры нашими пользователями"
      [products]="products.byGroup['anticipated']"
    />
    <app-product-list
      title="В центре внимания"
      subtitle="Какая игра сейчас обсуждается больше всего?"
      [products]="products.byGroup['in the spotlight']"
    />
    <app-product-list
      title="Лучшие от StopGame"
      subtitle="Игры, которые получили оценку Изумительно от наших редакторов"
      [products]="products.byGroup['amazing from StopGame']"
    />
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService);
  products = inject(ProductsService);

  constructor() {
    this.telegram.BackButton.hide();
  }
}
