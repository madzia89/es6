// console.log("Hello, ES6!")
//
// //let vs var
// // // //
// // // // for (var i = 0; i < 3; i++){
// // // //     console.log("z i " + i)
// // // // }
// // // //
// // // //     console.log("i poza scope" + i)
// // // //
// // // //
// // // // //w poniższym przykładzie wyskoczy błąd, bo j nie jest dostępe poza wąsami {}
// // // // for (let j = 0; j < 3; j++){
// // // //     console.log(j)
// // // // }
// // // //
// // // // console.log("z j " + j)
// // //
// // // //REDECLARATION
// // //
// // // var name1 = 'zoska' //possible
// // // var name1 = 'toska'//possible
// // //
// // // let name2 = 'kaska'
// // // let name2 = 'baska' // impossible to nie przjedzie bo let nie pozwala na redeklarowanie!!
// // // nazwa2 = 'lena' // to jest możliwe bo nie deklarujemy tylko przypisujemy
// // //
// // //
// // //
// // //HOISTING
// //
// // function f (){
// //     c = 2
// //     var c
// //     console.log("hoisting var", c)
// // }
// // f()
// //
// // function g() {
// //     c = 2
// //     let c
// //     console.log('hoisting let ', c) // undefined bo let jest poniżej wartości c
// // }
// // g()
//
// //TEMPLATE STRINGS
//
// const myName = 'Magda'
// const heloMyName = `Hello ${myName}`
// console.log(heloMyName)
//
// console.log(`2 + 2 equals ${2+2}`) //also works with putting variables into a string!
//
// console.log(`1
// 2
// 3
// 4`) // it lets you console.log in multiple lines
//
// const isGreenFavorite = false
// console.log(
//     `my favorite color is ${isGreenFavorite ? '' : 'not'} green!` //if green isfavorite then it'll show just green else it will ad word not so it'll look like: my favorite color is NOT green
// )

//FUNKCJE STRZAŁKOWE zapisujemy w constach żeby nam ich nikt nie nadpisywał

const addOne = (a) => {
    return a + 1
}                       //pierwsza wersja

console.log(addOne(6))

const addOneV2 = a => {
    return a + 1
}       //druga wersja

console.log(addOneV2(7))

const addOneV3 = a => a+1   //trzecia wersja

console.log(addOneV3(10))


//ponizej funnkcja strzałkowa dodająca dwa parametry
const addTwo = (a, b) => a + b

console.log(addTwo(5,8))

// //poniższa wersja nie będzie działać bo returna mozemy pominąć gdy nie używamy {}
// const addsTwos = (c,d) => {c + d}
//
// console.log(addsTwos(5,8))


//
const sum =((a, b) => a + b) (1,2) // funkcja addTwo zamknięta w samowywołującej się funkcji wraz z parametrami na końcu
console.log("this is sum "+ sum)


//
// const returnobj = () => {name: "Magda"} // nie zadziała ponieważ klamerki traktują tekst w środku jak blok kodu a nie zwartość obiektu. Aby działało trzeba to zapaisać o tak:
//
// const returnObj = () => (name: "Magda")

// THIS w funkcjach strzałkowych. W zwykłych funkcjach this wskazuje na kontekst wywołania, a w funkcjach strzałkowych na kontekst w którym zadeklarowano danego thisa

//np:
//zwykła dunkcja
function Cat(name){
 this.name = name
 this.sound = 'Meow'
 this.makeSound = function(){
     console.log(this.sound)
 }
}

//funkcja strząłkowa
function ArrowCat(name){
    this.name = name
    this.sound = 'Meow'
    this.makeSound = () => console.log(this.sound)
}

const cat = new Cat ("Bubuś")
cat.makeSound()

window.makeSoundInGlobalScope = cat.makeSound
window.makeSoundInGlobalScope() //undefined because in global scope there is no

const arrowCat = new ArrowCat ('hubek')
arrowCat.makeSound()

window.makeSoundInGlobalScope = arrowCat.makeSound
window.makeSoundInGlobalScope() //zadziała bo funkcja this pamięta this z momentu deklaracji


// function Counter (){
//     this.counter = 0
//     setInterval(
//         function () {
//             this.counter += 1
//             console.log(this.counter)
//         }.bind(this)
//         ,
//         1000
//     )
// }
//
// window.counter = new Counter()
//poniżej to samo ze strzałkami
function ArrowCounter (){
    this.counter = 0
    setInterval(
        () => this.counter++
        ,
        1000
    )
}
window.arrowCounter = new ArrowCounter()



