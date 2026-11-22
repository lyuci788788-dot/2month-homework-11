// 1-mashq

// let numbers = [1, 2, 23, 4, 52]
// let result = numbers.reduce((acc, num) => acc + num, 0);
// let average = result / numbers.length
// console.log(average);


// 2-mashq

// let number2 = [94, 54, 34, 7]
// let sum = number2.reduce((acc, num) => acc + num, 0)
// console.log(sum);


// 3-mashq

// let text = "salom hammaga"
// let sum = text.split(" ")
// let word = text.charAt(0).toUpperCase() + text.slice(1)
// console.log(word);



// 4-mashq

// let number3 = "salom hi hello Привет";
// let result = number3.split(" ");
// let words = result.map((a) => a.length);
// console.log(words);


// 5-mashq

// let text = "s1al55om2"
// let words = text.split("")
// let result = words.filter((num) => !isNaN(Number (num)))
// console.log(result);


// 6-mashq

// let text = [ "hi", 34, true, null, ":D"];
// let result = text.filter((son) => typeof son === "number" );
// console.log(result);

// 7-mashq

// let text = "mihoyo"
// let word = text.split("")
// if ( word.some((son) => !isNaN(Number(son)))) {
//   console.log("son bor");
// }else{
//   console.log("son yo'k");
// }

// 8-mashiq

// let text = [30, 49 ,49, 9403, 493, 45,]
// let result = text.filter((JuftSon) => JuftSon % 2 === 0)
// console.log(result);


// --------------------------------------------------

// XATO

// let son = [49, 95, 595, 483, 93, 2]
// let result = []
// for (let i = 0; i < son.length; i++) {
// if(son[i] % 2 === 0){
//   result.push(son[i]);
// }
// }
// console.log(result);
// ----------------------------------------------------



// 9-mashq

// let text = [30, 419 ,42, 90, 493, 45, 12]
// let result = text.filter((JuftSon) => JuftSon % 2 === 1)
// console.log(result);


// 10-mashq

// juft
// let son = [49, 95, 595, 483, 93, 2]
// let result = []
// for (let i = 0; i < son.length; i++) {
// if(son[i] % 2 === 0){
//   result.push(son[i]);
// }
// }
// console.log(result);

// toq
// let son = [ 39, 4334, 443, 45, 433, 5433, 45, 1]
// let result = []
// for (let i = 0; i < son.length; i++) {
// if(son[i] % 2 === 1){
//   result.push(son[i])
// }
// }
// console.log(result);

// 11-mashq

// let text = "dsjdj sjjfsjrvs dsfjsd"
// let sum = text.split(" ")
// console.log(sum);


// 12-mashq

// let number = 16
// let result = 1
// while(result < number){
//   result *= 4
// }
// if(number === result){
//   console.log(true);
// }else{
//   console.log(false);
// }

// 13-mashq

// let word = "fjhasgkjsdgdfsk"
// let letters = word.split("")
// for (let i = letters.length - 1; i > 0 ; i--) {
//   console.log(letters[i]);
// }

// 14-mashq

// let arr = ["salom", "nima", "Qani", "qayerda"];
// let result = arr.filter((word) => word.toLowerCase().startsWith("q"),);
// console.log(result);














// QO'SHIMCHA

//  1

// let numbers = [12, 5, 8, 21, 44, 7, 90]
// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 2 === 0)
// console.log(numbers[i]); 
// }

// 2

// let words = ["cat", "hello", "javascript", "dog", "apple"]
// let word = words.map((w) => w.length)
// let a = []
// for (let i = 0; i < words.length; i++) {
// if(word[i] > 4 ){
// a.push(words[i])
// }   
// }
// console.log(a);

// 3

// let numbers = [12, 45, 67, 150, 23]
// if(numbers.some((num) => num > 100)){
//   console.log("yuzdan katta son bor");
// }else{
//   console.log("yuzdan kata son yo'k");
// }


// 4

//  let words = ["Apple", "banana", "Anime", "orange", "apricot"]
//  let wodsA = words.filter((harf) => harf.toLowerCase().startsWith("a"))
// console.log(wodsA);

// 5

// let text = "I love JavaScript and Blender";
// let word = text.split(" ")
// let numberWords = word.map((num) => num.length)
// console.log(numberWords);


// 6

// let word = "mihoyo";
// let word2 = ""
// for (let i = word.length -1; i >= 0 ; i--) {
//   word2 +=word[i]
// }
// console.log(word2);

