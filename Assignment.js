// Multiplication Tables
let getNumber = prompt('Enter Your Number');
for (let i = 1; i <=10; i++) {
   console.log(`${getNumber} x ${i} = ${getNumber*i}`)
}
// Email Address
let getName = prompt('Enter Your Name');
let randomNumber = Math.floor(Math.random() * 900)+100;
console.log(`${getName}${randomNumber}@gmail.com`)
// Name in uppercase or calculator a lenght of name 
let userName = prompt('Whats Your Name');
let nameLenght = '';
for(let i=0; i <= userName.length; i++){
    nameLenght = [i]
}
console.log(`${userName.toUpperCase()} has ${nameLenght} Letters`);
