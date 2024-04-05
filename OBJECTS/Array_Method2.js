/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
 
    

 # DATE: 27/03/2024
 ==================== 


    # filter:

        The find method looks for a single (first) element that makes the function return true.
        If there may be many, we can use arr.filter(fn).
        The syntax is similar to find, but filter returns an array of all matching elements:
    
    ex:
      
    let result= arr.filter(function(item,index,array));
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
    });
    
    For instance:

  let users = [
    {id:1,name:"pranav"},
    {id:2,name:"pramod"},
    {id:3,name:"chavan"}
];

let someUsers = users.filter(item => item.id<3);

console.log(someUsers.length);

======================================================================================================================================================

    # Transform an array

    Let’s move on to methods that transform and reorder an array.

    $ map:
       The arr.map method is one of the most useful and often used.
    it calls the function for each element of the array and return the array of result
 
    The syntax is:

    let result = arr.map(function(item,index,array) {
        //result the new value insted of item.

    });


    for instance:

    let lengths = ["pranav","vinay","pramod","chavan"].map(items =>items.length);
    console.log(lengths);

=======================================================================================================================================================================
    

    # sort(fn):
    The call to arr.sort() sorts the array in place, changing its element order.
    It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.

    For instance:

    let arr = [ 1, 2, 15 ];

        // the method reorders the content of arr
        arr.sort();

        alert( arr );  // 1, 15, 2

    Did you notice anything strange in the outcome?

    The order became 1, 15, 2. Incorrect. But why?
        The items are sorted as strings by default.
        Literally, all elements are converted to strings for comparisons. For strings, lexicographic ordering is applied and indeed "2" > "15".
    
    The function should compare two arbitrary values and return:

        function compare(a, b) {
        if (a > b) return 1; // if the first value is greater than the second
        if (a == b) return 0; // if values are equal
        if (a < b) return -1; // if the first value is less than the second
        }

    
    For instance, to sort as numbers:

       function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
        }

        let arr = [ 1, 2, 15 ];

        arr.sort(compareNumeric);

        alert(arr);  // 1, 2, 15

    
    Now it works as intended.

        Let’s step aside and think what’s happening. The arr can be array of anything, right? It may contain numbers or strings or objects or whatever. We have a set of some items. To sort it, we need an ordering function that knows how to compare its elements. The default is a string order.

        The arr.sort(fn) method implements a generic sorting algorithm. We don’t need to care how it internally works (an optimized quicksort or Timsort most of the time). It will walk the array, compare its elements using the provided function and reorder them, all we need is to provide the fn which does the comparison.

     By the way, if we ever want to know which elements are compared – nothing prevents from alerting them:

     
        [1, -2, 15, 2, 0, 8].sort(function(a, b) {
        alert( a + " <> " + b );
        return a - b;
        });

    The algorithm may compare an element with multiple others in the process, but it tries to make as few comparisons as possible.


    $ Arrow functions for the best
       Remember arrow functions? We can use them here for neater sorting:

        arr.sort( (a, b) => a - b );
        This works exactly the same as the longer version above.




    $ Use localeCompare for strings
        Remember strings comparison algorithm? It compares letters by their codes by default.

        For many alphabets, it’s better to use str.localeCompare method to correctly sort letters, such as Ö.

        For example, let’s sort a few countries in German:

        let countries = ['Österreich', 'Andorra', 'Vietnam'];

        alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

        alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

=================================================================================================================================================================================

    # reverse:

    reverse
        The method arr.reverse reverses the order of elements in arr.

        For instance:

        let arr = [1, 2, 3, 4, 5];
        arr.reverse();

        alert( arr ); // 5,4,3,2,1
        It also returns the array arr after the reversal.
=================================================================================================================================================================================
   
# split and join :
   Here’s the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: John, Pete, Mary. But for us an array of names would be much more comfortable than a single string. How to get it?

        The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

        In the example below, we split by a comma followed by space:
   

    $ let names = 'Bilbo, Gandalf, Nazgul';

        let arr = names.split(', ');

        for (let name of arr) {
        alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
        }


    The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

    let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

    alert(arr); // Bilbo, Gandalf



    $ Split into letters
        The call to split(s) with an empty s would split the string into an array of letters:

        let str = "test";

        alert( str.split('') ); // t,e,s,t


    The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

        For instance:

        let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

        let str = arr.join(';'); // glue the array into a string using ;

        alert( str ); // Bilbo;Gandalf;Nazgul


