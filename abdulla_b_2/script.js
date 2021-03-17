var person = {
    firstname: "abdulla",
    lastname: "rakib",
    sayHello: function () { console.log("hello " + person.firstname); }
};
person.sayHello();
var per = [{
        firstname: "abdullah",
        lastname: "rakin"
    }, {
        firstname: "humayra",
        lastname: "akter"
    }, {
        firstname: "morcena",
        lastname: "begum"
    }];
var invokperson = function (obj) {
    console.log("first name : " + obj.firstname);
    console.log("last name : " + obj.lastname);
};
invokperson(per[0]);
// ###############2###################
var array = ["rakbib", "rakbib", "rakbib", "rakbib", "rakbib", "rakbib", "rakbib", "rakbib", "rakbib", "rakbib"];
array.forEach(function (array) {
    setTimeout(function () {
        document.getElementById("my_name").innerHTML += array + " ";
        //    document.write(item); 
    }, 5000);
});
// #######################3####################
var nameOfArray = ["rkaib", "abdulla", "shuvo", "rabbi", "martin"];
for (var key in nameOfArray) {
    if (Object.prototype.hasOwnProperty.call(nameOfArray, key)) {
        var element = nameOfArray[key];
        var indexKey = key;
        console.log(indexKey + " is index and values " + element);
    }
}
