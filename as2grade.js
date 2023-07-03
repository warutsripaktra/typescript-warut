var score01 = process.argv.slice(2);
console.log(score01);
var sum01 = 0;
var sum1 = 0;
for (var x in score01) {
    sum1 = Number(score01[x]);
    sum01 = sum01 + sum1;
}
console.log("\u0E04\u0E30\u0E41\u0E19\u0E19\u0E23\u0E27\u0E21\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A ".concat(sum01));
var message01 = "";
if (sum01 >= 80 && sum01 <= 100) {
    message01 = "A";
}
else if (sum01 >= 70) {
    message01 = "B";
}
else if (sum01 >= 60) {
    message01 = "C";
}
else if (sum01 >= 50) {
    message01 = "D";
}
else if (sum01 < 50) {
    message01 = "F";
}
else
    (message01 = "ผิดพลาด");
console.log(message01);
