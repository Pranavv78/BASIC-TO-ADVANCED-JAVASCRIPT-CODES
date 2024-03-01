/* 
  TIP 
  :- 
  CTRL + /       ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
  Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
  Ctrl + l              ==> select whole line.

 # DATE: 01/03/2024
 ==================== 
                       * LOGICAL OPERATOR *


    # There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
   
    # || (OR)

       The “OR” operator is represented with two vertical line symbols:
            The “OR” operator is represented with two vertical line symbols:
            the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
            As we can see, the result is always true except for the case when both operands are false.
            If an operand is not a boolean, it’s converted to a boolean for the evaluation.

        EX: let hour = 9;

             if (hour < 10 || hour > 18) {
              alert( 'The office is closed.' );
            }


        EX 2: 
             let hour = 12;
             let isWeekend = true;

           if (hour < 10 || hour > 18 || isWeekend) {
           alert( 'The office is closed.' ); // it is the weekend
           }

      OR "||" finds the first truthy value.

        $  The OR || operator does the following:
        1. Evaluates operands from left to right.
        2. For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
        3. If all operands have been evaluated (i.e. all were false), returns the last operand.
--------------------------------------------------------------------------------------
        $ In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

        EX:   For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).
              Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):

              let firstName = "";
              let lastName = "";
              let nickName = "SuperCoder";

              alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

              If all variables were falsy, "Anonymous" would show up.
        
----------------------------------------------------------------------------------------
       # Short-circuit evaluation.
       Another feature of OR || operator is the so-called “short-circuit” evaluation.

       1. It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately,
          without even touching the other argument.
      
       2. The importance of this feature becomes obvious if an operand isn’t just a value, 
          but an expression with a side effect, such as a variable assignment or a function call.


----------------------------------------------------------------------------------------

      # && (AND)

      The AND operator is represented with two ampersands &&:
          result = a && b;

      AND returns true if both operands are truthy and false otherwise:

      alert( true && true );   // true
      alert( false && true );  // false
      alert( true && false );  // false
      alert( false && false ); // false

    An example with if:
 
    let hour = 12;
    let minute = 30;

     if (hour == 12 && minute == 30) {
     alert( 'The time is 12:30' );
    }

    $  AND “&&” finds the first falsy value

        result = value1 && value2 && value3;

        $ The AND && operator does the following:
        1. Evaluates operands from left to right.
        2. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
        3. If all operands have been evaluated (i.e. all were truthy), returns the last operand.

        In other words, AND returns the first falsy value or the last value if none were found.
        The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

        Examples:

        // if the first operand is truthy,
        // AND returns the second operand:
             alert( 1 && 0 ); // 0
             alert( 1 && 5 ); // 5

        ex:2
            // if the first operand is falsy,
           // AND returns it. The second operand is ignored
               alert( null && 5 ); // null
               alert( 0 && "no matter what" ); // 0


           We can also pass several values in a row. See how the first falsy one is returned:
                alert( 1 && 2 && null && 3 ); // null

            When all values are truthy, the last value is returned:
                alert( 1 && 2 && 3 ); // 3, the last one

-------------------------------------------------------------------------------------------------------------------------------------------

        # ! (NOT)
        The boolean NOT operator is represented with an exclamation sign !.

        result = !value;

        $ The operator accepts a single argument and does the following:
        1. Converts the operand to boolean type: true/false.
        2. Returns the inverse value.

        For instance:

          alert( !true ); // false
          alert( !0 ); // true

      $ A double NOT !! is sometimes used for converting a value to boolean type:

      alert( !!"non-empty string" ); // true
      alert( !!null ); // false

    Certainly! The double NOT (!!) is a common trick used in JavaScript to explicitly convert a value into a boolean type. Here's how it works:

     First NOT (!): The first NOT operator negates the truthiness of the value. In JavaScript,
     every value has an inherent truthiness - whether it evaluates to true or false in a boolean context. When you apply ! to a value, it converts it into its opposite boolean value. For example:

    !"non-empty string": The string "non-empty string" is truthy, so ! turns it into false.
    !null: null is falsy, so ! turns it into true.
     Second NOT (!): The second NOT operator then negates the boolean value obtained from the first NOT operation, effectively reverting it back to its original boolean representation.

     !false: Negating false gives true.
     !true: Negating true gives false.

--------------------------------------------------------------------------------------------------------------------------------------------------------


    TASKS 1:

      What is the code below going to output?

      alert( null || 2 || undefined );  // true || 2


    TASK 2:

      What's the result of OR'ed alerts?
      What will the code below output?

     alert( alert(1) || 2 || alert(3) ); 
 
    SOLUTION: 
       The call to alert does not return a value. Or, in other words, it returns undefined.

       The first OR || evaluates its left operand alert(1). That shows the first message with 1.
       The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
       The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
       There will be no 3, because the evaluation does not reach alert(3).


    TASK 3:
      What is the result of AND'ed alerts?
      What will this code show?

     alert( alert(1) && alert(2) );

   SOLUTION: The answer: 1, and then undefined.

       alert( alert(1) && alert(2) );
       The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

       Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.
 

    TASK 4:
        The result of OR AND OR
        importance: 5
        What will the result be?

       alert( null || 2 && 3 || 4 );

       SOLUTTION:
       The answer: 3.

        alert( null || 2 && 3 || 4 );
        The precedence of AND && is higher than ||, so it executes first.

        The result of 2 && 3 = 3, so the expression becomes:

          null || 3 || 4
         Now the result is the first truthy value: 3.


      TASK 5:
      Check the range between
     Write an if condition to check that age is between 14 and 90 inclusively.
    “Inclusively” means that age can reach the edges 14 or 90.

    solution: if (age >= 14 && age <= 90);



    TASK 5: 
      
    Check the range outside

      Write an if condition to check that age is NOT between 14 and 90 inclusively.

     Create two variants: the first one using NOT !, the second one – without it.

     solution:
    
       if (!(age >= 14 && age <= 90))

       if (age < 14 || age > 90)



   TASK 6:

   What will the results of the expressions be inside if(...)?

      if (-1 || 0) alert( 'first' );
     if (-1 && 0) alert( 'second' );
     if (null || -1 && 1) alert( 'third' ); 

   // Runs.
      // The result of -1 || 0 = -1, truthy
     if (-1 || 0) alert( 'first' );

     // Doesn't run
     // -1 && 0 = 0, falsy
     if (-1 && 0) alert( 'second' );

     // Executes
     // Operator && has a higher precedence than ||
     // so -1 && 1 executes first, giving us the chain:
     // null || -1 && 1  ->  null || 1  ->  1
     if (null || -1 && 1) alert( 'third' );

    TASK 7:

       Check the login
       Write the code which asks for a login with prompt.

       If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

       The password is checked as follows:

       If it equals “TheMaster”, then show “Welcome!”,
       Another string – show “Wrong password”,
       For an empty string or cancelled input, show “Canceled”


       SOLUTION: 
        let login = prompt(`what is your Position ?: `,``);

       if (login == ""){
           alert(`Cancled`);
          }
         else if(login=="Admin"){
             let password = prompt(`Enter Your Password: `,``);
             if(password == "TheMaster"){
             alert("Welcome");
         }
       else if(password == "")
       {
          alert(`Canceled`);
       }
        else{
           alert(`Wrong password`);
        }
      }
      else{
      alert(`I Dont Know You..`);
      }

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
                          
                                      * Nullish coalescing operator '??' *


      # The nullish coalescing operator is written as two question marks ??.
      As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

      The result of a ?? b is:

       if a is defined, then a,
      if a isn’t defined, then b.

      In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
      The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two.

      We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.

       Let’s say we have a user’s data in variables firstName, lastName or nickName. All of them may be not defined, if the user decided not to fill in the corresponding values.
       We’d like to display the user name using one of these variables, or show “Anonymous” if all of them are null/undefined.
       Let’s use the ?? operator for that:

       let firstName = null;
       let lastName = null;
       let nickName = "Supercoder";

       // shows the first defined value:
       alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


       Comparison with ||

       The OR || operator can be used in the same way as ??, as it was described in the previous chapter.
       For example, in the code above we could replace ?? with || and still get the same result:

       let firstName = null;
       let lastName = null;
       let nickName = "Supercoder";

       // shows the first truthy value:
       alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

       Historically, the OR || operator was there first. It’s been there since the beginning of JavaScript, so developers were using it for such purposes for a long time.
       On the other hand, the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with ||.

      $.The important difference between them is that:

      1. || returns the first truthy value.
      2. ?? returns the first defined value.


    In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/not set.

      For example, consider this:
      let height = 0;
      alert(height || 100); // 100
      alert(height ?? 100); // 0

     IMP:  The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
             so the result of || is the second argument, 100.
          The height ?? 100 checks height for being null/undefined, and it’s not,
             so the result is height “as is”, that is 0.


    # Using ?? with && or ||
     Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
     The code below triggers a syntax error:
     let x = 1 && 2 ?? 3; // Syntax error
     The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from || to ??.

     let x = (1 && 2) ?? 3; // Works
     alert(x); // 2


    #Summary
       The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.
       It’s used to assign default values to variables:
        // set height=100, if height is null or undefined
             height = height ?? 100;

       The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.
       It’s forbidden to use it with || or && without explicit parentheses.








 ************************************************************************************************************************************************************************

 */

 