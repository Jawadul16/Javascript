var friendsAge = [15, 17, 14, 16];

var amarAge = friendsAge[2];

console.log(amarAge);

friendsAge[1] = 21;

console.log(friendsAge[1])
var position = friendsAge.indexOf(1414);

console.log(position);

friendsAge.push(15);
friendsAge.push(19);
console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.pop();
console.log(friendsAge);
var tealine = ['Kalam', 'Salam', 'Balam'];
tealine.push('Jamal');
console.log(tealine);
tealine.pop();
console.log(tealine);
tealine.shift();
console.log(tealine);
tealine.unshift('Palam');
console.log(tealine);
var tealine = [ 'Kalam', 'Salam', 'Balam', 'Jamal' ];
var part = tealine.slice(2,3);
console.log(part);
console.log(tealine);
