import { Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CampingComponent } from './components/Info/camping/camping.component';
import { ParkingComponent } from './components/Info/parking/parking.component';
import { OutletListComponent } from './components/Outlets/outlet-list/outlet-list.component';
import { TicketsComponent } from './components/Tickets/tickets/tickets.component';
import { SitemapComponent } from './components/Info/sitemap/sitemap.component';
import { DirectionsComponent } from './components/Info/directions/directions.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ContactComponent } from './components/Info/contact/contact.component';
import { RulesComponent } from './components/Info/rules/rules.component';
import { AboutComponent } from './components/Info/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: CarouselComponent
    },
    { path: 'info', children: [
        { path: 'camping', component: CampingComponent },
        { path: 'parking', component: ParkingComponent },
        { path: 'sitemap', component: SitemapComponent },
        { path: 'directions', component: DirectionsComponent },
        { path :'contact', component: ContactComponent },
        { path: 'rules', component: RulesComponent },
        { path: 'about', component: AboutComponent }
    ]},
    { path: 'outlets', component: OutletListComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'schedule/:id', component: ScheduleComponent },
    { path: 'subscribe', component: SubscribeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full'}
    

    
];
