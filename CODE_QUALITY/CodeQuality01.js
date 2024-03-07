/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
  Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
  Ctrl + l              ==> select whole line.
  shift + TAB           ==> select the multiple line and use this to center your all text.
    

 # DATE: 07/03/2024
 ==================== 

                                                * CODE QUALITY *



    # Debugging in the browser
    IMP:-
      1. Debugging is the process of finding and fixing errors within a script. 
      2. All modern browsers and most other environments support debugging tools – a special UI in developer tools that makes debugging much easier. 
      3. It also allows to trace the code step by step to see what exactly is going on.


    # Breakpoints:
      A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution.

    While the code is paused, we can examine current variables, execute commands in the console etc. In other words, we can debug it.
    We can always find a list of breakpoints in the right panel. That’s useful when we have many breakpoints in various files. It allows us to:

        Quickly jump to the breakpoint in the code (by clicking on it in the right panel).
        Temporarily disable the breakpoint by unchecking it.
        Remove the breakpoint by right-clicking and selecting Remove.
        …And so on.
      

    # The command “debugger”
      
    We can also pause the code by using the debugger command in it, like this:

        function hello(name) {
          let phrase = `Hello, ${name}!`;

          debugger;  // <-- the debugger stops here

          say(phrase);
        }


  # Pause and look around :
   
   Watch – shows current values for any expressions.
   You can click the plus + and input an expression. The debugger will show its value, automatically recalculating it in the process of execution.

Call Stack – shows the nested calls chain.
   At the current moment the debugger is inside hello() call, called by a script in index.html (no function there, so it’s called “anonymous”).
   If you click on a stack item (e.g. “anonymous”), the debugger jumps to the corresponding code, and all its variables can be examined as well.

Scope – current variables.
   Local shows local function variables. You can also see their values highlighted right over the source.
   Global has global variables (out of any functions).
   There’s also this keyword there that we didn’t study yet, but we’ll do that soon.


      – “Step”: run the next command, hotkey F9.
      Run the next statement. If we click it now, alert will be shown.

      Clicking this again and again will step through all script statements one by one.

      – “Step over”: run the next command, but don’t go into a function, hotkey F10.
      Similar to the previous “Step” command, but behaves differently if the next statement is a function call (not a built-in, like alert, but a function of our own).

      If we compare them, the “Step” command goes into a nested function call and pauses the execution at its first line, while “Step over” executes the nested function call invisibly to us, skipping the function internals.

      The execution is then paused immediately after that function call.

      That’s good if we’re not interested to see what happens inside the function call.

      – “Step into”, hotkey F11.
      That’s similar to “Step”, but behaves differently in case of asynchronous function calls. If you’re only starting to learn JavaScript, then you can ignore the difference, as we don’t have asynchronous calls yet.

      For the future, just note that “Step” command ignores async actions, such as setTimeout (scheduled function call), that execute later. The “Step into” goes into their code, waiting for them if necessary. See DevTools manual for more details.

      – “Step out”: continue the execution till the end of the current function, hotkey Shift+F11.
      Continue the execution and stop it at the very last line of the current function. That’s handy when we accidentally entered a nested call using , but it does not interest us, and we want to continue to its end as soon as possible.

      – enable/disable all breakpoints.
      That button does not move the execution. Just a mass on/off for breakpoints.

      – enable/disable automatic pause in case of an error.
      When enabled, if the developer tools is open, an error during the script execution automatically pauses it. Then we can analyze variables in the debugger to see what went wrong. So if our script dies with an error, we can open debugger, enable this option and reload the page to see where it dies and what’s the context at that moment.

    
      # Logging
        
      To output something to console from our code, there’s console.log function.

        For instance, this outputs values from 0 to 4 to console:

        // open console to see
        for (let i = 0; i < 5; i++) {
          console.log("value,", i);


    Regular users don’t see that output, it is in the console. To see it, either open the Console panel of developer tools or press Esc while in another panel: that opens the console at the bottom.

    If we have enough logging in our code, then we can see what’s going on from the records, without the debugger.


  # Summary
      As we can see, there are three main ways to pause a script:

      A breakpoint.
      The debugger statements.
      An error (if dev tools are open and the button  is “on”).


    # Comments:
    As we know from the chapter Code structure, comments can be single-line: starting with // and multiline: 
    We normally use them to describe how and why the code works.


   Bad comments
    Novices tend to use comments to explain “what is going on in the code”. Like this:

    // This code will do this thing (...) and that thing (...)
    // ...and who knows what else...
    very;
    complex;
    code;


    There’s a great rule about that: “if the code is so unclear that it requires a comment, then maybe it should be rewritten instead”.


     Recipe: factor out functions
        Sometimes it’s beneficial to replace a code piece with a function, like here:

        function showPrimes(n) {
          nextPrime:
          for (let i = 2; i < n; i++) {

            // check if i is a prime number
            for (let j = 2; j < i; j++) {
              if (i % j == 0) continue nextPrime;
            }

            alert(i);
          }
        }


      The better variant, with a factored out function isPrime:

        function showPrimes(n) {

          for (let i = 2; i < n; i++) {
            if (!isPrime(i)) continue;

            alert(i);
          }
        }

        function isPrime(n) {
          for (let i = 2; i < n; i++) {
            if (n % i == 0) return false;
          }

          return true;
        }
        Now we can understand the code easily. The function itself becomes the comment. Such code is called self-descriptive.



    IMP: 
        Good comments
            So, explanatory comments are usually bad. Which comments are good?

            Describe the architecture
            Provide a high-level overview of components, how they interact, what’s the control flow in various situations… In short – the bird’s eye view of the code. There’s a special language UML to build high-level architecture diagrams explaining the code. Definitely worth studying.
            
            Good comments allow us to maintain the code well, come back to it after a delay and use it more effectively.



          Comment this:

              Overall architecture, high-level view.
              Function usage.
              Important solutions, especially when not immediately obvious.
              Avoid comments:

              That tell “how code works” and “what it does”.
              Put them in only if it’s impossible to make the code so simple and self-descriptive that it doesn’t require them.


      $ Comments are also used for auto-documenting tools like JSDoc3: they read them and generate HTML-docs (or docs in another format).


















=======================================================================================================================================================================================
 */

                                   






