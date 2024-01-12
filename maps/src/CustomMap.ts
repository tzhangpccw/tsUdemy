import { User } from "./User";
import { Company } from "./Company";

// instructions to every other class
// on how they can be an argument to 'addMarker
export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string;
}
export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId)!,
            { zoom: 1, center: { lat: 0, lng: 0 } });
        // { zoom: 1, center: { lat: -27, lng: 153 } });
    }

    // addMarker(mappable: User | Company): void {
    addMarker(mappable: Mappable): void {

        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        const infoWindow = marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })


    }

    // addUserMarker(user: User): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             // lat: user.location.lat,
    //             // lng: user.location.lng

    //             lat: -27,
    //             lng: 153
    //         }
    //     })
    // }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}