==================================================================================================================================================================================================

     # reduce/reduceRight
            When we need to iterate over an array – we can use forEach, for or for..of.

            When we need to iterate and return the data for each element – we can use map.

            The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

            The syntax is:

           let value = arr.reduce(function(accumulator,items,index,array){
            //..

           }),[initial];

           The function is applied to all array elements one after another and “carries on” its result to the next call.

            Arguments:

            accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
            item – is the current array item.
            index – is its position.
            array – is the array.

 
    As function is applied, the result of the previous function call is passed to the next one as the first argument.

        So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.

        Sounds complicated?

        The easiest way to grasp that is by example.

        Here we get a sum of an array in one line:

        let arr = [1, 2, 3, 4, 5];

        let result = arr.reduce((sum, current) => sum + current, 0);

        alert(result); // 15


    The function passed to reduce uses only 2 arguments, that’s typically enough.

    Let’s see the details of what’s going on.

    On the first run, sum is the initial value (the last argument of reduce), equals 0, and current is the first array element, equals 1. So the function result is 1.
    On the second run, sum = 1, we add the second array element (2) to it and return.
    On the 3rd run, sum = 3 and we add one more element to it, and so on…

    The calculation flow:

    Or in the form of a table, where each row represents a function call on the next array element:

            sum	current	result
            the first call	0	1	1
            the second call	1	2	3
            the third call	3	3	6
            the fourth call	6	4	10
            the fifth call	10	5	15



    Here we can clearly see how the result of the previous call becomes the first argument of the next one.

        We also can omit the initial value:

        let arr = [1, 2, 3, 4, 5];

        // removed initial value from reduce (no 0)
        let result = arr.reduce((sum, current) => sum + current);

        alert( result ); // 15



    The result is the same. That’s because if there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.

            The calculation table is the same as above, minus the first row.

            But such use requires an extreme care. If the array is empty, then reduce call without initial value gives an error.

            Here’s an example:

            let arr = [];

            // Error: Reduce of empty array with no initial value
            // if the initial value existed, reduce would return it for the empty arr.
            arr.reduce((sum, current) => sum + current);


          So it’s advised to always specify the initial value.

         The method arr.reduceRight does the same, but goes from right to left.

         Arrays do not form a separate language type. They are based on objects.

            So typeof does not help to distinguish a plain object from an array:

            alert(typeof {}); // object
            alert(typeof []); // object (same)

    
    …But arrays are used so often that there’s a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.

            alert(Array.isArray({})); // false

            alert(Array.isArray([])); // true
