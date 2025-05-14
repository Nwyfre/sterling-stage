import { Component, computed, inject, input, InputSignal, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../Shared/api/api.service';
import { finalize, tap } from 'rxjs';
import { Schedule } from '../../models/schedule.model';
import { NgIf } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-schedule',
  imports: [NgIf, DialogModule, ScheduleListComponent, PdfJsViewerModule, ProgressSpinnerModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements OnInit{
  id: InputSignal<number> = input(0);

  private apiService: ApiService = inject(ApiService);

  protected showSchedulePDF: boolean = false;
  protected schedule: WritableSignal<Schedule> = signal({} as Schedule);
  protected showSchedule: WritableSignal<boolean> = signal(false)
  protected scheduleUrl: string = `/schedules/${this.schedule().showid}.pdf`
  protected isLoading: WritableSignal<boolean> = signal(false);

  ngOnInit(): void {
    console.log(this.schedule());
    this.isLoading.set(true);
    this.apiService.getSchedule(this.id()).pipe(
      tap(schedule => this.schedule.set(schedule)),
      finalize(() => this.isLoading.set(false))
    ).subscribe(schedule => {
      this.showSchedule.set(this.schedule() && this.schedule().schedule)
    });
  }

  public showPDF(event: MouseEvent): void {
    event.preventDefault();
    this.showSchedulePDF = true;
  }
}
