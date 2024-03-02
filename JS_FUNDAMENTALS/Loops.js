/* 
  TIP : VS CODE SHORTCUTS:-
  
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
  Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
  Ctrl + l              ==> select whole line.
  shift + TAB           ==> select the multiple line and use this to center your all text.
    

 # DATE: 02/03/2024
 ==================== 

                                   * Loops: while and for  *

       We often need to repeat actions.
       For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

      Loops are a way to repeat the same code multiple times.


    # The “while” loop

    The while loop has the following syntax:

    while (condition) {
      // code
     // so-called "loop body"
   }

    While the condition is truthy, the code from the loop body is executed.
    For instance, the loop below outputs i while i < 3:

    let i = 0;
    while (i < 3) { // shows 0, then 1, then 2
     alert( i );
    i++;
    }

    1. A single execution of the loop body is called an iteration.Each repetition of this block of code is called an iteration.
      For instance, a shorter way to write while (i != 0) is while (i):
        let i = 3;
        while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
        alert( i );
        i--;
      }

    Curly braces are not required for a single-line body
    If the loop body has a single statement, we can omit the curly braces {…}:

    let i = 3;
    while (i) alert(i--);
--------------------------------------------------------------------------------------------------------------------------------------------------------

        
    # The “do…while” loop

    The condition check can be moved below the loop body using the do..while syntax:

      do {

      // loop body
      } while (condition);

    The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

      let i = 0;
      do {
      console.log( i );
      i++;
      } while (i < 3);   // OUTPUT IS  0 , 1 , 2.
  
    This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy.
    Usually, the other form is preferred: while(…) {…}.

--------------------------------------------------------------------------------------------------------------------------------------------------------

    # The “for” loop:

    The for loop is more complex, but it’s also the most commonly used loop.
        
    for (begin; condition; step) {
        // ... loop body ...
      }


    Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:

  
      for (let i = 0; i < 3; i++) { 
        console.log(i);     //  0, 1, 2;
      }

    $Let’s examine the for statement part-by-part:

      
    begin         	let i = 0	        Executes once upon entering the loop.
    condition   	i < 3	            Checked before every loop iteration. If false, the loop stops.
    body	        alert(i)	        Runs again and again while the condition is truthy.
    step	        i++	                Executes after the body on each iteration.



      // for (let i = 0; i < 3; i++) alert(i)
     // run begin
      let i = 0
    // if condition → run body and run step
        if (i < 3) { alert(i); i++ }
    // if condition → run body and run step
        if (i < 3) { alert(i); i++ }
    // if condition → run body and run step
        if (i < 3) { alert(i); i++ }
    // ...finish, because now i == 3



    # Inline variable declaration

    Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.

      for (let i = 0; i < 3; i++) {
      alert(i); // 0, 1, 2
       }
       alert(i); // error, no such variable.


    # Skipping parts
       Any part of for can be skipped.

       For example, we can omit begin if we don’t need to do anything at the loop start.
       Like here:

        let i = 0; // we have i already declared and assigned
        for (; i < 3; i++) { // no need for "begin"
          alert( i ); // 0, 1, 2
        }


  #We can also remove the step part:

      let i = 0;

      for (; i < 3;) {
        alert( i++ );
      }

  # We can actually remove everything, creating an infinite loop:

      for (;;) {
        // repeats without limits
      }
      Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    # Breaking the loop
    
    1. Normally, a loop exits when its condition becomes falsy.
    2. But we can force the exit at any time using the special break directive.
    
    For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

      let sum = 0;

      while (true) {

        let value = +prompt("Enter a number", '');

        if (!value) break; // (*)

        sum += value;

      }
      alert( 'Sum: ' + sum );

------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    # Continue to the next iteration

    IMP: 
        1. The continue directive is a “lighter version” of break.
        2. t doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

        We can use it if we’re done with the current iteration and would like to move on to the next one.

        for (let i = 0; i < 10; i++) {

        // if true, skip the remaining part of the body
        if (i % 2 == 0) continue;

        alert(i); // 1, then 3, 5, 7, 9
        }

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    # Labels for break/continue

    Sometimes we need to break out from multiple nested loops at once.

    The break <labelName> statement in the loop below breaks out to the label:
      
    outer: for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {

          let input = prompt(`Value at coords (${i},${j})`, '');

          // if an empty string or canceled, then break out of both loops
          if (!input) break outer; // (*)

          // do something with the value...
        }
      }

        alert('Done!');

     In the code above, break outer looks upwards for the label named outer and breaks out of that loop.

      So the control goes straight from (*) to alert('Done!').
      We can also move the label onto a separate line:


    $ Labels do not allow to “jump” anywhere
      Labels do not allow us to jump into an arbitrary place in the code.

      For example, it is impossible to do this:

      break label; // jump to the label below (doesn't work)

      label: for (...)
      A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:

      label: {
        // ...
        break label; // works
        // ...
      }

-----------------------------------------------------------------------------------------------------------------------------------------------------------------
      # Summary
        We covered 3 types of loops:

        while – The condition is checked before each iteration.
        do..while – The condition is checked after each iteration.
        for (;;) – The condition is checked before each iteration, additional settings available.
        To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

        If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

        break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------

      # TASK 1:

      Last loop value
    What is the last value alerted by this code? Why?

    let i = 3;

    while (i) {
      alert( i-- );
      }           
      
      // OUTPUT :- 1;




      # TASK 2:


      Which values does the while loop show?

    For every loop iteration, write down which value it outputs and then compare it with the solution.

    Both loops alert the same values, or not?

    The prefix form ++i:

    let i = 0;
    while (++i < 5) alert( i );
    The postfix form i++         OUTPUT : 4

    let i = 0;
    while (i++ < 5) alert( i );  //OUTPUT : 5



    # TASK 3

     Which values get shown by the "for" loop?
    importance: 4
    For each loop write down which values it is going to show. Then compare with the answer.

    Both loops alert same values or not?

    The postfix form:

    for (let i = 0; i < 5; i++) alert( i );   //OUTPUT : 4
    The prefix form:

    for (let i = 0; i < 5; ++i) alert( i );   //OUTPUT:  4


  # task 4 : 

  Output even numbers in the loop
   Use the for loop to output even numbers from 2 to 10.

  SOLUTION:

    let i = 0
 
    for(i=2;i<=10;i=i+2){
        alert(i);
    }


    #TASK 5:
    Replace "for" with "while"
    Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

      for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
      }

      SOLUTION :

      i=0;
      while(i<3){
   
    alert( `number ${i}!` );
     i++;
    }


    TASK 6:

    Repeat until the input is correct
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.


SOLUTION:-

   let number =1 ;

    for(number;;){
   number=prompt(`number greater than 100: `,``);
       if(number > 100){
           alert(`welcome..`);
           break;
       }
       else{
           alert(`Input Again..`);
           continue;
       }
   }

   
   SOLUTION 2:
    let num;

      do {
        num = prompt("Enter a number greater than 100?", 0);
      } while (num <= 100 && num);



      # TASK 7:

      Output prime numbers

        An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

        In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

        For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

        Write the code which outputs prime numbers in the interval from 2 to n.

        For n = 10 the result will be 2,3,5,7.

        P.S. The code should work for any n, not be hard-tuned for any fixed value.


        SOLUTION :

        let i=1;
        n = prompt(`Enter the number: `,``);
     
         for(;i<n;i++){
        
          if(i%2==0){
           continue;
          }
           else{
            
            alert(i);
          }
        }




================================================================================================================================================================================
 */ 



