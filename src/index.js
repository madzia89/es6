console.log("Hello, ES6!")

//let vs var

for (var i = 0; i < 3; i++){
    console.log("z i " + i)
}

    console.log("i poza scope" + i)


//w poniższym przykładzie wyskoczy błąd, bo j nie jest dostępe poza wąsami {}
for (let j = 0; j < 3; j++){
    console.log(j)
}

console.log("z j " + j)

//REDECLARATION

var name1 = 'zoska' //possible
var name1 = 'toska'//possible

let name2 = 'kaska'
let name2 = 'baska' // impossible to nie przjedzie bo let nie pozwala na redeklarowanie!!
nazwa2 = 'lena' // to jest możliwe bo nie deklarujemy tylko przypisujemy



//HOISTING

function f (){
    c = 2
    var c
    console.log("hoisting var", c)
}
f()

function g() {
    c = 2
    let c
    console.log('hoisting let ', c) // undefined bo let jest poniżej wartości c
}
g()

