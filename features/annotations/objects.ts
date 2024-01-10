// Type Annotations + Type Inference : variable, functions,objects
/* 
Type inference (Typescript guesses the type) :when to use
Always.
 */
/* Type annotaions (We -developers tell Ts the type): when to use
when a function returns the 'any' type and we need to clarify the value
when we declare a variable on one line then initialize it later
when we want a variable to have a type that can't be inferred
 */
const profile = {
    name: 'Alex',
    age: 20,
    coord: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age }: { age: number } = profile;

const {
    coord: { lat, lng }
}: { coord: { lat: number; lng: number } } = profile;

console.log(lat, lng)