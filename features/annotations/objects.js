var profile = {
    name: 'Alex',
    age: 20,
    coord: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
var _a = profile.coord, lat = _a.lat, lng = _a.lng;
console.log(lat, lng);
