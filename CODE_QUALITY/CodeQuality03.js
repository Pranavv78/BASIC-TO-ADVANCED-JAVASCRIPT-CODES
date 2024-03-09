/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
 
    

 # DATE: 09/03/2024
 ==================== 

                                       * Coding Style  *


  # Coding Style:
     Our code must be as clean and easy to read as possible.

  $ Syntax
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Curly Braces:
        In most JavaScript projects curly braces are written in “Egyptian” style with the opening brace on the same line as the corresponding keyword – not on a new line. 
        There should also be a space before the opening bracket, like this:
        
    if (condition) {
      // do this
      // ...and that
      // ...and that
    }

    😏 One line without braces – acceptable, if it’s short:
        if (n < 0) alert(`Power ${n} is not supported`);

    😃 The best variant:
        if (n < 0) {
          alert(`Power ${n} is not supported`);
        }
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Line Length:

    No one likes to read a long horizontal line of code. It’s best practice to split them.

    For example:

    // backtick quotes ` allow to split the string into multiple lines

    let str = `
      ECMA International's TC39 is a group of JavaScript developers,
      implementers, academics, and more, collaborating with the community
      to maintain and evolve the definition of JavaScript.
    `;

    
  And, for if statements:

    if (
      id === 123 &&
      moonPhase === 'Waning Gibbous' &&
      zodiacSign === 'Libra'
    ) {
      letTheSorceryBegin();
    }
  The maximum line length should be agreed upon at the team-level. It’s usually 80 or 120 characters.



--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

   Vertical indents: empty lines for splitting code into logical blocks.

   Even a single function can often be divided into logical blocks. In the example below, the initialization of variables, the main loop and returning the result are split vertically:

    function pow(x, n) {
      let result = 1;
      //              <--
      for (let i = 0; i < n; i++) {
        result *= x;
      }
      //              <--
      return result;
    }
    Insert an extra newline where it helps to make the code more readable. There should not be more than nine lines of code without a vertical indentation.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    Semicolons
    A semicolon should be present after each statement, even if it could possibly be skipped.

    There are languages where a semicolon is truly optional and it is rarely used. In JavaScript, though, there are cases where a line break is not interpreted as a semicolon, leaving the code vulnerable to errors. See more about that in the chapter Code structure.

    If you’re an experienced JavaScript programmer, you may choose a no-semicolon code style like StandardJS. Otherwise, it’s best to use semicolons to avoid possible pitfalls. The majority of developers put semicolons.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  Nesting Levels

    Try to avoid nesting code too many levels deep.

    For example, in the loop, it’s sometimes a good idea to use the continue directive to avoid extra nesting.

    For example, instead of adding a nested if conditional like this:

    for (let i = 0; i < 10; i++) {
      if (cond) {
        ... // <- one more nesting level
      }
    }

  We can write:

    for (let i = 0; i < 10; i++) {
      if (!cond) continue;
      ...  // <- no extra nesting level
    }

  A similar thing can be done with if/else and return.

    For example, two constructs below are identical.

    Option 1:

    function pow(x, n) {
      if (n < 0) {
        alert("Negative 'n' not supported");
      } else {
        let result = 1;

        for (let i = 0; i < n; i++) {
          result *= x;
        }

        return result;
      }
    }


    Option 2:

    function pow(x, n) {
      if (n < 0) {
        alert("Negative 'n' not supported");
        return;
      }

      let result = 1;

      for (let i = 0; i < n; i++) {
        result *= x;
      }

      return result;
    }
    The second one is more readable because the “special case” of n < 0 is handled early on. Once the check is done we can move on to the “main” code flow without the need for additional nesting.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Function Placement:
If you are writing several “helper” functions and the code that uses them, there are three ways to organize the functions.

