import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, inject, OnInit, signal } from '@angular/core';
import { OutletComponent } from '../outlet/outlet.component';
import { Outlet } from '../../../models/outlet.model';
import { MessageModule } from 'primeng/message';
import { DataViewModule } from 'primeng/dataview';
import { ApiService } from '../../Shared/api/api.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { finalize, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

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

    constructor(private spinnerService: NgxSpinnerService ) {}

    ngOnInit(): void {
      this.apiService.getOutlets().pipe(
        tap(_ => {this.spinnerService.show(); this.loading.set(true)}),
        finalize(() => {this.spinnerService.hide(); this.loading.set(false)})
      ).subscribe(outlets => {
        return this.outlets.set(outlets)})
    }
}
