// 1: What are the results of these expressions - to observe JS behaviours

// a: "" + 1 + 0 = 10 (+ makes it a concatenation, not combine)     
// b: "" - 1 + 0 = -1 (- will convert to number to continue with the math) 
// c: true + false = 1 (1 + 0 = 1)
// d: 6 / "3" = 2 (string convert to number to carry on with math - just like minus)
// e: "2" * "3" = 6 (convert to number to carry on with math - just like minus)
// f: 4 + 5 + "px" = 9px (4+5 happens first then concatenate with the px)
// g: "$" + 4 + 5 = $45 ("$" causes the concatenation to happen and convert all to string)
// h: "4" - 2 = 2 (convert to number to carry on with math - just like minus)
// i: "4px" - 2 = NaN (not a number - NaN, in this case, we can't just smash these 2 values together like +. 
// System can only try to make sense of this when there is only number in the "", anything other than that, it can read it like a string
// then it gets confused because of the minus so it decided to not do anything about it)
// j: "   -9   " + 5 =   -9   5 (+ makes it a concatenation, not combine)
// k: "   -9   " - 5 = -14 (again, it converts to number when there is a minus in the equation)
// l: null + 1 = 1 (null is treated as 0 in arithmetic expression)
// m: undefined + 1 = NaN (if it has not been declared then system cannot make sense of this, so no calculation)
// n: "  \t  \n" - 2 = -2 (again, this case is quite similar to i, however, it converts to number instead of NaN 
//(RegEx counts as empty string in this case --> it returns as 0), then it carries on with a minus in the equation)

function questionOne() {
    console.log ("" + 1 + 0);
    console.log ("" - 1 + 0);
    console.log (true + false); 
    console.log (6 / "3");
    console.log ("2" * "3");
    console.log (4 + 5 + "px");
    console.log ("$" + 4 + 5); 
    console.log ("4" - 2); 
    console.log ("4px" - 2);
    console.log ("   -9   " + 5);
    console.log ("   -9   " - 5);
    console.log (null + 1);   
    console.log (undefined + 1);     
    console.log ("  \t  \n" - 2);
}

// 2: here's code that asks the user for two numbers and shows their sum.
//It works incorrectly. The output in the example below is 12 (for default prompt values)
//Why? Fix it. The result should be 3.

function questionTwo() {
    let a = prompt("First Number?", 1);
    let b = prompt("Second Number?", 2);
    let num1 = parseInt(a);
    let num2 = parseInt(b);

    // alert(a + b); //12
    alert(num1 + num2);
}

// 3: What will be the result for these expressions?

// a: 5 > 4 = true
// b: "apple" > "pineapple" = false (if the apple start with z - zpple then it is true, 
// it is the beginning letter that decides it, no matter how long the string it)
// c: "2" > "12" = true (because this is now a string, and 2 is longer than 1 - as in order)
// d: undefined == null = true (their truthy value is equal but not the absolute value)
// e: undefined === null = false (as explained above)
// f: null == "\n0\n" = false (explaination below)
// g: null === +"\n0\n" = false (explaination below)
function questionThree() {
    console.log (5 > 4)
    console.log ("apple" > "pineapple")
    console.log ("2" > "12")
    console.log (undefined == null)
    console.log (undefined === null)
    console.log (null == "\n0\n")
    console.log (null === +"\n0\n")
}
// null >= 0; //true
// null <= 0; //true
// null == 0; //false
// null > 0;  //false
// null < 0;  //false

function questionFour() {
    if ("0") {
        alert( 'Hello' );
    }
}
/*
    4: Will an alert be shown?
    Yes it is showing, even though it is not ==, the below still true:
    null >= 0; //true
    null <= 0; //true
*/
// 5: Rewrite this if using the conditional operator '?':

function questionFive() { 
    let a = 5;
    let b = 3;
    // let result;
    // if (a + b < 4) {
    //     result = 'Below';
    // } else {
    //     result = 'Over';
    // }
    //console.log(result)

    return (a + b < 4 ? console.log('Below')  : console.log('Over'))
    
}

// 6: Write the delay method with arrow function, delay(func,ms)
// Should work like:
// const hello = ( who )=> console.log(‘Hello ’ + who );
// const delayHello = delay(hello, 300);
// delayHello(‘world’);

