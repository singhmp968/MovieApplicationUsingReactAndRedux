function curriedSum(a){
    return function(b){
        return a+b
    }
}

// calling curried
curriedSum(5)(6)
var adadTen = curriedSum(10)
console.log(adadTen(67))
function getVCurryFunction(f){
    return function(a){
        return function(b){
            return function(c){
                return f(a,b,c)
            }
        }
    }
}
function sum(a,b,c){
    return a+b+c;
}
// console.log(1,2,3)
var curriedSum = getVCurryFunction(sum) // passing sum function
console.log(curriedSum(1)(2)(3))