1. Declare the functions above the code that uses them:
   
   // function declarations
    function createElement() {
      ...
    }

    function setHandler(elem) {
      ...
    }

    function walkAround() {
      ...
    }

    // the code which uses them
    let elem = createElement();
    setHandler(elem);
    walkAround();


  2. Code first, then functions

      // the code which uses the functions
      let elem = createElement();
      setHandler(elem);
      walkAround();

      // --- helper functions ---
      function createElement() {
        ...
      }

      function setHandler(elem) {
        ...
      }

      function walkAround() {
        ...
      }

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  Summary
    All syntax rules described in this chapter (and in the style guides referenced) aim to increase the readability of your code. All of them are debatable.

    When we think about writing “better” code, the questions we should ask ourselves are: “What makes the code more readable and easier to understand?” and “What can help us avoid errors?” These are the main things to keep in mind when choosing and debating code styles.

    Reading popular style guides will allow you to keep up to date with the latest ideas about code style trends and best practices.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
               
                        " Learning without thought is labor lost; thought without learning is perilous. "


  # Ninja code:

    Programmer ninjas of the past used these tricks to sharpen the mind of code maintainers.

    Code review gurus look for them in test tasks.

    Novice developers sometimes use them even better than programmer ninjas.

    Read them carefully and find out who you are – a ninja, a novice, or maybe a code reviewer?


  # Brevity is the soul of wit:

    Make the code as short as possible. Show how smart you are.

    Let subtle language features guide you.

    For instance, take a look at this ternary operator '?':
 
      // taken from a well-known javascript library
      i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

  SOLUTION: 

     i = i ? ... : 0;: This is a ternary operator (condition ? expr1 : expr2) which checks if i is truthy. If i is truthy (i.e., not null, undefined, 0, '', false, NaN), then it evaluates the expression after the ?, otherwise, it evaluates the expression after the :.

      i < 0 ? Math.max(0, len + i) : i: If i is less than 0, it evaluates to Math.max(0, len + i). Otherwise, it evaluates to i.

      Let's illustrate with an example value:

      Suppose i = -3 and len = 10.

      Since i is not truthy (-3 is less than 0), the expression evaluates the part after :.

      -3 is less than 0, so the expression evaluates to Math.max(0, 10 + (-3)).

      10 + (-3) results in 7.

      Math.max(0, 7) takes the maximum value between 0 and 7, which is 7.

      So, in this case, i would be assigned the value 7.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  # One-letter variables :
    
      Another way to code shorter is to use single-letter variable names everywhere. Like a, b or c.

      A short variable disappears in the code like a real ninja in the forest. No one will be able to find it using “search” of the editor. And even if someone does, they won’t be able to “decipher” what the name a or b means.

      …But there’s an exception. A real ninja will never use i as the counter in a "for" loop. Anywhere, but not here. Look around, there are many more exotic letters. For instance, x or y.

      An exotic variable as a loop counter is especially cool if the loop body takes 1-2 pages (make it longer if you can). Then if someone looks deep inside the loop, they won’t be able to quickly figure out that the variable named x is the loop counter.


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  # Use abbreviations:

    If the team rules forbid the use of one-letter and vague names – shorten them, make abbreviations.

    Like this:

    list → lst.
    userAgent → ua.
    browser → brsr.
    …etc
    Only the one with truly good intuition will be able to understand such names. Try to shorten everything.
    Only a worthy person should be able to uphold the development of your code.

  Soar high. Be abstract:


    While choosing a name try to use the most abstract word. Like obj, data, value, item, elem and so on.

      The ideal name for a variable is data. Use it everywhere you can. Indeed, every variable holds data, right?

      …But what to do if data is already taken? Try value, it’s also universal. After all, a variable eventually gets a value.

      Name a variable by its type: str, num…

      Give them a try. A young initiate may wonder – are such names really useful for a ninja? Indeed, they are!

      Sure, the variable name still means something. It says what’s inside the variable: a string, a number or something else. But when an outsider tries to understand the code, they’ll be surprised to see that there’s actually no information at all! And will ultimately fail to alter your well-thought code.

      The value type is easy to find out by debugging. But what’s the meaning of the variable? Which string/number does it store?

      There’s just no way to figure out without a good meditation!

      …But what if there are no more such names? Just add a number: data1, item2, elem5…


  Attention test:

      Only a truly attentive programmer should be able to understand your code. But how to check that?

      One of the ways – use similar variable names, like date and data.

      Mix them where you can.

      A quick read of such code becomes impossible. And when there’s a typo… Ummm… We’re stuck for long, time to drink tea.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  # Smart synonyms:

    Using similar names for same things makes life more interesting and shows your creativity to the public.

    For instance, consider function prefixes. If a function shows a message on the screen – start it with display…, like displayMessage. And then if another function shows on the screen something else, like a user name, start it with show… (like showName).

    Insinuate that there’s a subtle difference between such functions, while there is none.

    Make a pact with fellow ninjas of the team: if John starts “showing” functions with display... in his code, then Peter could use render.., and Ann – paint.... Note how much more interesting and diverse the code became.

    …And now the hat trick!

    For two functions with important differences – use the same prefix!

    For instance, the function printPage(page) will use a printer. And the function printText(text) will put the text on-screen. Let an unfamiliar reader think well over similarly named function printMessage: “Where does it put the message? To a printer or on the screen?”. To make it really shine, printMessage(message) should output it in the new window!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  # Reuse names:
    
     Add a new variable only when absolutely necessary.

      Instead, reuse existing names. Just write new values into them.

      In a function try to use only variables passed as parameters.

      That would make it really hard to identify what’s exactly in the variable now. And also where it comes from. The purpose is to develop the intuition and memory of a person reading the code. A person with weak intuition would have to analyze the code line-by-line and track the changes through every code branch.

      An advanced variant of the approach is to covertly (!) replace the value with something alike in the middle of a loop or a function.

    For instance:

      function ninjaFunction(elem) {
        // 20 lines of code working with elem

        elem = clone(elem);

        // 20 more lines, now working with the clone of the elem!
      }

      A fellow programmer who wants to work with elem in the second half of the function will be surprised… Only during the debugging, after examining the code they will find out that they’re working with a clone!

     Seen in code regularly. Deadly effective even against an experienced ninja.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  # Underscores for fun:

        Put underscores _ and __ before variable names. Like _name or __value. It would be great if only you knew their meaning.
        Or, better, add them just for fun, without particular meaning at all. Or different meanings in different places.

        You kill two rabbits with one shot. First, the code becomes longer and less readable, and the second, 
        a fellow developer may spend a long time trying to figure out what the underscores mean.

        A smart ninja puts underscores at one spot of code and evades them at other places. 
        That makes the code even more fragile and increases the probability of future errors.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  # Show your love:

    Let everyone see how magnificent your entities are! Names like superElement, megaFrame and niceItem will definitely enlighten a reader.

    Indeed, from one hand, something is written: super.., mega.., nice.. But from the other hand – that brings no details. 
    A reader may decide to look for a hidden meaning and meditate for an hour or two of their paid working time.


  # Overlap outer variables

    Use same names for variables inside and outside a function. As simple. No efforts to invent new names.

    let user = authenticateUser();

    function render() {
      let user = anotherValue();
      ...
      ...many lines...
      ...
      ... // <-- a programmer wants to work with user here and...
      ...
    }

  
 --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  # Side-effects everywhere!

      There are functions that look like they don’t change anything. Like isReady(), checkPermission(), findTags()… They are assumed to carry out calculations, find and return the data, without changing anything outside of them. In other words, without “side-effects”.

      A really beautiful trick is to add a “useful” action to them, besides the main task.

      An expression of dazed surprise on the face of your colleague when they see a function named is.., check.. or find... changing something – will definitely broaden your boundaries of reason.

      Another way to surprise is to return a non-standard result.

      Show your original thinking! Let the call of checkPermission return not true/false, but a complex object with the results of the check.

      Those developers who try to write if (checkPermission(..)), will wonder why it doesn’t work. Tell them: “Read the docs!”. And give this article.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  # Powerful functions!

    Don’t limit the function by what’s written in its name. Be broader.

    For instance, a function validateEmail(email) could (besides checking the email for correctness) show an error message and ask to re-enter the email.

    Additional actions should not be obvious from the function name. A true ninja coder will make them not obvious from the code as well.

    Joining several actions into one protects your code from reuse.

    Imagine, another developer wants only to check the email, and not output any message. Your function validateEmail(email) that does both will not suit them. So they won’t break your meditation by asking anything about it.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  # Summary
      All “pieces of advice” above are from the real code… Sometimes, written by experienced developers. Maybe even more experienced than you are ;)

      Follow some of them, and your code will become full of surprises.
      Follow many of them, and your code will become truly yours, no one would want to change it.
      Follow all, and your code will become a valuable lesson for young developers looking for enlightenment.

===============================================================================================================================================================================================
 */