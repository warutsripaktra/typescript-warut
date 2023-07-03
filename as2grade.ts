let score01 = process.argv.slice(2);
console.log(score01)
let sum01 :number= 0;
let sum1:number =0;
for(let x in score01){
    sum1 = Number(score01[x])
    sum01 = sum01 +sum1
}
console.log(`คะแนนรวมเท่ากับ ${sum01}`)


let message01:string = "";
if (sum01 >= 80 && sum01 <= 100){
   message01 = "A"}
else if(sum01 >= 70){
    message01 ="B"
}else if(sum01 >= 60){
    message01 ="C"
}else if(sum01 >= 50){
    message01 ="D"
}else if(sum01 < 50){
    message01 ="F"
}
else(message01 = "ผิดพลาด")

console.log(message01)
    



