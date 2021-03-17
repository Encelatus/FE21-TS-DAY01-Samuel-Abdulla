// console.log("rakb")

// array.forEach(element => {
    
// });

var  num:number[]=[1,2,3,4,5,6,7,8,9,10];


for (var i = num[0]; i <=num.length; i++) {
for (var i = num[0]; i <=num.length; i++) {

   
    for(var j=1;j<=10;j++){

        console.log(`${i} X ${j} = ${i*j}`);
        document.write(`${i} X ${j} = ${i*j}`);

    }
        console.log(`${i} X ${j} = ${i*j}`);
    }

// }

//  for (const index in num) {
//         if (Object.prototype.hasOwnProperty.call(num, index)) {
//             const element = num[index];
            
//         }
//     }

var person = { 
    firstname:"abdulla", 
    lastname:"rakib",
    sayHello:function () {
        
    }
 }; 
document.write("<table border='1px'>");
for (var i = 1; i <= 10; i++){
    for (var j = 1; j <= 10; j++){
        document.write(`<td style='width:30px; height:50px;'>${i}X${j}=${i*j}</td>`);
    }
    document.write("</tr>");
}
