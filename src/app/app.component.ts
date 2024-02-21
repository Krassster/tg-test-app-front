import { TelegramService } from 'src/app/services/telegram.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet/>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  telegram = inject(TelegramService);
  constructor() {
    this.telegram.ready();
  }
}
