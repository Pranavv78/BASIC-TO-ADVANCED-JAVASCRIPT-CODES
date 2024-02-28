/* 
TIP:-

 CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
 Shift + Alt + A       ==> Toggle block comment   ---> IMP FOR MULTIPLE LINE COMMENT.
 Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
 Ctrl + l              ==> select whole line.

  # DATE: 28/02/2024 
====================== 
                       
                                        * TYPE CONVERSION *

    # String Conversion

       string conversion heppens when we needthe string form of a value.
          For example, alert(value) does it to show the value.

             let value = true;
             alert(typeof value); // boolean

             value = String(value); // now value is a string "true"
             alert(typeof value); // string

-------------------------------------------------------------------------------------------------------
    # Numeric Conversion 

       Numeric conversion in mathematical functions and expressions happens automatically.
          ex:
             alert( "6" / "2" ); // 3, strings are converted to numbers.

         We can use the Number(value) function to explicitly convert a value to a number:
             let str = "123";
             alert(typeof str); // string

             let num = Number(str); // becomes a number 123.
             alert(typeof num); // number.

        Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

        IMP: If the string is not a valid number, the result of such a conversion is NaN. For instance:

            let age = Number("an arbitrary string instead of a number");
            alert(age); // NaN, conversion failed

        TIP: Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.


---------------------------------------------------------------------------------------------------------------------

    # Boolean Conversion.
        
      The conversion rule:

        1. Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
            Other values become true.

        EX: 
             alert( Boolean(1) ); // true
             alert( Boolean(0) ); // false

             alert( Boolean("hello") ); // true
             alert( Boolean("") ); // false

       NOTE: Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.
                
                 alert( Boolean("0") ); // true
                 alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

-------------------------------------------------------------------------------------------------------------------------
    # Summary:

     The three most widely used type conversions are to string, to number, and to boolean.

     # String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.
     # Numeric Conversion – Occurs in math operations. Can be performed with Number(value).
         
================================================================================================================================================

                                    *  BASIC OPERATORS MATHS *


    # Terms: “unary”, “binary”, “operand”

    An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
      ex:
         let x = 1;
         x = -x;
         alert( x ); // -1, unary negation was applied

    An operator is binary if it has two operands. The same minus exists in binary form as well:
       ex:
         let x = 1, y = 3;
         alert( y - x ); // 2, binary minus subtracts values


------------------------------------------------------------------------------------------------------
   # Remainder %

      The remainder operator %, despite its appearance, is not related to percents.
      The result of a % b is the remainder of the integer division of a by b.

      ex:
         alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
         alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
         alert( 8 % 4 ); // 0, the remainder of 8 divided by 4


------------------------------------------------------------------------------------------------------
   # Exponentiation **

     The exponentiation operator a ** b raises a to the power of b.
       alert( 2 ** 2 ); // 2² = 4
       alert( 2 ** 3 ); // 2³ = 8
       alert( 2 ** 4 ); // 2⁴ = 16

    For example, a square root is an exponentiation by ½:
        alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
        alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

------------------------------------------------------------------------------------------------------
    # String concatenation with binary +


    ex:
       let s = "my" + "string";  // HERE IS DONE CONCATINATION OF TWO STRING.
          alert(s); // mystring


    IMP: Note that if any of the operands is a string, then the other one is converted to a string too.
    EX: 
         alert( '1' + 2 ); // "12"
         alert( 2 + '1' ); // "21"


    MORE COMPLEX EXAMPLE:
          alert(2 + 2 + '1' ); // "41" and not "221"
    
    Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

    EX.2

          alert('1' + 2 + 2); // "122" and not "14"
    Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".


    Here’s the demo for subtraction and division:

         alert( 6 - '2' ); // 4, converts '2' to a number.
         alert( '6' / '2' ); // 3, converts both operands to numbers.

----------------------------------------------------------------------------------------------------------
    # Bitwise operators

     Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

     These operators are not JavaScript-specific. They are supported in most programming languages.

         The list of operators:

             AND ( & )
             OR ( | )
             XOR ( ^ )
             NOT ( ~ )
             LEFT SHIFT ( << )
             RIGHT SHIFT ( >> )
             ZERO-FILL RIGHT SHIFT ( >>> )


          These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. 
          We won’t need these operators any time soon, as web development has little use of them, but in some special areas, 
          such as cryptography, they are useful. You can read the Bitwise Operators

----------------------------------------------------------------------------------------------------------------------

    # TASKS:

    Q1. What are the values of a and x after the code below?
            let a = 2;
            let x = 1 + (a *= 2);

         ANSWER:
              A= 4
              X= 5

    Q2. What are results of these expressions?
         "" + 1 + 0        ==> 10
         "" - 1 + 0        ==> -1
         true + false      ==> 1
          6 / "3"          ==> 2
         "2" * "3"         ==> 6
         4 + 5 + "px"      ==> 9px
         "$" + 4 + 5       ==> $45
         "4" - 2           ==> 2
         "4px" - 2         ==> NaN
         "  -9  " + 5      ==> -9 5
         "  -9  " - 5      ==> -14
         null + 1          ==> 1
         undefined + 1     ==> NaN
         " \t \n" - 2      ==> -2


************************************************************************************************************************************************************************

*/