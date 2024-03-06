/*

  TIP 

  :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
  Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
  Ctrl + l              ==> select whole line.


  # DATE: 3/03/2024
  ==================== 

                      * SWITCH *

    # The "switch" statement
      A switch statement can replace multiple if checks.
      It gives a more descriptive way to compare a value with multiple variants.

      The syntax:
      The switch has one or more case blocks and an optional default.
      It looks like this:
      switch(x) {
      case 'value1':  // if (x === 'value1')
        ...
        [break]

      case 'value2':  // if (x === 'value2')
        ...
        [break]

      default:
        ...
        [break]
    }
                                                
      The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
      If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
      If no case is matched then the default code is executed (if it exists).


       An example:

          let a = 2 + 2;

        switch (a) {
          case 3:
            alert( 'Too small' );
            break;
          case 4:
            alert( 'Exactly!' );
            break;
          case 5:
            alert( 'Too big' );
            break;
          default:
            alert( "I don't know such values" );
        }


      # Any expression can be a switch/case argument
        Both switch and case allow arbitrary expressions.

        let a = "1";
        let b = 0;

        switch (+a) {
          case b + 1:
            alert("this runs, because +a is 1, exactly equals b+1");
            break;

          default:
            alert("this doesn't run");
        }

      Here +a gives 1, that’s compared with b + 1 in case, and the corresponding code is executed.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    # Grouping of “case”

    Several variants of case which share the same code can be grouped.
    For example, if we want the same code to run for case 3 and case 5:

    let a = 3;

    switch (a) {
      case 4:
        alert('Right!');
        break;

      case 3: // (*) grouped two cases
      case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

      default:
        alert('The result is strange. Really.');
    }

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    # Type matters

    Let’s emphasize that the equality check is always strict. The values must be of the same type to match.
    For example, let’s consider the code:

    let arg = prompt("Enter a value?");
    switch (arg) {
      case '0':
      case '1':
        alert( 'One or zero' );
        break;

      case '2':
        alert( 'Two' );
        break;

      case 3:
        alert( 'Never executes!' );
        break;
      default:
        alert( 'An unknown value' );
    }


    For 0, 1, the first alert runs.
    For 2 the second alert runs.
    But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    # TASKS: 


     TASK 1:
     Rewrite the "switch" into an "if"
    Write the code using if..else which would correspond to the following switch:

    switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;

    default:
      alert( 'We hope that this page looks ok!' );
  }


  SOLUTION: 

  let Browser; 

    if (Browser=='Edge'){
        alert( "You've got the Edge!");
    }
    else if(Browser == 'Chrome'
    || Browser=='Firefox' 
    ||Browser=='Safari' 
    ||Browser== 'Opera')
    {
        alert("Okay we support these browsers too");
    }
    else
    {
        alert("We hope that this page looks ok!");
    }

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

       # TASK 2:

       Rewrite the code below using a single switch statement:
       let a = +prompt('a?', '');

        if (a == 0) {
          alert( 0 );
        }
        if (a == 1) {
          alert( 1 );
        }

        if (a == 2 || a == 3) {
          alert( '2,3' );
        }


      SOLUTION: 
      let a = prompt('a:','');

      switch(a){
          
          case '0':alert('0');
          break;
          
          case '1': alert('1');
          break;
          
          case '2':
          case '3': alert('2,3');
          
      }

========================================================================================================================================================================================================

                      * JAVASCRIPT SPECTIALS *


      # Code structure:

      Statements are delimited with a semicolon:

        alert('Hello'); alert('World');
        Usually, a line-break is also treated as a delimiter, so that would also work:

        alert('Hello')
        alert('World')


    Strict mode
    To fully enable all features of modern JavaScript, we should start scripts with "use strict".
      'use strict';

       ...

    The directive must be at the top of a script or at the beginning of a function body.

      Without "use strict", everything still works, but some features behave in the old-fashioned, “compatible” way. We’d generally prefer the modern behavior.

      Some modern features of the language (like classes that we’ll study in the future) enable strict mode implicitly.

    
     #  Variables
    Can be declared using:

        let
        const (constant, can’t be changed)
        var (old-style, will see later)
        A variable name can include:

        Letters and digits, but the first character may not be a digit.
        Characters $ and _ are normal, on par with letters.
        Non-Latin alphabets and hieroglyphs are also allowed, but commonly not used.

        Variables are dynamically typed. They can store any value:
           let x = 5;
           x = "John";

    There are 8 data types:

        number for both floating-point and integer numbers,
        bigint for integer numbers of arbitrary length,
        string for strings,
        boolean for logical values: true/false,
        null – a type with a single value null, meaning “empty” or “does not exist”,
        undefined – a type with a single value undefined, meaning “not assigned”,
        object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.


    The typeof operator returns the type for a value, with two exceptions:
        typeof null == "object" // error in the language
        typeof function(){} == "function" // functions are treated specially



     Interaction
    We’re using a browser as a working environment, so basic UI functions will be:

      prompt(question, [default])
      Ask a question, and return either what the visitor entered or null if they clicked “cancel”.
      confirm(question)
      Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.
      alert(message)
      Output a message.

      All these functions are modal, they pause the code execution and prevent the visitor from interacting with the page until they answer.

        For instance:

        let userName = prompt("Your name?", "Alice");
        let isTeaWanted = confirm("Do you want some tea?");

        alert( "Visitor: " + userName ); // Alice
        alert( "Tea wanted: " + isTeaWanted ); // true


    # Operators
       Arithmetical
      Regular: * + - /, also % for the remainder and ** for power of a number.

        The binary plus + concatenates strings. And if any of the operands is a string, the other one is converted to string too:

        alert( '1' + 2 ); // '12', string
        alert( 1 + '2' ); // '12', string
        Assignments
        There is a simple assignment: a = b and combined ones like a *= 2.

        Bitwise
        Bitwise operators work with 32-bit integers at the lowest, bit-level: see the docs when they are needed.

        Conditional
        The only operator with three parameters: cond ? resultA : resultB. If cond is truthy, returns resultA, otherwise resultB.

        Logical operators
        Logical AND && and OR || perform short-circuit evaluation and then return the value where it stopped (not necessary true/false). Logical NOT ! converts the operand to boolean type and returns the inverse value.

        Nullish coalescing operator
        The ?? operator provides a way to choose a defined value from a list of variables. The result of a ?? b is a unless it’s null/undefined, then b.

        Comparisons
        Equality check == for values of different types converts them to a number (except null and undefined that equal each other and nothing else), so these are equal:

        alert( 0 == false ); // true
        alert( 0 == '' ); // true

      Functions
          We covered three ways to create a function in JavaScript:

          Function Declaration: the function in the main code flow

          function sum(a, b) {
            let result = a + b;

            return result;
          }
          Function Expression: the function in the context of an expression

          let sum = function(a, b) {
            let result = a + b;

            return result;
          };
          Arrow functions:

          // expression on the right side
          let sum = (a, b) => a + b;

          // or multi-line syntax with { ... }, need return here:
          let sum = (a, b) => {
            // ...
            return a + b;
          }

          // without arguments
          let sayHi = () => alert("Hello");

          // with a single argument
          let double = n => n * 2;
          Functions may have local variables: those declared inside its body or its parameter list. Such variables are only visible inside the function.
          Parameters can have default values: function sum(a = 1, b = 2) {...}.
          Functions always return something. If there’s no return statement, then the result is undefined.


 =====================================================================================================================================================================================
 */
