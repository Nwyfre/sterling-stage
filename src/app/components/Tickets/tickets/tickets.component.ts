import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TicketSectionComponent } from '../ticket-section/ticket-section.component';

@Component({
  selector: 'app-tickets',
  imports: [NgFor, TicketSectionComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
  protected ticketTypes = [
    {
        type: 'Day Passes',
        status: 'open',
        advancedPriceFriday: 80,
        advancedPriceSaturday: 70,
        advancedPriceSunday: 70,
        gatePriceFriday: 90,
        gatePriceSaturday: 80,
        gatePriceSunday: 80,
        showURLs : [
    {
        label: "Folkfest",
        value: "https://www.eventbrite.com/e/2025-sterling-stage-folkfest-30th-anniversary-celebration-tickets-1258995081179?aff=oddtdtcreator",
    },
]
    },
    {
        type: 'Weekend Passes',
        status: 'open',
        advancePrice: 90,
        gatePrice: 100,
        showURLs : [
    {
        label: "Folkfest",
        value: "https://www.eventbrite.com/e/2025-sterling-stage-folkfest-30th-anniversary-celebration-tickets-1258995081179?aff=oddtdtcreator",
    },
]
    },
    {
        type: 'VIP',
        status: 'open',
        advancePrice: 300,
        showURLs : [
    {
        label: "Folkfest",
        value: "https://www.eventbrite.com/e/2025-sterling-stage-folkfest-30th-anniversary-celebration-tickets-1258995081179?aff=oddtdtcreator",
    },
]
    },
    {
        type: 'Season Passes',
        status: 'closed',
        showURLs : [
    {
        label: "Folkfest",
        value: "https://www.eventbrite.com/e/2025-sterling-stage-folkfest-30th-anniversary-celebration-tickets-1258995081179?aff=oddtdtcreator",
    },
]
    }
];
}
