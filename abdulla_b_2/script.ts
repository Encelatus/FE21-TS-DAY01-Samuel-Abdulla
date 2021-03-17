
var person = { 
    firstname:"abdulla", 
    lastname:"rakib",
    sayHello:function () { console.log("hello "+person.firstname); }
 }; 

 person.sayHello();

 var per =[{
    firstname:"abdullah",
     lastname:"rakin"
 },{
    firstname:"humayra",
     lastname:"akter"
 },{
    firstname:"morcena",
     lastname:"begum"
 }];
 var invokperson=(obj:{ firstname:string, lastname:string})=>{
     console.log("first name : "+obj.firstname)
     console.log("last name : "+obj.lastname);

 }
invokperson(per[0]);
 
// ###############2###################
    
var array :string[]=["rakbib","rakbib","rakbib","rakbib","rakbib","rakbib","rakbib","rakbib","rakbib","rakbib"];

array.forEach(array => {
    setTimeout( ()=>{
        document.getElementById("my_name").innerHTML+=`${array} `;
    //    document.write(item); 
        },5000);
    });

// #######################3####################
    const nameOfArray :string[]=["rkaib","abdulla","shuvo","rabbi","martin"];

for (const key in nameOfArray) {
    if (Object.prototype.hasOwnProperty.call(nameOfArray, key)) {
        const element = nameOfArray[key];
        const indexKey=key;
        console.log( `${indexKey} is index and values ${element}`);
        
        
    }
}
