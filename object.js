var student = { id:121, phone:5555, name:"Abir"};
var student2 = { id:131, phone:1234, name:"Jawad"};
var phoneNo = student.phone;
var phoneNo1 = student["phone"];
var propPhone = "phone";
var phone2 = student[propPhone]; 
student2.phone = 7775757;
console.log(phoneNo1);




console.log(phoneNo);
console.log(phone2);