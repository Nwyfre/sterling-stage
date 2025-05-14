import { Band } from './band.model';

export interface Timeslot {
   id: number;
   timesequence: number;
   time:string;
   stage: string;
   showday_fk: number;
   band_id: number;
   band: Band
}