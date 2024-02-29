/* 
  TIP 
  :- CTRL + /       ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
  Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
  Ctrl + l              ==> select whole line.

 # DATE: 29/02/2024
 ==================== 

                            * COMPARISIONS *

     We know many comparison operators from maths.

        In JavaScript they are written like this:

        Greater/less than: a > b, a < b.
        Greater/less than or equals: a >= b, a <= b.
        Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
        Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.        

    IMP: All comparison operators return a boolean value:

          true – means “yes”, “correct” or “the truth”.
          false – means “no”, “wrong” or “not the truth”.

    EX:-
         alert( 2 > 1 );  // true (correct)
         alert( 2 == 1 ); // false (wrong)
         alert( 2 != 1 ); // true (correct)

---------------------------------------------------------------------------------------------------------------------------------------
    #String comparison

         To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
         In other words, strings are compared letter-by-letter.


        EX:- 
             alert( 'Z' > 'A' ); // true
             alert( 'Glow' > 'Glee' ); // true
             alert( 'Bee' > 'Be' ); // true

  ---------------------------------------------------------------------------------------------------------------------------------------
      
        # Comparison of different types
             When comparing values of different types, JavaScript converts the values to numbers.

        For example:

             alert( '2' > 1 ); // true, string '2' becomes a number 2
             alert( '01' == 1 ); // true, string '01' becomes a number 1


        For example:

             let a = 0;
             alert( Boolean(a) ); // false

             let b = "0";
             alert( Boolean(b) ); // true

            alert(a == b); // true!

---------------------------------------------------------------------------------------------------------------------------------------

        # Strict equality

        A regular equality check == has a problem. It cannot differentiate 0 from false:
             alert( 0 == false ); // true

        The same thing happens with an empty string:
             alert( '' == false ); // true

        EX: alert( 0 === false ); // false, because the types are different.

        # Comparison with null and undefined
           
             There’s a non-intuitive behavior when null or undefined are compared to other values.
             For a strict equality check ===

        alert( null === undefined ); // false

        * For a non-strict check ==

         alert( null == undefined ); // true

---------------------------------------------------------------------------------------------------------------------------------------
           
        # Strange result: null vs 0

         alert( null > 0 );  // (1) false
         alert( null == 0 ); // (2) false
         alert( null >= 0 ); // (3) true

    Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.
        The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0.
        That’s why (3) null >= 0 is true and (1) null > 0 is false.
        On the other hand, the equality check == for undefined and null is defined such that, without any conversions,
        they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.



        # An incomparable undefined
           The value undefined shouldn’t be compared to other values:

             alert( undefined > 0 ); // false (1)
             alert( undefined < 0 ); // false (2)
             alert( undefined == 0 ); // false (3)



           IMP: Avoid problems:-

              Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really.
              Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:

              Treat any comparison with undefined/null except the strict equality === with exceptional care.
              Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing.
              If a variable can have these values, check for them separately.


        # Summary
           Comparison operators return a boolean value.
           Strings are compared letter-by-letter in the “dictionary” order.
           When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
           The values null and undefined equal == each other and do not equal any other value.
           Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.


        #TASKS: What will be the result for these expressions?

       1. 5 > 4 → true
       2. "apple" > "pineapple" → false
       3. "2" > "12" → true
       4. undefined == null → true
       5. undefined === null → false
       6. null == "\n0\n" → false
       7. null === +"\n0\n" → false

       Some of the reasons:

        1. Obviously, true.
        2. Dictionary comparison, hence false. "a" is smaller than "p".
        3. Again, dictionary comparison, first char "2" is greater than the first char "1".
        4. Values null and undefined equal each other only.
        5. Strict equality is strict. Different types from both sides lead to false.
        6. Similar to (4), null only equals undefined.
        7. Strict equality of different types.





 ************************************************************************************************************************************************************************

 */