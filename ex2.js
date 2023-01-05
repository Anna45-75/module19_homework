let animal = {
    eats: true
};

let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal);
Object.setPrototypeOf(rabbit, {});