======================================================================================================================================================================================

    # Most methods support “thisArg”

        Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.


      That parameter is not explained in the sections above, because it’s rarely used. But for completeness we have to cover it.

        Here’s the full syntax of these methods:

            arr.find(func, thisArg);
            arr.filter(func, thisArg);
            arr.map(func, thisArg);
            // ...
            // thisArg is the optional last argument


    The value of thisArg parameter becomes this for func.

    For example, here we use a method of army object as a filter, and thisArg passes the context:

       let army = {
            minAge: 18,
            maxAge: 27,
            canJoin(user) {
                return user.age >= this.minAge && user.age < this.maxAge;
            }
            };

            let users = [
            {age: 16},
            {age: 20},
            {age: 23},
            {age: 30}
            ];

            // find users, for who army.canJoin returns true
            let soldiers = users.filter(army.canJoin, army);

            alert(soldiers.length); // 2
            alert(soldiers[0].age); // 20
            alert(soldiers[1].age); // 23


        If in the example above we used users.filter(army.canJoin), then army.canJoin would be called as a standalone function, with this=undefined, thus leading to an instant error.
        A call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), that does the same. The latter is used more often, as it’s a bit easier to understand for most people.

     
        Summary
            A cheat sheet of array methods:

            To add/remove elements:

            push(...items) – adds items to the end,
            pop() – extracts an item from the end,
            shift() – extracts an item from the beginning,
            unshift(...items) – adds items to the beginning.
            splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
            slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
            concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
            To search among elements:

            indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
            includes(value) – returns true if the array has value, otherwise false.
            find/filter(func) – filter elements through the function, return first/all values that make it return true.
            findIndex is like find, but returns the index instead of a value.
            To iterate over elements:

            forEach(func) – calls func for every element, does not return anything.
            To transform the array:

            map(func) – creates a new array from results of calling func for every element.
            sort(func) – sorts the array in-place, then returns it.
            reverse() – reverses the array in-place, then returns it.
            split/join – convert a string to array and back.
            reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
            Additionally:

            Array.isArray(value) checks value for being an array, if so returns true, otherwise false.
            Please note that methods sort, reverse and splice modify the array itself.

            These methods are the most used ones, they cover 99% of use cases. But there are few others:

            arr.some(fn)/arr.every(fn) check the array.

            The function fn is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.

            These methods behave sort of like || and && operators: if fn returns a truthy value, arr.some() immediately returns true and stops iterating over the rest of items; if fn returns a falsy value, arr.every() immediately returns false and stops iterating over the rest of items as well.

            We can use every to compare arrays:


                function arraysEqual(arr1, arr2) {
            return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
            }

            alert( arraysEqual([1, 2], [1, 2])); // true



    arr.fill(value, start, end) – fills the array with repeating value from index start to end.

    arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

    arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

    For the full list, see the manual.

    From the first sight it may seem that there are so many methods, quite difficult to remember. But actually that’s much easier.

    Look through the cheat sheet just to be aware of them. Then solve the tasks of this chapter to practice, so that you have experience with array methods.

    Afterwards whenever you need to do something with an array, and you don’t know how – come here, look at the cheat sheet and find the right method. Examples will help you to write it correctly. Soon you’ll automatically remember the methods, without specific efforts from your side.

================================================================================================================================================================================================================
   TASKS:
================================================================================================================================================================================================================

   Translate border-left-width to borderLeftWidth
    importance: 5
    Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

    That is: removes all dashes, each word after dash becomes uppercased.

    Examples:

    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    P.S. Hint: use split to split the string into an array, transform it and join back.


     SOLUTION:

      function camalize(str) {
        return str

        .split('-')    // splits 'my-long-word' into array ['my', 'long', 'word']

        .map(
            // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']

        (word,index) => index == 0? word : word[0].toUppercase() + word.slice(1)
        )

        .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'

        
        }
  

    
     let's break it down in simpler terms:

            Splitting the String: The function starts by taking a string that may have hyphens in it. It then splits this string into smaller parts wherever it finds a hyphen. For example, if the input is 'my-long-word', it breaks it into three parts: 'my', 'long', and 'word'.

            Capitalizing the Parts: Then, it looks at each part individually. For all parts except the first one, it does the following:

            It takes the first letter of the part and turns it into an uppercase letter.
            It keeps the rest of the letters in the part unchanged.
            For example, 'long' becomes 'Long' and 'word' becomes 'Word'.
            Joining the Parts Back: Finally, it puts all the parts back together into one single word, without any hyphens in between. So, 'myLongWord' is the result of joining 'my', 'Long', and 'Word' together.

            In summary, the function takes a hyphenated string, changes it into a series of words, capitalizes the first letter of each word except the first one, and then joins all the words back together into one single word.

================================================================================================================================================================================================================

    Filter range
    importance: 4
    Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

    The function should not modify the array. It should return the new array.

    For instance:

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    alert( filtered ); // 3,1 (matching values)

    alert( arr ); // 5,3,8,1 (not modified)



    SOLUTION: 

    function filterRange(arr, a, b) {
        // added brackets around the expression for better readability
        return arr.filter(item => (a <= item && item <= b));
        }

        let arr = [5, 3, 8, 1];

        let filtered = filterRange(arr, 1, 4);

        alert( filtered ); // 3,1 (matching values)

        alert( arr ); // 5,3,8,1 (not modified)

