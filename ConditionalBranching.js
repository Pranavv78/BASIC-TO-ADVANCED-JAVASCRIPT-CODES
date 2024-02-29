/*

 TIP :-
 CTRL  +  /             ==> FOR SINGLE COMMENTING SHORTCUT.
 Shift + Alt + A        ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
 Shift + Alt + Down     ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
 Ctrl  + l              ==> select whole line.

#DATE: 29/02/2024
===================

                              * Conditional branching: if, '?'   *

         Sometimes, we need to perform different actions based on different conditions.
         To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.


    # The " if " Statement:-
       The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

    EX:-
       let year = prompt('In which year was ECMAScript-2015 specification published?', '');
       if (year == 2015) alert( 'You are right!' );

    EX-2:-
        if (year == 2015) {
          alert( "That's correct!" );
          alert( "You're so smart!" );
        }

    We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute.
     Doing so improves readability.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

    # Boolean conversion

     The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
        Let’s recall the conversion rules from the chapter Type Conversions:
          1. A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
          2. Other values become true, so they are called “truthy”.
    
        So, the code under this condition would never execute:
            if (0) { // 0 is falsy
                 ...
            }

            …and inside this condition – it always will:
            if (1) { // 1 is truthy
                   ...
            }
        
        We can also pass a pre-evaluated boolean value to if, like this:
           let cond = (year == 2015); // equality evaluates to true or false

             if (cond) {
               ...
            }
-----------------------------------------------------------------------------------------------------------------------------------------------------------

        # The " else " cluse

          The if statement may contain an optional else block. It executes when the condition is falsy.

        EX:
             let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

            if (year == 2015)
            {
              alert( 'You guessed it right!' );
            } 
            else
            {
              alert( 'How can you be so wrong?' ); // any value except 2015
            }

 -----------------------------------------------------------------------------------------------------------------------------------------------------------
       
        # Several Conditions of " elasif "
        Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

        ex:-
            let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

            if (year < 2015) {
                alert( 'Too early...' );
            }
             else if (year > 2015) {
             alert( 'Too late' );
            }
             else 
            {
              alert( 'Exactly!' );
            }
-----------------------------------------------------------------------------------------------------------------------------------------------------------


        # Conditional operator ‘?’
           
       Sometimes, we need to assign a variable depending on a condition.
       
       EX:
           let accessAllowed;
           let Age = prompt (`How old are you?`,``) ;

           if (Age > 18){
           accessAllowed = true;
           }else {
           accessAllowed = false;
           }
           alert(accessAllowed);

    The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands.
     It is actually the one and only operator in JavaScript which has that many.

    # SYNTAX: 
             let result = condition ? value1 : value2;

    The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

    ex: 
        let accessAllowed = (age > 18) ? true : false;

-----------------------------------------------------------------------------------------------------------------------------------------------------------

    # Multiple ‘?’

    A sequence of question mark operators ? can return a value that depends on more than one condition.
    ex:-


    let age = prompt(`age?`,``);
    let message = (age < 3) ? `HII..Baby` :
      (age < 18) ? `Greetings!` :
      (age < 100) ? `Hello!` :
      'What an Universal Age';   

         //IMP: In the example one bug occure, if  we not specifing any ag anf refreshing the page the window alert shows Hii..Baby.. To EveryOne..

      alert(message);

-----------------------------------------------------------------------------------------------------------------------------------------------------------

    # Non-traditional use of ‘?’

     ex:
       Sometimes the question mark ? is used as a replacement for if:
          let company = prompt('Which company created JavaScript?', '');

             (company == 'Netscape') ?
             alert('Right!') : alert('Wrong.');

     ex2.
      Here is the same code using if for comparison:

    let company = prompt('Which company created JavaScript?', '');

        if (company == 'Netscape') {
         alert('Right!');
        } else {
          alert('Wrong.');
        }
-----------------------------------------------------------------------------------------------------------------------------------------------------------

    TASKS1:

    Will alert be shown?

      if ("0") {
      alert( 'Hello' );
     }

     SOLUTION : Yes, it will.
               Any string except an empty one (and "0" is not empty) becomes true in the logical context.
    
-----------------------------------------------------------------------------------------------------------------------------------------------------------

    TASK 2:-

    Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
    If the visitor enters “tECMAScrip”, then output , otherwise – output: “You don’t know? ECMAScript!”

    SOLUTION 1: 
    let name = prompt(`What is the “official” name of JavaScript ?`);
    ("ECMAScrip" == name ) ? alert(`“Right!”`) : alert(`“You don’t know? ECMAScript!”`);   // using Ternary Operator

    SOLUTION 2:
       let name = prompt(`What is the “official” name of JavaScript ?`);
        if("ECMAScript" == name ) 
       {
          alert(`“Right!”`) ;

       }else{
          alert(`“You don’t know? ECMAScript!”`);   // USING IF ELSE STATEMENT.
        }
-----------------------------------------------------------------------------------------------------------------------------------------------------------


   TASK 3.
        Show the sign
          Using if..else, write the code which gets a number via prompt and then shows in alert:

          1, if the value is greater than zero,
          -1, if less than zero,
          0, if equals zero.
          In this task we assume that the input is always a number.

         SOLUTION 1: using if else.. 
         let number = prompt(`Send me 1 Number: `,``);

        if(number > 0){
          alert(`1`);
        }else if(number < 0 ){
          alert(`-1`);
        }else{
        alert(`0`);
        }

        SOLUTION 2 :

        let number = prompt(`Send me 1 Number: `,``);
        (number > 0) ? alert(`1`) :(number < 0 )? alert(`-1`) : alert(`0`);   // I am not recomend to use this becuse of less redability..

-----------------------------------------------------------------------------------------------------------------------------------------------------------
    TASK 4: 
        let message;

    if (login == 'Employee') {
     message = 'Hello';
     }  else if (login == 'Director') {
     message = 'Greetings';
    } else if (login == '') {
      message = 'No login';
    } else {
      message = '';
    }

    SOLUTION : 

    let message;
     let login = prompt(`Your Position: `,``);
    {
      (login == 'Employee') ?
      message = 'Hello':
      (login == 'Director') ? 
      message = 'Greetings':
      (login == '') ?
      message = 'No login':
      message = '';
    }
    alert(message);

************************************************************************************************************************************************************************

*/

