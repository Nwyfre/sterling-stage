import { Shows } from "./show.model";

export interface Ticket {
    show: Shows;
    desc: string;
    price: number;
}