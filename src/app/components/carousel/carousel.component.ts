import { Component, inject, OnInit, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel'; 
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../Shared/api/api.service';
import { finalize, Subject, takeUntil, tap } from 'rxjs';
import { Shows } from '../../models/show.model';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, CardModule, ButtonModule, ProgressSpinnerModule, NgIf],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{
  protected shows = signal<Shows[]>([]);
  protected loading = signal<boolean>(true);
  private destroySub$: Subject<void> = new Subject<void>();
  private apiService: ApiService = inject(ApiService);

  ngOnInit(): void {
    this.apiService.getShows().pipe(
      takeUntil(this.destroySub$),
       finalize(() => this.loading.set(false))
    ).subscribe(shows => {
      this.shows.set(shows)
    });
  }
}
