const person = new Object({
    name: 'Mooqan',
    age: 20,
    greet: function() {
        console.log('Greet');
    }
})

Object.prototype.warning = function() {
    console.log('Say Hello To My Little Friend!');
}

const Han = Object.create(person)
Han.name = 'Ilgiz';

const str = new String('I am Groot');

//ничего сложного в прототипах нет, все предельно понятно