// 7

// let number =[]
// let numbers = [-5, 10, -20, 30, 0, 45, -2];
// for (let i = 0; i < numbers.length; i++) {
// if(numbers[i] >= 0){
// number.push(numbers[i])
// }
// }
// console.log(number);


// 8

// let numbers = [10, 20, 30, 40];
// let result = numbers.reduce((acc, num) => acc+num, 0)
// console.log(result);


// 9

// let words = ["hello", "cat", "world", "apple", "robot"];
// let wordO = words.filter((harf) => harf.includes("o"));
// console.log(wordO);

// 10

// let word = "helloWorld";
// let result = word.split("").some((letter) => letter !== letter.toLowerCase())

// if (result){
//   console.log("katta harf bor");
// }else{
//   console.log("katta harf yo'k");
// }


// 11 

// let a = 7
// let b = 8
// console.log(a+b, a-b, a*b, a/b);

// 12

// let num1 = 20
// let num2 = 20
// if(num1 > num2){
//   console.log("num1 katta");
// }else if (num1 < num2){
//   console.log("num2 katta");
// }else{
//   console.log("ikkalasi teng");
// }

// 13

// let a = 54345
// if(a % 2 === 0){
//   console.log("juft");
// }else{
//   console.log("toq");
// }

// 14

// let b = 34
// if(b > 0){
//   console.log("Positive");
// }else if (b < 0){
//   console.log("Negative");
// }else if(b = 0){
//   console.log("Zero");
// }

// 15

// let age = 18
// if (agr >= 18){
//   console.log(Adult);
// }else{
//   console.log(Minor);
// }

// 16

// let number1 = 46
// let number2 = 54
// let number3 = 94
// let max = number1
// if(number2 > max){
//   max = number2
// }if (number3 > number1){
//   max = number3
// }
// console.log(max);

// 17

// let a = 31
// if(a % 3 === 0 && a % 5 === 0){
//   console.log(`3 ga va 5 ga bo'linadi`);
// }else if(a % 3 === 0 && a % 5 !== 0){
//   console.log(`faqat 3 ga bolinadi`);
// }else if ( a % 3 !== 0 && a % 5 === 0){
//   console.log(`faqat 5 ga bolinadi`);
// }else{
//   console.log(`ikalasiga ham bolinmaydi`);
// }

// 18   не поняла


// 19

// let login = "lyuci788"
// let parol = 788

// if(login && parol){
//   console.log(`parol va login to'g'ri`);
// }else{
//   console.log(`parol yoki login xato`);
// }

// 20

// let day = 3
// switch (day){

//   case 1:
//   console.log("Monday");
//   break;

//   case 2:
//     console.log("thoTuesday");
//     break;

//     case 3:
//       console.log("Wednesday");
//       break;

//           case 4:
//       console.log("Thursday ");
//       break;

//           case 5:
//       console.log("Friday ");
//       break;

//           case 6:
//       console.log("Saturday ");
//       break;

//                 case 7:
//       console.log("Sunday");
//       break;

//       default:
//         console.log(`bundy hafta kun yo'k`);
// }

// 21

// const score = 85;

// switch (true) {
//   case score >= 90:
//     console.log("Отлично");
//     break;
//   case score >= 75:
//     console.log("Хорошо"); // Сработает это условие
//     break;
//   default:
//     console.log("Нужно подтянуть");
// }


// 22

// let num = 70
// if(num % 10 === 5){
//   console.log(`5ga bo'linadi`);
// }else{
//   console.log(`5ga bo'linmaydi`);
// }

// 23

// let number = 54
// let numEnd = number % 10
// console.log(numEnd);

// 24

// let num = 53638
// let betweenNum = Math.floor(num/10)%10
// console.log(betweenNum);


// 25

// let number = 34
// let number2 = Math.sqrt(number)
// console.log(number2);

// 26

// let number = 34
// let number2 = Math.pow(number, 2)
// console.log(number2);

// 27

// let a = 43
// let b = 444.43
// let c = 734.43
// let result1 = Math.round(c)
// let result2 = Math.floor(a)
// let result3 = Math.ceil(b)
// console.log(result1, result2, result3);

// 28 

// let maxNum = 10
// let a = Math.floor(Math.random() * maxNum)
// console.log(a);

//  29

let a = 334
let result = 1
while(result < a){
  result*=4
}
if(result === a){
  console.log(true);
}else{
  console.log(false);
}
