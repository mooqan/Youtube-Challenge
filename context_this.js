function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Mooqan',
    age: 20,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        log(`Job is ${phone}`);
        console.groupEnd()
    }
}

const Dean = {
    name: 'Dinmuhammed',
    age: 23
}


// person.logInfo.bind(Dean, 'Frontend', '996-77-77-77')()
// person.logInfo.call(Dean, 'Frontend', '996-77-77-77')
const fnDeanInfoLog = person.logInfo.bind(Dean, 'Frontend', '996-77-77-77')
// fnDeanInfoLog('Frontend', '996-77-77-77');


const array = [1,2,3,4,5];

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i *n;
//     })
// }

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n;
    })
}

console.log(array.multBy(2))

