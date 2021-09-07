import {writable} from 'svelte/store';

export const loggedIn = writable(true);

const stored = JSON.parse(localStorage.getItem('user'))

export const user = writable(stored || {
  firstName: 'Johnny',
  lastName: 'Bravo',
  email: 'my.email@mail.com',
  password: 'P4$$vv0rd',
  street: 'Scheldestraat',
  number: '11',
  bus: '',
  postalCode: '9000',
  city: 'Ghent',
  country: 'Belgium',
  telephone: '0496235624',
  contactEmail: 'personal@mail.com',
  optIn1: false,
  optIn2: false,
});

user.subscribe((value) => localStorage.setItem('user', JSON.stringify(value)));