function questionSix() {
    //Write delay arrow function here
    //Below is Seb's method:
    const delay = (func, ms) => (...arg) => setTimeout(() => func.apply (null, arg), ms)
    const hello = ( who ) => console.log("Hello "+ who);
    const delayHello = delay(hello, 3000);
    delayHello("world");
}
// The above is the most efficient way to code, but not easy to understand
// first, delayHello is passing "world" as argument, this will get fed into the "who" bit in const hello, which trigger delayHello
// now const delayHello is calling const delay as it pass func hello and 3000ms as argument
// the ...arg is called the spread / rest operator, which combine as many "who" you want
// all of these will be fed to setTimeout using func.apply() 
// the null is actually thisArg - but we are not using the 'this' so it is kinda skipped for now
    
//Rewriting the function, trying to understand:

function questionSixAlternateAnswer() {
    const hello = ( who ) => console.log("Hello "+ who);
    hello('world immediate'); // function call, executes immediately
    const helloWrapper = () => hello('world slowly'); // annonymouse function, executes when being called
    setTimeout(helloWrapper, 3000); // it is easier to assign the whole anno function to a variable and pass it to setTimeout
}
function questionSixAlternativeAnswer2() {
    const hello = ( who ) => console.log("Hello "+ who);
    const delayHello = questionSixPart3(hello, 3000);
    delayHello("world slowly");
}
function questionSixPart3(func, ms) {
    return (...args) => {
        setTimeout(() => func.apply(null, args), ms);
    }
}
    /*Theories
    annon function -> variable
    const anonFunction = () => {
        console.log('annon function')
     };
    named function
    function namedFunctio() {
         console.log('i am a named function');
       }
    */
    function questionSixTestingforfun() {
    // Just testing ... for funsies
        const obj = {
            name: 'meep',
            age: '2',
            color: 'mixed'
        }
        const arr = [1, 2, 3, 4];
        console.log(...arr); // 1 2 3 4
        console.log({...obj}); // {name: 'meep', age: '2', color: 'mixed'}
        // apparently it doesn't print the obj with (...obj) but it needs ({...obj})
    }
    

// 7: Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function questionSeven() {
    //Write isEmpty function here:
    function isEmpty (obj) {
        return Object.keys(obj).length === 0;
    };
    // Other ways to do it:

    // Method 2:
    // function isEmpty(obj) {
    //     for(var prop in obj) {
    //         if(obj.hasOwnProperty(prop))
    //             return false;
    //     }
    
    //     return true;
    // }

    // Method 3
    // function isEmptyObject(obj){
    //     return JSON.stringify(obj) === '{}';
    // }

    // Method 4
    // jQuery.isEmptyObject(obj); 

    // Method 5 (using Lodash)
    // _.isEmpty(obj);

    let schedule = {};

    alert( isEmpty(schedule) ); // true
    console.log( isEmpty(schedule) );

    schedule['8:30'] = "get up";

    alert (isEmpty(schedule) ); // false
    console.log(isEmpty(schedule) );
}

// 8: There's a ladder object that allows you to go up and down

function questionEight() {
    let ladder = {
        step: 0,
        up() {
            this.step++;
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function() { //shows the current step
            console.log( this.step )
        }
    }
    //Modify the code of up, down, and showStep to make the calls chainable,
    //like this:
    ladder.up().up().down().showStep(); // 1
}
//explaination: the return.this will update the step with new return, otherwise nothing will come out of this function

// 9: Create New Accumulator
//Create a constructor function Accumulator(startingValue).
//Object that it creates should:

//  1: Store the "current value" in the property value. The starting value
//  is set to the argument of the constructor startingValue
//
//  2: The read() method should use prompt to read a new number and add it to value

//In other words, the value property is the sum of all user-entered
//values with the initial value startingValue

//Here's the demo of the code:

function questionNine() {
    //Write constructor function here
    function Accumulator(startingValue) {
        this.value = startingValue;
        this.read = function() {
          this.value += +prompt('How much to add?', 0); // the + makes it a number instead of conca, it will combine. 
          //+prompt() is like writing +"3" or +"10" . 
          //It just tries to cast the outcome to a number. 
          //It will change the string the prompt returns into a number.
        };    
      }
    
    let accumulator = new Accumulator(1); //initial value 1
    accumulator.read(); //adds the user-entered value
    accumulator.read(); //adds the user-entered value
    console.log(accumulator.value); // shows the sum of these values
}