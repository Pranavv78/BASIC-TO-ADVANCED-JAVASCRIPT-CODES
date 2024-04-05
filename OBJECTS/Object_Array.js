/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
 
    

 # DATE: 24/03/2024
 ==================== 


    # ARRAY: 
      Objects allow you to store keyed collections of values. That’s fine.

      But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

     It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

     There exists a special data structure named Array, to store ordered collections.


    # DECLARATION:
        There are two syntaxes for creating an empty array:
        let arr = new Array();
        let arr = [];

    Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

      let fruits =["apple","Mango","Banana"];


    Array elements are numbered, starting with zero.

     We can get an element by its number in square brackets:

     let fruits=["Mango","Banana","Peru","Apple"];

     alert(fruit[0]);  // Mango
     alert(fruit[1]); // Banana
     alert(fruit[2]);  // Peru
     alert(fruit[3]);   // Apple



     We can replace an element:

     fruit[2] = 'peir';  // now ["Mango","Banana","Peir","Apple"]


     …Or add a new one to the array:

    fruit[4]= 'pineapple';


    The total count of the elements in the array is its length:

    let fruits=["Mango","Banana","Peru","Apple"];

    alert(fruit.length); // 3


    We can also use alert to show the whole array.

    alert(fruit); // Mango ,Banana,Peru Apple


    $ An array can store elements of any type.

    For instance:

    let arr['apple', name:{john},true,function(){alert("Hello")}];

    // get the object at index 1 and then show its name

    alert(arr[1].name)//john

    // get the function at index 3 and run it

    arr[3](); // Hello



   IMP:Get last elements with “at”
         Let’s say we want the last element of the array.
         Some programming languages allow the use of negative indexes for the same purpose, like fruits[-1]
  VIMP:  Although, in JavaScript it won’t work. The result will be undefined, because the index in square brackets is treated literally.


    $  We can explicitly calculate the last element index and then access it: fruits[fruits.length - 1].

       let fruits = ["Apple", "Orange", "Plum"];

       alert([fruit.length-1]);


    A bit cumbersome, isn’t it? We need to write the variable name twice.
    Luckily, there’s a shorter syntax: fruits.at(-1):
        let fruits = ["Apple", "Orange", "Plum"];

         // same as fruits[fruits.length-1]

    alert(fruits.at(-1)) //Plum


    In other words, arr.at(i):

    is exactly the same as arr[i], if i >= 0.
    for negative values of i, it steps back from the end of the array.

    
    # Methods pop/push, shift/unshift:

    A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

     1. push:  appends the element to the end.
     2. shift: get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

    $ Arrays support both operations.

        In practice we need it very often. For example, a queue of messages that need to be shown on-screen.
        There’s another use case for arrays – the data structure named stack.
        It supports two operations: 

        1. push: adds an element to the end
        2. pop : takes an element from end

     So new elements are added or taken always from the “end”.


     For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. For queues, we have FIFO (First-In-First-Out).
     Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end.
     In computer science, the data structure that allows this, is called deque.

    
    $ Methods that work with the end of the array:

    pop
    Extracts the last element of the array and returns it:

        let arr=["apple","mango","banana","peru"];

        console.log(arr);  // apple,mango,banana,peru

        console.log(arr.pop()); // peru

        console.log(arr);  //apple,mango,banana

       Both fruits.pop() and fruits.at(-1) return the last element of the array, but fruits.pop() also modifies the array by removing it.


       $ push:

       Append the element to the end of the array:

       let arr=["Apple","Mango","Banana"];

        arr.push("peru");
        console.log(arr);  


        The call fruits.push(...) is equal to fruits[fruits.length] = ....
        Methods that work with the beginning of the array:


    $ Shift: Extracts the first element of the array and returns it:

      let fruits = ["Apple", "Orange", "Pear"];
      alert( fruits.shift() ); // remove Apple and alert it
      alert( fruits ); // Orange, Pear



    unshift:
        Add the element to the beginning of the array:

        let fruits = ["Orange", "Pear"];
        fruits.unshift('Apple');
        alert( fruits ); // Apple, Orange, Pear

    
    Methods push and unshift can add multiple elements at once:

        let fruits = ["Apple"];

        fruits.push("Orange", "Peach");
        fruits.unshift("Pineapple", "Lemon");

        // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
        alert( fruits );

==============================================================================================================================================================================
 
    # Internals:

     An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.
    They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.
    $ Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). Array is an object and thus behaves like an object.

     For instance, it is copied by reference:

      let fruits = ["Banana"]

        let arr = fruits; // copy by reference (two variables reference the same array)

        alert( arr === fruits ); // true

        arr.push("Pear"); // modify the array by reference

        alert( fruits ); // Banana, Pear - 2 items now


================================================================================================================================================================================

    # loops:

    let arr= ["apple","banana","peru","mango"];

        for (i=0;i< arr.length;i++){
            console.log(arr[i]);
        }



But for arrays there is another form of loop, for..of:

   let arr= ["apple","banana","peru","mango"];
  
        for(pranav of arr){
            console.log(pranav);
        }


   The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.
   Technically, because arrays are objects, it is also possible to use for..in:

     let arr= ["apple","banana","peru","mango"];
  
        for(pranav in arr){
            console.log(arr[pranav]);
        }


   IMP: But that’s actually a bad idea. There are potential problems with it:

        The loop for..in iterates over all properties, not only the numeric ones.

        There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

        The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

    IMP: Generally, we shouldn’t use for..in for arrays.


