let myMoney = 50;
myMoney = 100;
myMoney = 149;

let age:number = 50;

let club:string = 'real madrid';
console.log(club);

const isFamous:boolean =false;
let famous:boolean;
famous = true;


function add(num:number| string, num1:number| string){
    return num + ' ' + num1;

}
add('real madrid', 'madrid');
add(39, 30);
add('reald madrid', '50' )

function fullName (firstName:string, lastName:string): string{
    return firstName + ' ' + lastName;

}
const userOne = fullName('Minhaj', 'Sadik');

function dubbleItConsole(num:number):void{
    const result = num * 3;
    console.log(result);
}

const result = dubbleItConsole(39)
console.log(result);

let multiplay1: (x: number, y: number)=>number;
multiplay1 = (x, y) => x * y;

function multiplay(x: number, y: number): number {
    return x * y;
}
console.log(multiplay);

//array
const numbers:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(20);

let megaName:string = '';
const friends:string[] = ['minhaj','sadik', 'joynul', 'hifzur'];
friends.push('minhaj Ahmed');
for (let i = 0; i < friends.length; i++) {
    const friend:string = friends[i];
    if(friend.length > megaName.length){
        megaName = friend;
    }
    
}
console.log('friend with the largest name', megaName);

//object
let player:{ // structure
    club:string,
    salary:number
}
player ={ //value
    club: 'real Madrid',
    salary: 3000000000
}

const friend:{name:string, age:number} ={ //one line structure and type
    name: 'minhaj sadik',
    age: 2000
}
friend.age=50;

// create a structure for the player
interface Player {// 
    club: string,
    name:string,
    salary:number,
    wife?:string, // an optional structure while i cofisuted
    isPlaying:boolean
}
const messy = {
    name :'Messy',
    club: 'bersolona',
    salary:400000000,
    wife:'selena',
    isPlaying: true
}
const ronaldo:Player = {
    name: 'Ronaldo',
    club:'jubentas',
    salary:400000000,
    isPlaying: true
}

function getSalary(player:Player, friends:string[]){
    return player.salary * 0.1;
}

const poorPlayer = {age:404004040, isPlaying:true}
getSalary(messy, ['tam', 'sam'])
getSalary(ronaldo, ['sam'])

class Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    getName():string{
        return this.name
    }
}
    