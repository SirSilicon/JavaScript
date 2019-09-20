console.log("you made it to the console")

function simpleOperators (numberA, numberB){
  let add = numberA + numberB;
  let sub = numberA - numberB;
  let multi = numberA * numberB;
  let divi = numberA / numberB;
  let modu = numberA % numberB;
  console.log(numberA, numberB,'add', add);
  console.log(numberA, numberB,'sub', sub);
  console.log(numberA, numberB,'multi', multi);
  console.log(numberA, numberB,'divi', divi);
  console.log(numberA, numberB,'modu', modu);

}

let numberList = [4,8,53,21,7,2234,65,2,99,736,89,5,42,56,];
console.log("|0-4||1-8||2-53||3-21||4-7||5-2234||6-65||7-2||8-99||9-736||10-89||11-5||12-42||13-56|")
/*
//simple operators
let add = numberList[0] + numberList[4]
let sub = numberList[0] - numberList[4]
let multi = numberList[0] * numberList[4]
let divi = numberList[0] / numberList[4]
let modu = numberList[0] % numberList[4]
console.log('4 + 7='add)
console.log('4 - 7='sub)
console.log('4 * 7='multi)
console.log('4 / 7='divi)
console.log('4 % 7='modu)
*/
simpleOperators(numberList[0], numberList[4])

function skipCount (interval, repeat, start){
  if (repeat < 0) {console.log("error"); return}
  if ( interval === 0 ){console.log("Infinity"); return}
  let currentCount = start
  for (var i = 0; i < repeat; i++) {
    currentCount = currentCount + interval
    console.log(currentCount)
  }
}

skipCount (0, 10, 0)

function howManyTimes (interval, start, end){
  if (interval > 0 && end < 0 || interval < 0 && end > 0 || interval === 0){console.log("Infinity"); return}
  let currentCount = start
  let i = start
  let count = 0
  while (i < end) {
    i = i + interval
    count++
  }
  console.log(count)
}

howManyTimes (-1,0,50)

function customerType (points){
  if (points >= 100){
  console.log("gold")
  } else {
  console.log("silver")
  }
}
customerType(99)
