import { Ticket } from "./ticket.model";

export interface Outlet {
    id: number;
    name: string;
    siteUrl: string;
    imageUrl: string;
    directionUrl: string;
    tickets: Ticket[]
}