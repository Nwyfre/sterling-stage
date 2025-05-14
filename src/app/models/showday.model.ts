import { Timeslot } from './timeslot.model';

export interface Showday {
    id: number;
    daysequence: number;
    dayname: string;
    dayabbrev: string;
    show_id: number;
    daydate: string;
    timeslots: Timeslot[]
}