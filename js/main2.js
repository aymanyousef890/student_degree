var ex = 123
var exampel 
var sol
exampel= ex.toString().split("").reverse()
    if (exampel.includes('-')) {
       var minc= exampel.pop("-")
       exampel.unshift(minc)
       
    }
    
    sol=exampel.join('')
if (sol>=-2147483648||sol<=2147483648-1) {
    
    
}
else{
    sol=0
}
console.log(sol);