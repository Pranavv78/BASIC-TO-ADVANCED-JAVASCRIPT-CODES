/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment ---> IMP FOR MULTIPLE LINE COMMENT.
 
    

 # DATE: 29/03/2024.
 ====================

   # Methods of primitives:

    JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. They also provide methods to call as such. We will study those soon, but first we’ll see how it works because, of course, primitives are not objects (and here we will make it even clearer).

    Let’s look at the key distinctions between primitives and objects.

    $ A primitive

        Is a value of a primitive type.
        There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

    
    $ An object
    1. Is capable of storing multiple values as properties.
    2. Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.
    3. One of the best things about objects is that we can store a function as one of its properties.

            let john = {
            name: "John",
            sayHi: function() {
                alert("Hi buddy!");
            }
            };

            john.sayHi(); // Hi buddy!

    So here we’ve made an object john with the method sayHi.
    Many built-in objects already exist, such as those that work with dates, errors, HTML elements, etc. They have different properties and methods.
    But, these features come with a cost!
    Objects are “heavier” than primitives. They require additional resources to support the internal machinery.



    A primitive as an object:
    Here’s the paradox faced by the creator of JavaScript:

        There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.
        Primitives must be as fast and lightweight as possible.
        The solution looks a little bit awkward, but here it is:

        Primitives are still primitive. A single value, as desired.
        The language allows access to methods and properties of strings, numbers, booleans and symbols.
        In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.
        The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.

        For instance, there exists a string method str.toUpperCase() that returns a capitalized str.

        Here’s how it works:

        let str = "Hello";

        alert( str.toUpperCase() ); // HELLO
    
    Simple, right? Here’s what actually happens in str.toUpperCase():

        The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
        That method runs and returns a new string (shown by alert).
        The special object is destroyed, leaving the primitive str alone.
        So primitives can provide methods, but they still remain lightweight.

        The JavaScript engine highly optimizes this process. It may even skip the creation of the extra object at all. But it must still adhere to the specification and behave as if it creates one.

        A number has methods of its own, for instance, toFixed(n) rounds the number to the given precision:

        let n = 1.23456;

        alert( n.toFixed(2) ); // 1.23

    
    Summary
        Primitives except null and undefined provide many helpful methods. We will study those in the upcoming chapters.
        Formally, these methods work via temporary objects, but JavaScript engines are well tuned to optimize that internally, so they are not expensive to call.

===================================================================================================================================================================================
                               * Numbers *

   
    # Numbers:
     In modern JavaScript, there are two types of numbers:
       1. Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”
       2. BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1)
       
       More ways to write a number
    Imagine we need to write 1 billion. The obvious way is:

        let billion = 1000000000;
        We also can use underscore _ as the separator:

        let billion = 1_000_000_000;
        Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.

        Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.

            In real life though, we try to avoid writing long sequences of zeroes. We’re too lazy for that. We’ll try to write something like "1bn" for a billion or "7.3bn" for 7 billion 300 million. The same is true for most large numbers.

            In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

            let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

            alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)


        In other words, e multiplies the number by 1 with the given zeroes count.

            1e3 === 1 * 1000; // e3 means *1000
            1.23e6 === 1.23 * 1000000; // e6 means *1000000
            Now let’s write something very small. Say, 1 microsecond (one millionth of a second):

            let mсs = 0.000001;

        Just like before, using "e" can help. If we’d like to avoid writing the zeroes explicitly, we could write the same as:

                let mcs = 1e-6; // five zeroes to the left from 1
                If we count the zeroes in 0.000001, there are 6 of them. So naturally it’s 1e-6.

                In other words, a negative number after "e" means a division by 1 with the given number of zeroes:

        // -3 divides by 1 with 3 zeroes
        1e-3 === 1 / 1000; // 0.001

        // -6 divides by 1 with 6 zeroes
        1.23e-6 === 1.23 / 1000000; // 0.00000123

        // an example with a bigger number
        1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times


    Hex, binary and octal numbers
    Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there exists a shorter way to write them: 0x and then the number.

        For instance:

        alert( 0xff ); // 255
        alert( 0xFF ); // 255 (the same, case doesn't matter)

        Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:
        let a = 0b11111111; // binary form of 255
        let b = 0o377; // octal form of 255

        alert( a == b ); // true, the same number 255 at both sides
===============================================================================================================================================================================

    # toString(base):

    The method num.toString(base) returns a string representation of num in the numeral system with the given base.

        For example:

        let num = 255;

        alert( num.toString(16) );  // ff
        alert( num.toString(2) );   // 11111111
        The base can vary from 2 to 36. By default it’s 10.

        Common use cases for this are:

        base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

        base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

        base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36:
    
         alert( 123456..toString(36) ); // 2n9c

===============================================================================================================================================================================

    # Rounding:
    One of the most used operations when working with numbers is rounding.

        There are several built-in functions for rounding:

        $ Math.floor
          Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

        $ Math.ceil: 
          Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

        $ Math.round
         Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
 

        There are two ways to do so:

            Multiply-and-divide.

            For example, to round the number to the 2nd digit after the decimal, we can multiply the number by 100, call the rounding function and then divide it back.

            let num = 1.23456;

            alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
        
    This rounds up or down to the nearest value, similar to Math.round:

            let num = 12.36;
            alert( num.toFixed(1) ); // "12.4"


   Please note that the result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:

        let num = 12.34;
        alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits
  
    We can convert it to a number using the unary plus or a Number() call, e.g write +num.toFixed(5).

