//console.log(window.globalSessionObject);
//----------- functions in js ----------------//
// 1. A normal function
// 2. A function having another function
// 3. A function in a context
// 4. A function with sub-contexts
// 5. A function to define a class
// 6. Anonymous functions known as Arrow Functions (lambda functions)
// 7. A function that returns another function (Delegates in modern languages)
//--------------------------------------------//
//-- Declaration of a normal function --
function normalf1(){ console.log('A normal function');}
var normalf2 = function() {console.log('A function variable');}
var jsonObj = {normalf3:function(){console.log('A function as the value of a key in an object');}}
this.contextualFn = function(){console.log('A contextual function');}

//A function that holds another function. Using custom context using 'this'
function nestedf1(){
    this.accessMe = true;
    console.log('In nestedf1()');
    //private scope
    this.subf1 = function(){
        console.log('this log is generated from subf1()');
    }
    //private
    this.subf2 = function(){
        console.log(10*2+100);
    }  
}
//print
//new keyword creates an instance, meaning a memory location
var objNestedf1 = new nestedf1();   //Function behaves like a class
objNestedf1.subf1()
objNestedf1.subf2();
console.log(objNestedf1.accessMe);
console.log(nestedf1());    //calling it as a normal function
//------- A function is to be as class object or a function call?? -------//
// IN JS: A function, if it has a custom context can be called as a class object. This function becomes a js class
//        A function HAS NO context, it is a normal function, and can be called as a function

function Person(){
    this.name = ''; //public
    this.age = 0;
    this.gender = undefined;
    var secret = 'Private assets';  //private accessibility

    this.walks = function(steps){console.log(`${this.name} walks for ${steps} steps`)}
    function createPassword(){  //private accessibility
        console.log('Password not accessible. Created in the mind');
    }
}

var Meena = new Person();
Meena.name = 'Meena';
Meena.age = 25;
Meena.gender = 'Female';
Meena.walks(5000);
//Cannot access the following
// console.log(Meena.secret);
// console.log(Meena.createPassword());
//-------- Anonymous Functions ---------//

//Anonymous arrow function
(() => {console.log("I'm orphaned!");})();

//Anonymous normal function
(function(){console.log("I'm an old orphan!");})()

//Arrow function variants
var fn1 = (a,b) => a+b; //language agnostic syntax
var fn2 = (a,b) => {return a+b;}
var fn3 = (counter) => {
                            for(var i=0; i< counter; i++)
                            {
                                console.log(i);
                            }
                        }
//calls
console.log(fn1(10,20));
console.log(fn2(50,45));
fn3(5);
//------------- A function that returns a function ----------------//

function callbackfn1(){
    return function(){console.log("I'm a function returned callbackfn1()")};
}

var callbackfn2 = () => ()=>console.log("I'm function returned by callbackfn2()");

var callbackfn3 = () => ()=> () => console.log('Doubly nested callbackfn3()');

var scopedCallbackfn4 = () => {
                                var counter = 0;
                                return ()=> {
                                            counter += 1;    //counter=counter+a
                                                return counter;
                                            }
                            }

var closurefn5 = (()=>{
                        var counter = 0;
                        return () => {
                            counter+=1;
                            return counter;
                        }
                    })();

//How to call
var resultfn = callbackfn1();
resultfn();
//above 2 statements can shortened as so
callbackfn1()();    //currying of functions
callbackfn2()();
callbackfn3()()();
console.log('Currying of functions ()()');
console.log(scopedCallbackfn4()());
console.log(scopedCallbackfn4()());
console.log('Creating a static variable effect using closures');
console.log(closurefn5());
console.log(closurefn5());


