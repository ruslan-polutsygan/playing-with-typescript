class Greeter {
    constructor(public greeting: string){}
    greet(name: string) {
        return this.greeting + ' ' + name;
    }
}

var g = new Greeter('Hello');
//console.log(g.greet('me'));

class Animal {
    constructor(protected name: string) {}
    move(meters: number) {
        console.log(this.name + ' moving for ' + meters + ' meters');
    }
}
class Dog extends Animal{
    move(meters: number) {
        super.move(meters);
        this.name;
        console.log('Running');

    }
}
class Snake extends Animal{
    move(meters: number) {
        super.move(meters);
        console.log('Slithering');
    }
}

var animals: Array<Animal> = [new Dog('Dog'), new Snake('Snake'), new Animal('Animal')];
//animals.forEach(function(a: Animal) { a.move(Math.random()) });


class Person {
    private static x: boolean = false;
    constructor(private _name: string) {}
    get name(): string {
        return this._name + ' getter';
    }
    set name(name: string) {
        this._name = name + ' setter';
    }

    static X(): boolean {
        return Person.x;
    }
}

