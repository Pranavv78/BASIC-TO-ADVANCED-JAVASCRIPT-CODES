/* 
  TIP 
  :- CTRL + /       ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
  Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
  Ctrl + l              ==> select whole line.

 # DATE: 27/02/2024
 ==================== 
                                * DATA TYPES *

   # A VALUE IN JAVASCRIPT IS ALWAYS IN CERTAIN TYPE. FOR EX. STRING OR NUMBER.
   # THERE ARE 8 BASIC DATA TYPES IN JAVASCRIPT.

   We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:
   EX:-
           // NO ERROR
       let message = "hello";
         message = 1234;

   $ Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, 
         but variables are not bound to any of them.

--------------------------------------------------------------------------------------------------------
    # NUMBER

     let n = 123;
      n = 23.6;

    1. The Number type represents both the integer and floating type number.
    2. There are many types of operations we can perform in Number i.e Addition "+" , Subtsrction "-" , Multiplication "*" , Division "/" And so on..
    3. The Spectial Numeric Values are Infinity, -Infinity and NaN. which also belong to this Datatypes.
       * Infinity :- represents the Mathematical Infinity. It is Spectial value that grater than any number.
            We can get it as a result of division by zero:
                alert(1/0)  // INFINITY.
            Or just reference it directly:
                alert( Infinity ); // Infinity

       * NAN :- is Sticky. Any further mathematical operations on NaN returns NaN.
                alert(NaN + 1); // Nan
                alert(3 * Nan); // Nan
                alert("Not a Nunber"/ 2-1); //Nan
        
        So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

--------------------------------------------------------------------------------------------------------
    # BigInt

     In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991),
       or less than -(253-1) for negatives.

    For most purposes ±(253-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.

    BigInt type was recently added to the language to represent integers of arbitrary length.

    A BigInt value is created by appending n to the end of an integer:

        // the "n" at the end means it's a BigInt
         const bigInt = 1234567890123456789012345678901234567890n;

--------------------------------------------------------------------------------------------------------
    # String

    A string in JavaScript must be surrounded by quotes.
         let str = "hello";
         let str2 = 'Single quotes are ok too';
         let str3 = 'can embed another ${str}';

    In JavaScript, there are 3 types of quotes.
        1. Double quotes: "Hello".
        2. Single quotes: 'Hello'.
        3. Backticks: `Hello`
    
    Tip:
        Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
        Backticks are "extended functionality" quots. they are allow to embedded variablesand expression into stringby wrapping them in ${...}.

        let name ="Pranav";

        //embed a variable
        alert('Hello'.${name}!'); //Hello Pranav

        //embed and expression
        alert('the result is ${1+2}!'); // the result is 3
    
    Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!.

--------------------------------------------------------------------------------------------------------
    # Boolean

    A Boolean types has only two Values True or False.
    This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
         
         let nameFieldCheck = true; // yes, name field is checked.
         let ageFieldCheck = false; // no, age field is not checked.
    
    Boolean values also come as a result of comparisons:
        
        let isGreater = 4 > 1;

         alert( isGreater ); // true (the comparison result is "yes")

--------------------------------------------------------------------------------------------------------
    # The "null" value
    
    The spectial null value does not belong to any type of described above.
    It forms a seperate type of its own which contains onley the null value.
       
        let age = null;

    In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
    It’s just a special value which represents “nothing”, “empty” or “value unknown”.

--------------------------------------------------------------------------------------------------------
    # undefined

    The special value undefined also stands apart. It makes a type of its own, just like null.
    The meaning of undefined is “value is not assigned”.
    If a variable is declared, but not assigned, then its value is undefined:

        let age;

         alert(age); // shows "undefined"
    -----------------------------------------
    Technically, it is possible to explicitly assign undefined to a variable:
        let age = 100;

        // change the value to undefined
          age = undefined;
          alert(age); // "undefined"

--------------------------------------------------------------------------------------------------------
   # Objects and Symbols.

   Objects are used to store collection of data and more complex entities.

    TIP: Learn this more in Object Chapter.

--------------------------------------------------------------------------------------------------------
    # typeof Operator

    The typeof operator is returned the type of the  operand. It is usefull when we want to process values to diffrent types differentely or just want to do a quick check.
         
        typeof undefined // "undefined"

        typeof 0 // "number"

        typeof 10n // "bigint"

        typeof true // "boolean"

        typeof "foo" // "string"

        typeof Symbol("id") // "symbol"

        typeof Math // "object"  (1)

        typeof null // "object"  (2)

        typeof alert // "function"  (3)

     Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.

     The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
    
--------------------------------------------------------------------------------------------------------

    # SUMMARY

    There are 8 basic data types in JavaScript.

     Seven primitive data types:
     number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
     bigint for integer numbers of arbitrary length.
     string for strings. A string may have zero or more characters, there’s no separate single-character type.
     boolean for true/false.
     null for unknown values – a standalone type that has a single value null.
     undefined for unassigned values – a standalone type that has a single value undefined.
     symbol for unique identifiers.
      
    And one non-primitive data type:
      object for more complex data structures.

--------------------------------------------------------------------------------------------------------
     
    #Tasks:-

    What is the output of the script?

      let name = "Ilya";

      alert( `hello ${1}` ); // hello 1

     alert( `hello ${"name"}` ); // hello name

    alert( `hello ${name}` ); //  hello Ilya

--------------------------------------------------------------------------------------------------------














************************************************************************************************************************************************************************

*/