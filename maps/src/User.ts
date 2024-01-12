import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
// const { faker } = require('@faker-js/faker');
// import faker from 'faker'

// export default 'red'
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.person.firstName();
        // console.log('location', this.location);
        // this.location.lat = 12;
        this.location = {
            // lat: faker.location.longitude(),
            // lng: faker.location.latitude(),
            lat: -27,
            lng: 153
        }
    }
    markerContent(): string {
        return `User Name: ${this.name}`
    }

}

// Convention inside of Ts is 
// to never user default export statements