================================================================================================================================================================================================================

    Filter range "in place"
        importance: 4
        Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

        The function should only modify the array. It should not return anything.

        For instance:

        let arr = [5, 3, 8, 1];

        filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

        alert( arr ); // [3, 1]


      SOLUTION:
      
      function filterRange(arr, a, b) {
        // added brackets around the expression for better readability
        return arr.filter(item => (a <= item && item <= b));
        }

        let arr = [5, 3, 8, 1];

        let filtered = filterRange(arr, 1, 4);

        alert( filtered ); // 3,1 (matching values)

        alert( arr ); // 5,3,8,1 (not modified)


            This JavaScript function filterRange filters out the elements from the input array arr that fall within the range specified by the parameters a and b. Let me explain how it works:

            Function Definition:

            javascript
            Copy code
            function filterRange(arr, a, b) {
            It defines a function named filterRange which takes three parameters: arr (an array), a (the lower bound of the range), and b (the upper bound of the range).

            Filtering with filter:

            javascript
            Copy code
            return arr.filter(item => (a <= item && item <= b));
            This line uses the filter() method on the input array arr. The filter() method creates a new array with all elements that pass the test implemented by the provided function. Here, the test function checks if each item in the array falls within the range specified by a and b. If the condition (a <= item && item <= b) is true for an item, it gets included in the filtered array.

            Filtering Process:
            For each item in the array, it checks if the item is greater than or equal to a and less than or equal to b. If it satisfies both conditions, it remains in the filtered array.

            Usage:

            javascript
            Copy code
            let arr = [5, 3, 8, 1];
            let filtered = filterRange(arr, 1, 4);
            Here, arr is [5, 3, 8, 1], and filtered will contain only the elements from arr that fall within the range [1, 4], which are [3, 1].

            Output:

            javascript
            Copy code
            alert( filtered ); // 3,1 (matching values)
            alert( arr ); // 5,3,8,1 (not modified)
            The first alert() displays the elements that passed the range filter, which are 3 and 1. The original array arr remains unchanged.

            So, the function effectively filters out the elements from the array that are within the specified range and returns a new array containing only those elements, without modifying the original array.


===================================================================================================================================================================================================================

    Filter range "in place"
        importance: 4
        Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

        The function should only modify the array. It should not return anything.

        For instance:

        let arr = [5, 3, 8, 1];

        filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

        alert( arr ); // [3, 1]



  SOLUTION: 

    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
            let val = arr[i];

            // remove if outside of the interval
            if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
            }
        }

        }

        let arr = [5, 3, 8, 1];

        filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

        alert( arr ); // [3, 1]



    
        This JavaScript function filterRangeInPlace modifies the input array arr by removing elements that fall outside of the specified range [a, b]. Here's how it works:

        Function Definition:

        javascript
        Copy code
        function filterRangeInPlace(arr, a, b) {
        It defines a function named filterRangeInPlace which takes three parameters: arr (an array), a (the lower bound of the range), and b (the upper bound of the range).

        Iterating Through Array:

        javascript
        Copy code
        for (let i = 0; i < arr.length; i++) {
        This loop iterates through each element of the array arr.

        Removing Elements:

        javascript
        Copy code
        let val = arr[i];

        if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
        }
        Within each iteration, it checks if the current element val is outside the specified range [a, b]. If it is, it uses the splice() method to remove that element from the array. Since the array is modified in-place, it adjusts the loop counter i to account for the removed element by decrementing it.

        Usage:

        javascript
        Copy code
        let arr = [5, 3, 8, 1];
        filterRangeInPlace(arr, 1, 4);
        Here, arr is [5, 3, 8, 1]. After calling filterRangeInPlace(arr, 1, 4), it removes elements from arr that are outside the range [1, 4].

        Output:

        javascript
        Copy code
        alert( arr ); // [3, 1]
        The alert() displays the modified array arr, which now contains only the elements [3, 1] because the numbers outside of the range [1, 4] have been removed.

        So, unlike the previous function (filterRange), this function modifies the original array directly instead of creating a new array with the filtered elements.

 
=============================================================================================================================================================
 */


 
     

  