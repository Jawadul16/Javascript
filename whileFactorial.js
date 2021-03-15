function factor(n){
    var i = 1;
var factorial = 1;
while( i <= n){
    factorial = factorial * i;
    i++;
}
return factorial;
}
var result = factor(10);
console.log(result);