==========================================================================================================================================================================

   # A word about “length”:

   The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.
   For instance, a single element with a large index gives a big length:

    let fruits = [];
    fruits[123] = "Apple";

    alert( fruits.length ); // 124


   VIMP:  In JavaScript, when you assign a value to an array at an index beyond the current length of the array,
          JavaScript automatically expands the array to accommodate the new   index, and all indices in between will have the value of undefined. 
          Therefore, when you assign a value to fruits[123], JavaScript expands the array fruits to have a length of 124, 
          with 123 elements being undefined and the 124th element being "Apple".


    V VIMP: So, the simplest way to clear the array is: arr.length = 0;.

================================================================================================================================================================================

    # new Array()

    There is one more syntax to create an array:

              let arr = new Array("Apple", "Pear", "etc");
    It’s rarely used, because square brackets [] are shorter. Also, there’s a tricky feature with it.
    If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.
    It’s rarely used, because square brackets [] are shorter. Also, there’s a tricky feature with it.
    If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.

     Let’s see how one can shoot themselves in the foot:
         let arr = new Array(2); // will it create an array of [2] ?
         alert( arr[0] ); // undefined! no elements.
         alert( arr.length ); // length 2

        To avoid such surprises, we usually use square brackets, unless we really know what we’re doing.

=================================================================================================================================================================================

    Multidimensional arrays :
  
    Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:
   

      let arr= [[1,2,3],
                [4,5,6],
                [7,8,9]

    ];

     console.log(arr[0][1]);
=================================================================================================================================================================================

    # toString:
    Arrays have their own implementation of toString method that returns a comma-separated list of elements.

    For instance:

    let arr = [1, 2, 3];

    alert( arr ); // 1,2,3
    alert( String(arr) === '1,2,3' ); // true


    Don’t compare arrays with ==
        Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

        This operator has no special treatment for arrays, it works with them as with any objects.

        Let’s recall the rules:

        Two objects are equal == only if they’re references to the same object.
        If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
        …With an exception of null and undefined that equal == each other and nothing else.
        The strict comparison === is even simpler, as it doesn’t convert types.

        So, if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.

        For example:

        alert( [] == [] ); // false
        alert( [0] == [0] ); // false


    These arrays are technically different objects. So they aren’t equal. The == operator doesn’t do item-by-item comparison.
        Comparison with primitives may give seemingly strange results as well:

        alert( 0 == [] ); // true

        alert('0' == [] ); // false
                
===============================================================================================================================================================================

  Array is a special kind of object, suited to storing and managing ordered data items.

        The declaration:

        // square brackets (usual)
        let arr = [item1, item2...];

        // new Array (exceptionally rare)
        let arr = new Array(item1, item2...);

    
    The call to new Array(number) creates an array with the given length, but without elements.

            The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.
            If we shorten length manually, the array is truncated.
            Getting the elements:

            we can get element by its index, like arr[0]
            also we can use at(i) method that allows negative indexes. For negative values of i, it steps back from the end of the array. If i >= 0, it works same as arr[i].
            We can use an array as a deque with the following operations:

            push(...items) adds items to the end.
            pop() removes the element from the end and returns it.
            shift() removes the element from the beginning and returns it.
            unshift(...items) adds items to the beginning.
            To loop over the elements of the array:

            for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
            for (let item of arr) – the modern syntax for items only,
            for (let i in arr) – never use.
            To compare arrays, don’t use the == operator (as well as >, < and others), as they have no special treatment for arrays. They handle them as any objects, and it’s not what we usually want.

            Instead you can use for..of loop to compare arrays item-by-item.

            We will continue with arrays and study more methods to add, remove, extract elements and sort arrays in the


================================================================================================================================================================================

    # TASKS :


    1.What is this code going to show?
            let fruits = ["Apples", "Pear", "Orange"];

            // push a new value into the "copy"
            let shoppingCart = fruits;
            shoppingCart.push("Banana");

            // what's in fruits?
            alert( fruits.length ); // ?


    SOLUTION : 4


    2. Array operations.
            importance: 5
            Let’s try 5 array operations.

            Create an array styles with items “Jazz” and “Blues”.
            Append “Rock-n-Roll” to the end.
            Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
            Strip off the first value of the array and show it.
            Prepend Rap and Reggae to the array.
            The array in the process:

            Jazz, Blues
            Jazz, Blues, Rock-n-Roll
            Jazz, Classics, Rock-n-Roll
            Classics, Rock-n-Roll
            Rap, Reggae, Classics, Rock-n-Roll


    SOLUTION :

         let styles =["jazz","Blues"];
        console.log(styles);

        styles.push('Rock-n-Roll');
        console.log(styles);

        styles[1]='Classics';
        console.log(styles);

        styles.shift();
        console.log(styles);

        styles.unshift('Rap','Raggae');
        console.log(styles);


    3.Calling in an array context

            importance: 5
            What is the result? Why?

            let arr = ["a", "b"];

            arr.push(function() {
            alert( this );
            });

            arr[2](); // ?


        SOLUTION: THE ANSWER IS " this ".
        Because, we stored the 2nd element as a function and call it using indexing.



    4. Sum input numbers:

            importance: 4

            Write the function sumInput() that:

            Asks the user for values using prompt and stores the values in the array.
            Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
            Calculates and returns the sum of array items.
            P.S. A zero 0 is a valid number, please don’t stop the input on zero. 

  
        SOLUTION: 

        function sumInput() {

        let numbers = [];

        while (true) {

            let value = prompt("A number please?", 0);

            // should we cancel?
            if (value === "" || value === null || !isFinite(value)) break;

            numbers.push(+value);
        }

        let sum = 0;
        for (let number of numbers) {
            sum += number;
        }
        return sum;
        }

        alert( sumInput() );


=====================================================================================================================================================
  */





 




    


 