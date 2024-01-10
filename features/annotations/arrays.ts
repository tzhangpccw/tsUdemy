const carMakers: string[] = ['ford', 'toyota', 'chevy']

const dates: Date[] = [new Date(), new Date()]

/* const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
] */

const carsByMake: string[][] = []


// Help with inference when extracting values
const car = carMakers[0]

// Prevent incompatible values
carMakers.push(100)

// get help with 'map'
carMakers.map((car: string): string => {
    return car.toLocaleUpperCase()
})

// flexible : arrays can contain multiple diffent types in it

const importDates: (string | Date)[] = [];
importDates.push('2023-10-10')
importDates.push(new Date())

// where to use typed arrays?
/* Any time we need to represent a
 collection of records with some arbitrary sort order */


