/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
  Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
  Ctrl + l              ==> select whole line.
  shift + TAB           ==> select the multiple line and use this to center your all text.
    

 # DATE: 06/02/2024
 ==================== 
                                   
                        *   Arrow functions, the basics  *

    # There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
         
        $ It’s called “arrow functions”, because it looks like this:

         let func = (arg1, arg2, ..., argN) => expression;

    This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

          In other words, it’s the shorter version of:

            let func = function(arg1, arg2, ..., argN) {
            return expression;
            };

    Let’s see a concrete example:

        let sum = (a, b) => a + b;

        // This arrow function is a shorter form of:

        let sum = function(a, b) {
        return a + b;
        };
        
        alert( sum(1, 2) ); // 3

     As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.
        If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.


     If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

        For example:

        let double = n => n * 2;
        // roughly the same as: let double = function(n) { return n * 2 }

        alert( double(3) ); // 6
        If there are no arguments, parentheses are empty, but they must be present:

        let sayHi = () => alert("Hello!");

        sayHi();


     Arrow functions can be used in the same way as Function Expressions.

        For instance, to dynamically create a function:

        let age = prompt("What is your age?", 18);

        let welcome = (age < 18) ?
        () => alert('Hello!') :
        () => alert("Greetings!");

        welcome();

    Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as the eyes get used to the structure.
    They are very convenient for simple one-line actions, when we’re just too lazy to write many words.


    Multiline arrow functions
        The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them.

        Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

        Like this:

        let sum = (a, b) => {  // the curly brace opens a multiline function
        let result = a + b;
        return result; // if we use curly braces, then we need an explicit "return"
        };

        alert( sum(1, 2) ); // 3
                    


    # Summary :-
        Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

        Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. 
        Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
        With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.



    # TASKS:


    TASK 1 : Replace Function Expressions with arrow functions in the code below:

    function ask(question, yes, no) {
     if (confirm(question)) yes();
     else no();
        }

        ask(
        "Do you agree?",
        function() { alert("You agreed."); },
        function() { alert("You canceled the execution."); }
        );

   
        SOLUTION: 
        
        function ask(question, yes, no) {
        (confirm(question)) yes() : no();
        }

        ask (
        "Do you agree?",
        () =>{ alert("You agreed."); },
        () =>{ alert("You canceled the execution."); }
        );








 =====================================================================================================================================================================================
 */
