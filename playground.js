(() => {console.log('I am orphaned!');})();

// Anonymous normal function
(function(){console.log('I am orphaned!');})();

// Arrow function variants
var fn1 = (a,b) => a + b;
var fn2 = (a,b) => {return a+b;}
var fn3 = (counter) => {
    for(var i=0; i<counter; i++) {
        console.log(i);
    }
}
//calls
console.log(fn1(10,20));
console.log(fn2(15,25))


// a function that returns a function 
function callbackfn1() {
    return function() { console.log('I am a function returned by callbackfn1()')};

}

var callbackfn2 = () => () => { console.log("I am a function returned by callbackfn2()")};

var callbackfn3 = () => () => () => { console.log("I am a function returned by callbackfn2()")};

var scopedCallbackfn4 = () => {
    var counter = 0 ;
    return (a) => {
                    counter += a;
                    return counter;
    }
}

var closurefn5 = (() => {
        var counter = 0;
        return () => {
            counter += 1;
            return counter;
        }
})();

//how to call
var resultfn = callbackfn1();
resultfn();
//above 2 statement can be shorthanded as so
callbackfn1()();        //currying of a funciton
callbackfn2()();
callbackfn3()()();
console.log('Curying function ()()');
console.log(scopedCallbackfn4()());
console.log(scopedCallbackfn4()());
console.log('Creating a static variable effect using closures');
console.log(closurefn5());
console.log(closurefn5());



