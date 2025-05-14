import { Component, input, InputSignal } from '@angular/core';
import { Showday } from '../../../models/showday.model';
import { TimeslotComponent } from "./timeslot/timeslot.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-showday',
  imports: [TimeslotComponent, NgFor],
  templateUrl: './showday.component.html',
  styleUrl: './showday.component.scss'
})
export class ShowdayComponent {
  public showday: InputSignal<Showday> = input<Showday>({} as Showday);
  
}
