// var ex = "LVIII"
// var sol=[]
// var Symbol = ["I","V","X","L","C","D","M"]
// var Value=[1,5,10,50,100,500,1000]
// sol = ex.toUpperCase().split("")
// var i=0
// for (let index = 0; index <= sol.length; index++) {

//     if (sol.includes(sol[index])) {;
//         if ((Value[Symbol.indexOf(sol[index])]) >= (Value[Symbol.indexOf(sol[index + 1])])) {
//             i+= Value[Symbol.indexOf(sol[index])]
//         }
//         else if((Value[Symbol.indexOf(sol[index])]) < (Value[Symbol.indexOf(sol[index + 1])])){
//             i+= Value[Symbol.indexOf(sol[index+1])] - Value[Symbol.indexOf(sol[index])]
//             index+=1
//         }
//         else{
//             i+=  Value[Symbol.indexOf(sol[index])]

//         }
//     }
// }
// console.log(i);
// var ex = "23"
// var numbers = {
//     "1": ["", "", "", ""],
//     "2": ["a", "b", "c", "c"],
//     "3": ["d", "e", "f", "f"],
//     "4": ["g", "h", "i", "i"],
//     "5": ["j", "k", "l", "l"],
//     "6": ["m", "n", "o", "o"],
//     "7": ["p", "q", "r", "s"],
//     "8": ["t", "u", "v", "v"],
//     "9": ["w", "x", "y", "z"]
// }
// var len = 4 - ex.length
// var lengthOfArray = 1
// var solution = []
// if (len == 4) {
// }
// else if (len == 3) {
//     ex = ex + "111"
//     solfunction(ex)
// }
// else if (len == 2) {
//     ex = ex + "11"
//     solfunction(ex)
// }
// else if (len == 1) {
//     ex = ex + "1"
//     solfunction(ex)
// }
// else {
//     solfunction(ex)
// }
// function solfunction(data) {
//     for (var i = 0; i < numbers[data[0]].length; i++) {
//         if (data.includes("7") || data.includes("9")) {
//             for (var z = 0; z < 4; z++) {
//                 for (var x = 0; x < 4; x++) {
//                     for (var c = 0; c < 4; c++) {
//                         solution.push(numbers[data[0]][i] + numbers[data[1]][z] + numbers[data[2]][x] + numbers[data[3]][c]);
//                     }
//                 }
//             }
//         }
//         else {
//             for (var z = 0; z < 3; z++) {
//                 for (var x = 0; x < 3; x++) {
//                     for (var c = 0; c < 3; c++) {
//                         solution.push(numbers[data[0]][i] + numbers[data[1]][z] + numbers[data[2]][x] + numbers[data[3]][c]);
//                     }
//                 }
//             }
//         }
//     }
// }
// function removedub(data) {
//     return [...new Set(data)]
// }
// console.log(removedub(solution));

