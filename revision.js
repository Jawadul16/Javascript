var marks = [12, 34, 54,  94, 23, 25, 64, 76];
for(var i = 0; i < marks.length; i++) {
    var element = marks[i];
    console.log(element);
}
function add(num1, num2){
    var total = num1 + num2;
    return total;
}
var result = add(75, 85);
console.log(result);
function largestNumber(numbers){
    var larger = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
var output = largestNumber(marks);
console.log(output);