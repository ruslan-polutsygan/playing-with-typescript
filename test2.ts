interface Contains {
    (haystack:string, needle:string): boolean;
}
var contains:Contains = function (haystack:string, needle:string):boolean {
    return haystack.indexOf(needle) !== -1;
};
//console.log(contains('string', 'str'));
//console.log(contains('string', 'tr'));
//console.log(contains('string', 'tor'));


interface A {
    [i: number]: string;
}
var a:A = ['ssssss', 'fffff'];

interface ClockInterface {
    currentTime: Date;
    setTime(d:Date);
}

class Clock implements ClockInterface {
    currentTime:Date;

    constructor(h:number, m:number) {
        var date = new Date();
        date.setHours(h);
        date.setMinutes(m);
        this.currentTime = date;
    }

    setTime(d:Date) {
        this.currentTime = d;
    }
}

interface Person {
    name: string;
}
function f(p: Person) {
    console.log(p.name);
}

var o = <Person>{}; //var o = {}; wouldn't work
o.name = 'me';
//f(o);


interface Counter {
    (n: number): string;
    interval: number;
    reset():void;
}
var c: Counter;
//c(3);
//c.interval = 5;
//c.reset();
