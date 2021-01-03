import './scss/style.scss';
import Person from './person';

const person = new Person('Ozkan');

setTimeout(() => {
    alert(person.sayName())
}, 2000);
