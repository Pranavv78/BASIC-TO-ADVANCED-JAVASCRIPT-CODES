/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
  Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
  Ctrl + l              ==> select whole line.
  shift + TAB           ==> select the multiple line and use this to center your all text.
    

 # DATE: 04/02/2024
 ==================== 

                                *  Functions  *

     # FUNCTIONS:
       Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.


     # Function Declaration:

      To create a function we can use a function declaration.

        It looks like this:

                function showMessage() {
                alert( 'Hello everyone!' );

                }


        Our new function can be called by its name: showMessage().

            For instance:

            function showMessage() {
            alert( 'Hello everyone!' );
            }

            showMessage();
            showMessage();

            The call showMessage() executes the code of the function. Here we will see the message two times.
            This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.
            If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.


    # Local variables:
        A variable declared inside a function is only visible inside that function.

        For example:

            function showMessage() {
            let message = "Hello, I'm JavaScript!"; // local variable

            alert( message );
            }

            showMessage(); // Hello, I'm JavaScript!

            alert( message ); // <-- Error! The variable is local to the function.

    
    Outer variables
        A function can access an outer variable as well, for example:

        let userName = 'John';

        function showMessage() {
        let message = 'Hello, ' + userName;
        alert(message);
        }

        showMessage(); // Hello, John


    The function has full access to the outer variable. It can modify it as well.

        For instance:

        let userName = 'John';

        function showMessage() {
        userName = "Bob"; // (1) changed the outer variable

        let message = 'Hello, ' + userName;
        alert(message);
        }

        alert( userName ); // John before the function call

        showMessage();

        alert( userName ); // Bob, the value was modified by the function.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    The outer variable is only used if there’s no local one.

    If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

    let userName = 'John';

    function showMessage() {
    let userName = "Bob"; // declare a local variable

    let message = 'Hello, ' + userName; // Bob
    alert(message);
    }

    // the function will create and use its own userName
    showMessage();

    alert( userName ); // John, unchanged, the function did not access the outer variable

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

      # Parameters
        We can pass arbitrary data to functions using parameters.

        In the example below, the function has two parameters: from and text:

          function showMessage(from, text) { // parameters: from, text
            alert(from + ': ' + text);
            }

            showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
            showMessage('Ann', "What's up?"); // Ann: What's up? (**)

     When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

      function showMessage(from, text) {

     from = '*' + from + '*'; // make "from" look nicer

     alert( from + ': ' + text );
            }

            let from = "Ann";

            showMessage(from, "Hello"); // *Ann*: Hello

            // the value of "from" is the same, the function modified a local copy
            alert( from ); // Ann


    $ When a value is passed as a function parameter, it’s also called an argument.
      In other words, to put these terms straight:
       1. A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
       2.An argument is the value that is passed to the function when it is called (it’s a call time term).


    # Default values
      If a function is called, but an argument is not provided, then the corresponding value becomes undefined.  
      For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

       showMessage("Pranav");


    We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

        function showMessage(from, text = "no text given") {
        alert( from + ": " + text );
        }

        showMessage("Ann"); // Ann: no text given



    $ Now if the text parameter is not passed, it will get the value "no text given".
      The default value also jumps in if the parameter exists, but strictly equals undefined, like this:
         showMessage("Ann", undefined); // Ann: no text given



   $ Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

        function showMessage(from, text = anotherFunction()) {
        // anotherFunction() only executed if no text given
        // its result becomes the value of text
        }


        Alternative default parameters:

        Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.
        We can check if the parameter is passed during the function execution, by comparing it with undefined:

            function showMessage(text) {
            // ...

            if (text === undefined) { // if the parameter is missing
                text = 'empty message';
            }

            alert(text);
            }

            showMessage(); // empty message



          2.
             function showMessage(text) {
                // if text is undefined or otherwise falsy, set it to 'empty'
                text = text || 'empty';
                ...
                }

        
        
        $ Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values, such as 0, should be considered “normal”:

            function showCount(count) {
            // if count is undefined or null, show "unknown"
            alert(count ?? "unknown");
            }

            showCount(0); // 0
            showCount(null); // unknown
            showCount(); // unknown


        Returning a value
            A function can return a value back into the calling code as the result.
            The simplest example would be a function that sums two values:

             function sum(a, b) {
                 return a + b;
                }

                let result = sum(1, 2);
                alert( result ); // 3



        $ There may be many occurrences of return in a single function. For instance:

           function checkAge(age) {
            if (age >= 18) {
                return true;
            } else {
                return confirm('Do you have permission from your parents?');
            }
            }

            let age = prompt('How old are you?', 18);

            if ( checkAge(age) ) {
            alert( 'Access granted' );
            } else {
            alert( 'Access denied' );
            }


        $ It is possible to use return without a value. That causes the function to exit immediately.

            For example:

            function showMovie(age) {
            if ( !checkAge(age) ) {
                return;
            }

            alert( "Showing you the movie" ); // (*)
            // ...
            }


    $ So, it effectively becomes an empty return.

        If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

        return (
        some + long + expression
        + or +
        whatever * f(a) + f(b)
        )


    # Naming a function

    Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
        It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.
        For instance, functions that start with "show" usually show something.
        Function starting with…

        "get…" – return a value,
        "calc…" – calculate something,
        "create…" – create something,
        "check…" – check something and return a boolean, etc.


    showMessage(..)     // shows a message
    getAge(..)          // returns the age (gets it somehow)
    calcSum(..)         // calculates a sum and returns the result
    createForm(..)      // creates a form (and usually returns it)
    checkPermission(..) // checks a permission, returns true/false


     
    # Summary
            A function declaration looks like this:

            function name(parameters, delimited, by, comma) {
                //Code...
            }
            Values passed to a function as parameters are copied to its local variables.
            A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
            A function can return a value. If it doesn’t, then its result is undefined.



     $ To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

            It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

            Function naming:

            A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
            A function is an action, so function names are usually verbal.
            There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.

    
             Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. 
             We are going to return to them many times, going more deeply into their advanced features.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    # TASKS


    TASK1 :

        Rewrite the function using '?' or '||'
        The following function returns true if the parameter age is greater than 18.
        Otherwise it asks for a confirmation and returns its result.

        function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            return confirm('Did parents allow you?');
        }
    }


        SOLUTION: 1

           function checkAge(age) {
           return(age > 18) ? true :confirm('Did parents allow you?');
       }
        let Age =checkAge('20');
        alert(Age)
        

        SOLUTION: 2

        function checkAge(age) {
        return(age > 18) ||confirm('Did parents allow you?');
        }
        let Age =checkAge('20');
        alert(Age)


        Write a function min(a,b) which returns the least of two numbers a and b.

            For instance:

            min(2, 5) == 2
            min(3, -1) == -1
            min(1, 1) == 1


        SOLUTION:
           A solution using if:

                function min(a, b) {
                if (a < b) {
                    return a;
                } else {
                    return b;
                }
                }

        $ A solution with a question mark operator '?':

                    function min(a, b) {
                    return a < b ? a : b;
                    }


        
        #TASK 3
        Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

            pow(3, 2) = 3 * 3 = 9
            pow(3, 3) = 3 * 3 * 3 = 27
            pow(1, 100) = 1 * 1 * ...* 1 = 1

        SOLUTION:
          function pow(x, n) {
            let result = x;

            for (let i = 1; i < n; i++) {
                result *= x;
            }

            return result;
            }

            let x = prompt("x?", '');
            let n = prompt("n?", '');

            if (n < 1) {
            alert(`Power ${n} is not supported, use a positive integer`);
            } else {
            alert( pow(x, n) );
            }


















======================================================================================================================================================================================
*/