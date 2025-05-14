import { Showday } from './showday.model'

export interface Schedule {
    id: number;
    showname: string;
    showdate: string;
    showflyer: string;
    showid: string;
    year: number;
    advance: number;
    isdaypass: boolean;
    daygate: number;
    datadvance: number;
    tixlink: string;
    tickets: boolean;
    showopen: boolean;
    schedule: boolean;
    fbevent: string;
    earlydates: string;
    advancedates: string;
    gatepass: number;
    description: string;
    headliner: number;
    showdays: Showday[];
}