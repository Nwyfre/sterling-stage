import { Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CampingComponent } from './components/Info/camping/camping.component';
import { ParkingComponent } from './components/Info/parking/parking.component';
import { OutletComponent } from './components/Outlets/outlet/outlet.component';
import { OutletListComponent } from './components/Outlets/outlet-list/outlet-list.component';
import { TicketsComponent } from './components/Tickets/tickets/tickets.component';
import { SitemapComponent } from './components/Info/sitemap/sitemap.component';
import { DirectionsComponent } from './components/Info/directions/directions.component';

export const routes: Routes = [
    {
        path: '',
        component: CarouselComponent
    },
    {path: 'info', children: [
        { path: 'camping', component: CampingComponent },
        { path: 'parking', component: ParkingComponent },
        { path: 'sitemap', component: SitemapComponent},
        { path: 'directions', component: DirectionsComponent}
    ]},
    { path: 'outlets', component: OutletListComponent},
    {path: 'home', redirectTo: '', pathMatch: 'full'},
    {path: 'tickets', component: TicketsComponent}
    

    
];
