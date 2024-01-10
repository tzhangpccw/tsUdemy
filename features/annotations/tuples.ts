/*  Tuple: Array-like structure where each element 
represents some property of a record */

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}
// type alias
type Drink = [string, boolean, number]

const pepsi: [string, boolean, number] = ['brown', true, 40]
const tea: Drink = ['brown', false, 0]