==================================================================================================================================================================================

    # Imprecise calculations:
    IMP: Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number: 
         52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.


    If a number is really huge, it may overflow the 64-bit storage and become a special numeric value Infinity:
       alert( 1e500 ); // Infinity


    What may be a little less obvious, but happens quite often, is the loss of precision.
        Consider this (falsy!) equality test:

        alert( 0.1 + 0.2 == 0.3 ); // false


    That’s right, if we check whether the sum of 0.1 and 0.2 is 0.3, we get false.
        Strange! What is it then if not 0.3?

        alert( 0.1 + 0.2 ); // 0.30000000000000004


    Ouch! Imagine you’re making an e-shopping site and the visitor puts $0.10 and $0.20 goods into their cart. The order total will be $0.30000000000000004. That would surprise anyone.

        But why does this happen?

        A number is stored in memory in its binary form, a sequence of bits – ones and zeroes. But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form.

        What is 0.1? It is one divided by ten 1/10, one-tenth. In decimal numeral system such numbers are easily representable. Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).

        So, division by powers 10 is guaranteed to work well in the decimal system, but division by 3 is not. For the same reason, in the binary numeral system, the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.

        There’s just no way to store exactly 0.1 or exactly 0.2 using the binary system, just like there is no way to store one-third as a decimal fraction.

        The numeric format IEEE-754 solves this by rounding to the nearest possible number. These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.

        We can see this in action:

        alert( 0.1.toFixed(20) ); // 0.10000000000000000555

    And when we sum two numbers, their “precision losses” add up.
            That’s why 0.1 + 0.2 is not exactly 0.3.


    Can we work around the problem? Sure, the most reliable method is to round the result with the help of a method toFixed(n):

        let sum = 0.1 + 0.2;
        alert( sum.toFixed(2) ); // "0.30"
        Please note that toFixed always returns a string. It ensures that it has 2 digits after the decimal point. That’s actually convenient if we have an e-shopping and need to show $0.30. For other cases, we can use the unary plus to coerce it into a number:

    
    Please note that toFixed always returns a string. It ensures that it has 2 digits after the decimal point. That’s actually convenient if we have an e-shopping and need to show $0.30. For other cases, we can use the unary plus to coerce it into a number:

        let sum = 0.1 + 0.2;
        alert( +sum.toFixed(2) ); // 0.3


    We also can temporarily multiply the numbers by 100 (or a bigger number) to turn them into integers, do the maths, and then divide back. Then, as we’re doing maths with integers, the error somewhat decreases, but we still get it on division:

        alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
        alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
        So, multiply/divide approach reduces the error, but doesn’t remove it totally.

        Sometimes we could try to evade fractions at all. Like if we’re dealing with a shop, then we can store prices in cents instead of dollars. But what if we apply a discount of 30%? In practice, totally evading fractions is rarely possible. Just round them to cut “tails” when needed.

    
    $ The funny thing
        Try running this:

        // Hello! I'm a self-increasing number!
        alert( 9999999999999999 ); // shows 10000000000000000
        This suffers from the same issue: a loss of precision. There are 64 bits for the number, 52 of them can be used to store digits, but that’s not enough. So the least significant digits disappear.

        JavaScript doesn’t trigger an error in such events. It does its best to fit the number into the desired format, but unfortunately, this format is not big enough.


    # Tests: isFinite and isNaN:
      
      Remember these two special numeric values?

        Infinity (and -Infinity) is a special numeric value that is greater (less) than anything.
        NaN represents an error.
        They belong to the type number, but are not “normal” numbers, so there are special functions to check for them:

        isNaN(value) converts its argument to a number and then tests it for being NaN:

        alert( isNaN(NaN) ); // true
        alert( isNaN("str") ); // true

    But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not. The value NaN is unique in that it does not equal anything, including itself:

     alert( NaN === NaN ); // false


    isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

    Sometimes isFinite is used to validate whether a string value is a regular number:
    let num = +prompt("Enter a number", '');

        // will be true unless you enter Infinity, -Infinity or not a number
        alert( isFinite(num) );

    Please note that an empty or a space-only string is treated as 0 in all numeric functions including isFinite.


    $ Comparison with Object.is
        There is a special built-in method Object.is that compares values like ===, but is more reliable for two edge cases:

        It works with NaN: Object.is(NaN, NaN) === true, that’s a good thing.
        Values 0 and -0 are different: Object.is(0, -0) === false, technically that’s correct, because internally the number has a sign bit that may be different even if all other bits are zeroes.
        In all other cases, Object.is(a, b) is the same as a === b.

        We mention Object.is here, because it’s often used in JavaScript specification. When an internal algorithm needs to compare two values for being exactly the same, it uses Object.is (internally called SameValue).



    $ parseInt and parseFloat:
    Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:

            alert( +"100px" ); // NaN
            The sole exception is spaces at the beginning or at the end of the string, as they are ignored.

            But in real life we often have values in units, like "100px" or "12pt" in CSS. Also in many countries the currency symbol goes after the amount, so we have "19€" and would like to extract a numeric value out of that.

            That’s what parseInt and parseFloat are for.

            They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. The function parseInt returns an integer, whilst parseFloat will return a floating-point number:

            alert( parseInt('100px') ); // 100
            alert( parseFloat('12.5em') ); // 12.5

            alert( parseInt('12.3') ); // 12, only the integer part is returned
            alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading



    There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:

     alert( parseInt('a123') ); // NaN, the first symbol stops the process



    $ Other math functions
        JavaScript has a built-in Math object which contains a small library of mathematical functions and constants.

        A few examples:

        Math.random()
        Returns a random number from 0 to 1 (not including 1).

        alert( Math.random() ); // 0.1234567894322
        alert( Math.random() ); // 0.5435252343232
        alert( Math.random() ); // ... (any random numbers)

    Math.max(a, b, c...) and Math.min(a, b, c...)
        Returns the greatest and smallest from the arbitrary number of arguments.

        alert( Math.max(3, 5, -10, 0, 1) ); // 5
        alert( Math.min(1, 2) ); // 1
   
    $ Math.pow(n, power)
       Returns n raised to the given power.

     alert( Math.pow(2, 10) ); // 2 in power 10 = 1024

  
    $ Summary

     To write numbers with many zeroes:

        Append "e" with the zeroes count to the number. Like: 123e6 is the same as 123 with 6 zeroes 123000000.
        A negative number after "e" causes the number to be divided by 1 with given zeroes. E.g. 123e-6 means 0.000123 (123 millionths).


    For different numeral systems:

        Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems.
        parseInt(str, base) parses the string str into an integer in numeral system with given base, 2 ≤ base ≤ 36.
        num.toString(base) converts a number to a string in the numeral system with the given base.

    
    For different numeral systems:

        Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems.
        parseInt(str, base) parses the string str into an integer in numeral system with given base, 2 ≤ base ≤ 36.
        num.toString(base) converts a number to a string in the numeral system with the given base.
        For regular number tests:

        isNaN(value) converts its argument to a number and then tests it for being NaN
        Number.isNaN(value) checks whether its argument belongs to the number type, and if so, tests it for being NaN
        isFinite(value) converts its argument to a number and then tests it for not being NaN/Infinity/-Infinity
        Number.isFinite(value) checks whether its argument belongs to the number type, and if so, tests it for not being NaN/Infinity/-Infinity
        For converting values like 12pt and 100px to a number:

        Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.
        For fractions:

        Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
        Make sure to remember there’s a loss of precision when working with fractions.
        More mathematical functions:

        See the Math object when you need them. The library is very small, but can cover basic needs.

  
    # Tasks:

    1. Create a script that prompts the visitor to enter two numbers and then shows their sum.
     
    SOLUTION:

    let a= +prompt(`ENTER THE FIRST NUMBER: `,``);

        let b= +prompt(`ENTER SECOND NUMBER: `,``);

        alert(a+b);

        Note the unary plus + before prompt. It immediately converts the value to a number.
        Otherwise, a and b would be string their sum would be their concatenation, that is: "1" + "2" = "12".


    2. Why 6.35.toFixed(1) == 6.3?
        importance: 4
        According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

        For instance:

        alert( 1.35.toFixed(1) ); // 1.4
        In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

        alert( 6.35.toFixed(1) ); // 6.3
        How to round 6.35 the right way?


    SOLUTION: 
    Internally the decimal fraction 6.35 is an endless binary. As always in such cases, it is stored with a precision loss.

            Let’s see:

            alert( 6.35.toFixed(20) ); // 6.34999999999999964473
            The precision loss can cause both increase and decrease of a number. In this particular case the number becomes a tiny bit less, that’s why it rounded down.

            And what’s for 1.35?

            alert( 1.35.toFixed(20) ); // 1.35000000000000008882
            Here the precision loss made the number a little bit greater, so it rounded up.

            How can we fix the problem with 6.35 if we want it to be rounded the right way?

            We should bring it closer to an integer prior to rounding:

            alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
            Note that 63.5 has no precision loss at all. That’s because the decimal part 0.5 is actually 1/2. Fractions divided by powers of 2 are exactly represented in the binary system, now we can round it:

            alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4



    3. Repeat until the input is a number:

    Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
     The resulting value must be returned as a number.

     The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

    
    SOLUTION: 
    function readNumber() {
        let num;

        do {
            num = prompt("Enter a number please?", 0);
        } while ( !isFinite(num) );

        if (num === null || num === '') return null;

        return +num;
        }

        alert(`Read: ${readNumber()}`);


    The solution is a little bit more intricate that it could be because we need to handle null/empty lines.
    So we actually accept the input until it is a “regular number”. Both null (cancel) and empty line also fit that condition, because in numeric form they are 0.
    After we stopped, we need to treat null and empty line specially (return null), because converting them to a number would return 0.
    
    
============================================================================================================================================================
 */