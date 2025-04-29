import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { OutletComponent } from '../outlet/outlet.component';
import { Outlet } from '../../../models/outlet.model';
import { MessageModule } from 'primeng/message';
import { DataViewModule } from 'primeng/dataview';
import { ApiService } from '../../Shared/api/api.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-outlet-list',
  imports: [NgFor, NgIf, OutletComponent, MessageModule, DataViewModule, ProgressSpinnerModule ],
  templateUrl: './outlet-list.component.html',
  styleUrl: './outlet-list.component.scss'
})
export class OutletListComponent implements OnInit{
    protected outlets = signal<Outlet[]>([]);
    protected loading = signal<boolean>(true);
    private apiService: ApiService = inject(ApiService);

    ngOnInit(): void {
      this.apiService.getOutlets().pipe(
        finalize(() => {this.loading.set(false)})
      ).subscribe(outlets => {
        return this.outlets.set(outlets)})
    }
}
