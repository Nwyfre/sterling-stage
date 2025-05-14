import { Component, model, ModelSignal, OnInit } from '@angular/core';
import { Showday } from '../../../models/showday.model';
import { AccordionModule } from 'primeng/accordion';
import { NgFor } from '@angular/common';
import { ShowdayComponent } from "../showday/showday.component";

@Component({
  selector: 'app-schedule-list',
  imports: [AccordionModule, NgFor, ShowdayComponent, ShowdayComponent],
  templateUrl: './schedule-list.component.html',
  styleUrl: './schedule-list.component.scss'
})
export class ScheduleListComponent implements OnInit{
  public showDays: ModelSignal<Showday[]> = model<Showday[]>([]);

  ngOnInit(): void {
    this.showDays.update((state: Showday[]) => state.sort((a: Showday, b: Showday) => a.daysequence - b.daysequence))
    console.log(this.showDays())
  }
}
