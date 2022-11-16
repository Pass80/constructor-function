console.log('=========1===========');

class Ball {
    // Geben  dem Argument einen Standardwert, falls die Klasse ohne Argument aufgerufen wird
    constructor(ballType = 'regular') {
        this.ballType = ballType;
    }
}

let ball1 = new Ball('Super');
let ball2 = new Ball();

console.log(ball1);
console.log(ball2);

console.log('=========2===========');

class Person {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }
    info = function () {
        console.log(`${this.name} is ${this.alter} years old`);
    };
}

let person1 = new Person('Manuel', 24);
person1.info();

console.log('=========3===========');

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitBtn = document.getElementById('submit-btn');
const display = document.getElementById('display');
const check = document.getElementById('check');

class Person2 {
    constructor(name, alter) {
        this.name = name;
        this.alter = alter;
    }
    write = function () {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = `${this.name} , ${this.alter} years old`;
        display.appendChild(paragraph);
        if (check.checked === false) {
            paragraph.style.color = 'red';
        } else return;
    };
}

const checkPersonInfo = () => {
    let person = new Person2(nameInput.value, ageInput.value);
    person.write();
};
