
export interface Users {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    adddress?: Address[];
}
export interface Address {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: number;
    geo?: Geo[];
}
export interface Geo {
    lat?: number;
    lng?: number;
}
