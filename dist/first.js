"use strict";
let myMoney = 50;
myMoney = 100;
myMoney = 149;
let age = 50;
let club = 'real madrid';
console.log(club);
const isFamous = false;
let famous;
famous = true;
function add(num, num1) {
    return num + ' ' + num1;
}
add('real madrid', 'madrid');
add(39, 30);
add('reald madrid', '50');
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const userOne = fullName('Minhaj', 'Sadik');
function dubbleItConsole(num) {
    const result = num * 3;
    console.log(result);
}
const result = dubbleItConsole(39);
console.log(result);
let multiplay1;
multiplay1 = (x, y) => x * y;
function multiplay(x, y) {
    return x * y;
}
console.log(multiplay);
//array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(20);
let megaName = '';
const friends = ['minhaj', 'sadik', 'joynul', 'hifzur'];
friends.push('minhaj Ahmed');
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('friend with the largest name', megaName);
//object
let player;
player = {
    club: 'real Madrid',
    salary: 3000000000
};
const friend = {
    name: 'minhaj sadik',
    age: 2000
};
friend.age = 50;
const messy = {
    name: 'Messy',
    club: 'bersolona',
    salary: 400000000,
    wife: 'selena',
    isPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'jubentas',
    salary: 400000000,
    isPlaying: true
};
function getSalary(player, friends) {
    return player.salary * 0.1;
}
const poorPlayer = { age: 404004040, isPlaying: true };
getSalary(messy, ['tam', 'sam']);
getSalary(ronaldo, ['sam']);
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
