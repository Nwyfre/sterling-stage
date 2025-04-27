import { Component, Input } from '@angular/core';
import { Outlet } from '../../../models/outlet.model';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-outlet',
  imports: [CardModule, CurrencyPipe, NgFor, NgIf],
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.scss'
})
export class OutletComponent {
  @Input() outlet: Outlet | undefined;

}
