let nameList: Array<string> = ["Samuel", "Mario", "Abdulla", "Loveleen", "Agnes", "Faris", "Andrea"]

for (let i = 0; i < nameList.length; i++) {
    document.write(i);

}

for (let i = 0; i < nameList.length; i++) {
    document.write(`<br>`+ nameList[i]);

}

for (let i = 0; i < nameList.length; i++) {
    document.write(`<br>`+[i]+nameList[i]);

}