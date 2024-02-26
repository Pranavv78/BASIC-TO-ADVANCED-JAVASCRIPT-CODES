
 TIP :- CTRL + /       ==> FOR COMMENTING SHORTCUT.
 Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
 Shift + Alt + Down    ==> TO REPEATING THE SAME LINE TO MULTIPLE TIMES.
 Ctrl + l              ==> select whole line.
  
#DATE: 26/02/2024
==================

# VARIABLES :- A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.
               To create a variable in JavaScript, use the let keyword.

----------------------------------------------------------     
$ SOME GOOD-TO-FOLLOW RULES ARE:

 1. Use human-readable names like userName or shoppingCart.

 2. Stay away from abbreviations or short names like a, b, and c, unless you know what you’re doing.

 3.  Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing.
     It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
     Agree on terms within your team and in your mind. 
     If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown

------------------------------------------------------------

# let message ='Hello'; // store the string 'Hello' in the variable named message.

# alert(message)  ===> IMP :-The "ReferenceError: alert is not defined" occurs when the alert() method is used outside of the browser environment, most commonly in Node.js.
                     The alert() method is a method on the window object, which is only available in the browser.


-------------------------------------------------------------------------------------------------
                          * WE CAN ALSO DECLARE MULTIPLE VARIABLES IN ONE LINE : *

let user = 'pranav', age = 21, message = "Hello Pranav"; 

 console.log(user,age,message); # IT SHOWS THE OUTPUT : PRANAV 21 HELLO WORLD.
 console.log(typeof(user));     # STRING
 console.log(typeof(age));      # NUMBER 
 console.log(typeof(message));  # STRING

$ For the sake of better readability, please use a single line per variable.The multiline variant is a bit longer, but easier to read.

                           *  MULTIPLE TYPES OF DEFINE VARIABLES *

#EX-1

let user = 'pranav';
let age = 21;
let message = "Hello Pranav";


#EX-2

let user = 'pranav',
age = 21 ,
message = "Hello Pranav";


#EX-3  …Or even in the “comma-first” style:

let user = pranav
, age = 21
, message = "Hello Pranav";

$ Technically, all these variants do the same thing. So, it’s a matter of personal taste and aesthetics.



-------------------------------------------------------------------------------------------------

# REMEMBER
  // WE CAN CHANGED THE VALUE OF VARIABLE MANEY TIMES.BUT REMEMBER OLD VALUE REPLACED BY NEW  VALUE.
  // When the value is changed, the old data is removed from the variable
  
EX:

 let message;

 message = 'Hello!';  // THIS VALUE IS DELETED IF WE CREATED THE NEW VARIABLE OF THE SAME NAME.

 message = 'World!'; // value changed ==> 

 alert(message);      // HERE THE OUTPUT IS THIS IN BROWSER(CHROME):  World.
 console.log(message) // HERE THE OUTPUT IS THIS IN OUTSIDE OF BROWSER( VS Code):  World.

 ----------------------------------------------------------------------------------------------------

# We can also declare two variables and copy data from one into the other.

let first = "Pranav Chavan";

let full;  // EMPTY VARIABLE.

// copy 'Hello world' from hello into message

full = first;

// now two variables hold the same data.

console.log(first); //Pranav Chavan.
console.log(full); // Pranav Chavan.

---------------------------------------------------------------------------------------------------------

$ IMPORTANT NOTE: Declaring twice triggers an error.

# A variable should be declared only once.
# A repeated declaration of the same variable is an error:

EX: 

let message = "This" ;
let message = "That" ; // SyntaxError: 'message' has already been declared.
                      //  repeated 'let' leads to an error.

So, we should declare a variable once and then refer to it without let.

----------------------------------------------------------------------------------------------------------
                           * VARIABLE NAMING *

# THERE ARE TWO LIMITATIONS ON VARIABLE NAMES IN JAVASCRIPT.
  1. THE NEME MUST CONTAIN ONLY LETTERS, DIGITS OR THE SYMBOLS $ AND _ .
  2. THE FIRST CHARACTER MUSTNOT BE A DIGIT.

 EX:  // THIS IS THE VALID NAME EXAMPLE.

    1. let userName;
    2. let test123;

# When the name contains multiple words, camelCase is commonly used. That is: words go one after another,
      each word except first starting with a capital letter :  myVeryLongName.

-----------------------------------------------------------------------------------------------------------

$ What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names.
      They are regular symbols, just like letters, without any special meaning.

EX: 

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3
console.log($ + _); // 3

-------------------------------------------------------------------------------------------------------------
EX : Examples of incorrect variable names:

  1. let 1a; // cannot start with a digit
  2. let my-name; // hyphens '-' aren't allowed in the name
-------------------------------------------------------------------------------------------------------------
 
                         * RESERVED NAMES *

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
For example: let, class, return, and function are reserved.

    The code below gives a syntax error:

 1. let let = 5; // can't name a variable "let", error!.
 2. let return = 5; // also can't name it "return", error!.

--------------------------------------------------------------------------------------------------------------
                           * CONSTANTS *

To declare a constant (unchanging) variable, use const instead of let:

EX: 

const myBirthday = '18.04.1982';

---------------------------------------------------------------------------------------------------------------
                           * Uppercase constants *

 # There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.
 # Such constants are named using capital letters and underscores.
 # For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:

EX: 
const COLOR_RED = "#F00";
const COLOR_GREEN = "0F0";
const COLOR_BLUE ="#00F";
const COLOR_ORANGE = "3FF70F0";

// ...when we need to pick a color.

let color = COLOR_ORANGE;
console.log(color);
------------------------------
Benefits:

1. COLOR_ORANGE is much easier to remember than "#FF7F00".
2. It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
3. When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.

 $ In other words, capital-named constants are only used as aliases for “hard-coded” values.

------------------------------------------------------------------------------------------------------------------
$ SUMMARY :

# We can declare variables to store data by using the var, let, or const keywords.

1. let – is a modern variable declaration.
2. var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
3. const – is like let, but the value of the variable can’t be changed.

# Variables should be named in a way that allows us to easily understand what’s inside them.

=====================================================================================================================================
                                  *  ASSIGNMENT TASKS  *

# TASK 1:-
  WORKING WITH VARIABLES:

  1. Declare two variables: admin and name.
  2. Assign the value "John" to name.
  3. Copy the value from name to admin.
  4. Show the value of admin using alert (must output “John”).

* SOLUTION:-
 --------------

let admin;
let name;

name ="john";

admin = name ;

console.log("I AM IN ADMIN: ",name);

-----------------------------------------------------------------------------------------------------
# TASK 2:- 
  Giving the right name:

1. Create a variable with the name of our planet. How would you name such a variable?
2. Create a variable to store the name of a current visitor to a website. How would you name that variable?

* SOLUTION:-

let Earth;
let currentVisitor = "pranav";

-----------------------------------------------------------------------------------------------------


************************************************************************************************************************************************************************

                            

