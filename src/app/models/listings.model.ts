import { Floorplan } from "./floorplan.model";
import { Geocode } from "./geocode.model";

// 🚀 MODEL FOR LISTINGS

export interface Listings {
    listID: number;
    order: number;
    propertyID: number;
    name: string;
    streetAddress: string;
    city: string;
    state: string;
    pets: boolean;
    washerDry: string;
    photo: string;
    favorite: boolean;
    highestSentCommissions: number;
    onsiteManager?: any;
    management?: any;
    proximity: number;
    section8: boolean;
    seniorHousing: boolean;
    studentHousting: boolean;
    floorplans: Floorplan[];
    highValueAmenities: string[];
    paidUtilities: string[];
    geocode: Geocode;
}
