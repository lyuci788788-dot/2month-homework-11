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