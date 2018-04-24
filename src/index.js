// // console.log("Hello, ES6!")
// //
// // // // //let vs var
// // // // // // //
// // // // // // // for (var i = 0; i < 3; i++){
// // // // // // //     console.log("z i " + i)
// // // // // // // }
// // // // // // //
// // // // // // //     console.log("i poza scope" + i)
// // // // // // //
// // // // // // //
// // // // // // // //w poniższym przykładzie wyskoczy błąd, bo j nie jest dostępe poza wąsami {}
// // // // // // // for (let j = 0; j < 3; j++){
// // // // // // //     console.log(j)
// // // // // // // }
// // // // // // //
// // // // // // // console.log("z j " + j)
// // // // // //
// // // // // // //REDECLARATION
// // // // // //
// // // // // // var name1 = 'zoska' //possible
// // // // // // var name1 = 'toska'//possible
// // // // // //
// // // // // // let name2 = 'kaska'
// // // // // // let name2 = 'baska' // impossible to nie przjedzie bo let nie pozwala na redeklarowanie!!
// // // // // // nazwa2 = 'lena' // to jest możliwe bo nie deklarujemy tylko przypisujemy
// // // // // //
// // // // // //
// // // // // //
// // // // // //HOISTING
// // // // //
// // // // // function f (){
// // // // //     c = 2
// // // // //     var c
// // // // //     console.log("hoisting var", c)
// // // // // }
// // // // // f()
// // // // //
// // // // // function g() {
// // // // //     c = 2
// // // // //     let c
// // // // //     console.log('hoisting let ', c) // undefined bo let jest poniżej wartości c
// // // // // }
// // // // // g()
// // // //
// // // // //TEMPLATE STRINGS
// // // //
// // // // const myName = 'Magda'
// // // // const heloMyName = `Hello ${myName}`
// // // // console.log(heloMyName)
// // // //
// // // // console.log(`2 + 2 equals ${2+2}`) //also works with putting variables into a string!
// // // //
// // // // console.log(`1
// // // // 2
// // // // 3
// // // // 4`) // it lets you console.log in multiple lines
// // // //
// // // // const isGreenFavorite = false
// // // // console.log(
// // // //     `my favorite color is ${isGreenFavorite ? '' : 'not'} green!` //if green isfavorite then it'll show just green else it will ad word not so it'll look like: my favorite color is NOT green
// // // // )
// // //
// // // //FUNKCJE STRZAŁKOWE zapisujemy w constach żeby nam ich nikt nie nadpisywał
// // //
// // // const addOne = (a) => {
// // //     return a + 1
// // // }                       //pierwsza wersja
// // //
// // // console.log(addOne(6))
// // //
// // // const addOneV2 = a => {
// // //     return a + 1
// // // }       //druga wersja
// // //
// // // console.log(addOneV2(7))
// // //
// // // const addOneV3 = a => a+1   //trzecia wersja
// // //
// // // console.log(addOneV3(10))
// // //
// // //
// // // //ponizej funnkcja strzałkowa dodająca dwa parametry
// // // const addTwo = (a, b) => a + b
// // //
// // // console.log(addTwo(5,8))
// // //
// // // // //poniższa wersja nie będzie działać bo returna mozemy pominąć gdy nie używamy {}
// // // // const addsTwos = (c,d) => {c + d}
// // // //
// // // // console.log(addsTwos(5,8))
// // //
// // //
// // // //
// // // const sum =((a, b) => a + b) (1,2) // funkcja addTwo zamknięta w samowywołującej się funkcji wraz z parametrami na końcu
// // // console.log("this is sum "+ sum)
// // //
// // //
// // // //
// // // const returnobj = () => {name: "Magda"} // nie zadziała ponieważ klamerki traktują tekst w środku jak blok kodu a nie zwartość obiektu. Aby działało trzeba to zapaisać o tak:
// // //
// // // const returnObj = () => (name: "Magda")
// //
// // // THIS w funkcjach strzałkowych. W zwykłych funkcjach this wskazuje na kontekst wywołania, a w funkcjach strzałkowych na kontekst w którym zadeklarowano danego thisa
// //
// // //np:
// // //zwykła dunkcja
// // function Cat(name){
// //  this.name = name
// //  this.sound = 'Meow'
// //  this.makeSound = function(){
// //      console.log(this.sound)
// //  }
// // }
// //
// // //funkcja strząłkowa
// // function ArrowCat(name){
// //     this.name = name
// //     this.sound = 'Meow'
// //     this.makeSound = () => console.log(this.sound)
// // }
// //
// // const cat = new Cat ("Bubuś")
// // cat.makeSound()
// //
// // window.makeSoundInGlobalScope = cat.makeSound
// // window.makeSoundInGlobalScope() //undefined because in global scope there is no
// //
// // const arrowCat = new ArrowCat ('hubek')
// // arrowCat.makeSound()
// //
// // window.makeSoundInGlobalScope = arrowCat.makeSound
// // window.makeSoundInGlobalScope() //zadziała bo funkcja this pamięta this z momentu deklaracji
// //
// // //task 4:
// // // function Counter (){
// // //     this.counter = 0
// // //     setInterval(
// // //         function () {
// // //             this.counter += 1
// // //             console.log(this.counter)
// // //         }.bind(this)
// // //         ,
// // //         1000
// // //     )
// // // }
// // //
// // // window.counter = new Counter()
// // //poniżej to samo ze strzałkami
// // function ArrowCounter (){
// //     this.counter = 0
// //     this.intervalId = setInterval(
// //         () => {this.counter++
// //         console.log(this.counter)}
// //         ,
// //         1000
// //     )
// //     //poniższe cztery linijki ustawiają czas po jakim ma się przestać wykonywać setInterval
// //     setTimeout(
// //         () => clearInterval(this.intervalId)
// //         ,
// //         5000
// //     )
// // }
// // window.arrowCounter = new ArrowCounter()
//
// //KLASY są w ES6 konstruktorem funkcji ale nie można ich wywołać jak funkcji możemy wyowłać tylko metody które są w środku a reszta jest w prototypie
// class Animal {
//     //object construcor
//     //executed when new ClassName()
//     //the same thing as constructor function
//     constructor(sound){
//         this.sound = sound
//     }
//     // class method
//     //same as prototype __proto__ methds
//     //it will belong to __proto__ in new object
//     makeSound() {
//         console.log(this.sound)
//     }
// }
//
// const animal = new Animal('wrr')
// console.log(animal)
//
//
// class Dog extends Animal { //extends rozszerza inna klasę czyli w tym przypadku klasa Dog jest rozszerzeniem klasy animal
//     constructor(breed){
//         //wykonujemy konstruktor Animal poprzez super
//         super('woof')  //super czyli klasa wyżej!
//         this.breed = breed
//     }
// }
// const dog = new Dog('beagle')
// console.log(dog)
//
//
// //powyższy konstruktor kontra zwykły poniższy konstruktor
//
// function AnimalConstructor(sound){
//     this.sound = sound
// }
//
// AnimalConstructor.prototype.makeSound = function (){
//     console.log(this.sound)
// }
//
// const animalFromConstructor = new AnimalConstructor('wrr')
// console.log(animalFromConstructor)

//
// //MODULES IMPORT
// import {names1} from './exports'  //zaimportuje zmienną name1 z exports.js
// import {names2 as someName} from './exports'
// import myNameForImportedByDEFAULT from './exports'  //import default można to łączyć również z powyższym sposobem importu {} np
// // import myNameForImportedByDEFAULT, {names1} from './eports'
// console.log(someName)
// console.log(names1)
// console.log(myNameForImportedByDEFAULT)


//DETRUKTURYZACJA
const obj = {
    name: 'Magda',
    lastname: 'xxx'
}

const hello = ({name, lastname}) => {
    console.log(`Hello ${name} ${lastname}`)
}

const someObj = {
    skaj: {name: "Ania", lastname: "Umorusana"},
    asdaaa: {name: "Hania", lastname: "Banana"},
    seserf: {name: "Ewa", lastname: "Zdrzewa"},
    skawerj: {name: "Bolek", lastname: "Lolek"}
} //aby console.log imiona z tego:

console.log(Object.entries(someObj).map(person => person[1].name)) //wykonsoluje same imiona ale ładniej zapiszemy to:
console.log(Object.entries(someObj).map(([, {name}]) => name))

