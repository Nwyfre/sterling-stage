import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ticket-section',
  imports: [NgIf, SelectModule, FormsModule, CurrencyPipe, ButtonModule],
  templateUrl: './ticket-section.component.html',
  styleUrl: './ticket-section.component.scss'
})
export class TicketSectionComponent {
  @Input() ticketType: any;

  protected selectedUrl: any

  public onBuyHandler(event: MouseEvent): void {
    event.preventDefault();

    window.open(this.selectedUrl?.value, "_blank");
  }
}
