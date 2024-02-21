import { TelegramService } from 'src/app/services/telegram.service';
import { Component, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-feedback',
  template: `
    <form
      clas="centered form"
      [style]="{ justifyContent: 'center', height: '70vh' }"
    >
      <h2 class="mb">Обратная связь</h2>
      <textarea
        [value]="feedback()"
        (input)="handleChange($event)"
        class="form-control"
      ></textarea>
    </form>
  `,
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedback = signal('');

  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this);
  }

  ngOnInit(): void {
    this.telegram.MainButton.setText('Отправить сообщение');
    // this.telegram.MainButton.show();
    // this.telegram.MainButton.disable();
    this.telegram.MainButton.hide();
    this.telegram.MainButton.onClick(this.sendData);
  }

  handleChange(event) {
    this.feedback.set(event.target.value);
    if (this.feedback().trim()) {
      this.telegram.MainButton.show();
    } else {
      this.telegram.MainButton.hide();
    }
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  sendData(): void {
    this.telegram.sendData({ feedback: this.feedback() });
  }
}
