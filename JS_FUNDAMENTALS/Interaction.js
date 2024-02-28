/* 
TIP:-

 CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
 Shift + Alt + A       ==> Toggle block comment   ---> IMP FOR MULTIPLE LINE COMMENT.
 Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
 Ctrl + l              ==> select whole line.

  # DATE: 28/02/2024 
====================== 
                                     
                                   * TNTERACTION *

  # alert
    It shows a message and waits for the user to press “OK”.
    alert("Hello World");

     The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page Or press other buttons, etc,
      until they have dealt with the window. In this case – until they press “OK”.

-----------------------------------------------------------------------------------------------
   # prompt
      The function prompt accepts two arguments:

        # result = prompt(title, 'Default');
      1. It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
      2. Title is use to text show the visitor.
      3. Default is Second parameter,it is the initial value of input field. 

    $ The visitor can type something in the prompt input field and press OK. Then we get that text in the result. 
        Or they can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.

  EX:
    <script>   // RUN THIS ON HTML FILE USING SCRIPT TAG.

      let age = prompt('How old are you?', 100);
      alert(`You are ${age} years old!`); // You are 100 years old!

    </script>

    # The second parameter is optional, but if we don’t supply it, Internet Explorer will insert the text "undefined" into the prompt.

-----------------------------------------------------------------------------------------------------

   # confirm

    $syntax :- result = confirm(question);

  EX:
    <script>
    
      let isBoss = confirm("Youe Name is Pranav?");
      alert( isBoss ); // true if OK is pressed

    </script>
  
Summery-

We covered 3 browser-specific functions to interact with visitors:

 1. alert
     shows a message.
    
 2. prompt
    shows the message and asking the user input text. it Return the text. if we cancel or Click the ESC BUTTON, NULL.

  3. confirm
      shows a messageand waits the user to press "OK" or "Cancel". It returns "TRUE" for OK and "FALSE" for CANCEL/ESC.

    All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.
------------------------------------------------------------------------------------------------------------

  # TASK:

  Create a web-page that asks for a name and outputs it.

<script>   //TIP:- Run it on html file.
    
let name = prompt("WHAT IS YOUR NAMR?",'VINAY');  // It shows the message and default value to user.
alert(`Your name is ${name}`);                    // It shows the output.

</script>





************************************************************************************************************************************************************************

*/