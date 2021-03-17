var myNames = [
    { "fName": "Samuel", "lName": " Tenschert" },
    { "fName": "Samuel", "lName": " Tenschert" },
    { "fName": "Samuel", "lName": " Tenschert" },
    { "fName": "Samuel", "lName": " Tenschert" },
    { "fName": "Samuel", "lName": " Tenschert" },
    { "fName": "Samuel", "lName": " Tenschert" },
    { "fName": "Samuel", "lName": " Tenschert" },
    { "fName": "Samuel", "lName": " Tenschert" },
    { "fName": "Samuel", "lName": " Tenschert" },
    { "fName": "Samuel", "lName": " Tenschert" },
];
document.write(myNames[0].fName, myNames[0].lName);
myNames.forEach(function (value) {
    console.log(myNames[0].fName);
});
function lastName() {
    console.log(myNames[0].lName);
}
;
setTimeout(lastName, 5000);
