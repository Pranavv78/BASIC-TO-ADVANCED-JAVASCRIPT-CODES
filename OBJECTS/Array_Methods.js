/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
 
    

 # DATE: 26/03/2024
 ==================== 


  # Array Methods :
      Arrays provide a lot of methods. To make things easier.


  $ Add/remove items

    we already know methods that are remove items from begining or end.
      1. arr.push(...items) :  add the items to the end.
      2. arr.pop(...items)  :  extracts the items from end.
      3. arr.shift(..items) :  extract the items to begining.
      4. arr.unshift(..items): add the items to begining.


  Here are few others:

    Splice:
  
  $  How to delete an element from the array?
     The arrays are objects, so we can try to use delete:

     let arr = ["I", "go", "home"];
     delete arr[1]; // remove "go"
     alert( arr[1] ); // undefined
     // now arr = ["I",  , "home"];
     alert( arr.length ); // 3


     The element was removed, but the array still has 3 elements, we can see that arr.length == 3.

      That’s natural, because delete obj.key removes a value by the key. It’s all it does. Fine for objects.
      But for arrays we usually want the rest of elements to shift and occupy the freed place. We expect to have a shorter array now.

    $ The arr.splice method is a swiss army knife for arrays.it can do everything : insert ,replace and remove the elements.

       arr.splice(start[,deletecount,elem1,...,elemN]);

      It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

    It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

    This method is easy to grasp by examples.

    Let’s start with the deletion:

    let arr=["PRANAV","PRAMOD","CHAVAN"];
    arr.splice(1,1);
    console.log(arr);


  Easy, right? Starting from the index 1 it removed 1 element.

  In the next example we remove 3 elements and replace them with the other two:
    let arr=["I","study","javasript","right","now"];
    arr.splice(0,3,"lets","Dance");
    console.log(arr);


  Here we can see that splice returns the array of removed elements:

    let arr=["i","studid","javascript","right","now"];
      let removed =arr.splice(0,2,"i","learn");
      console.log(removed);
      console.log(arr);


    The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

      let arr=["pranav","pramod","chavan"];
      arr.splice(0,0,"I","Am");
      console.log(arr);


      EX:2:

      let arr = ["I", "study", "JavaScript"];

    // from index 2
    // delete 0
    // then insert "complex" and "language"
    arr.splice(2, 0, "complex", "language");

    alert( arr ); // "I", "study", "complex", "language", "JavaScript"

          
  # Negative indexes allowed
   Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:

    let arr = [1, 2, 5];

    // from index -1 (one step from the end)
    // delete 0 elements,
    // then insert 3 and 4
    arr.splice(-1, 0, 3, 4);

    alert( arr ); // 1,2,3,4,5



  # Slice:
    The method arr.slice is much simpler than similar-looking arr.splice.

   The syntax is:

     arr.slice([start},[end])

  It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
  It’s similar to a string method str.slice, but instead of substrings it makes subarrays.


    let arr=["a","b","c","d"]

    console.log( arr.slice(1,3));

    console.log(arr.slice(-2));


  # concat:

  The method arr.concat creates a new array that includes values from other arrays and additional items.

    The syntax is:

    arr.concat(arg1, arg2...)

    EX:


    let arr = [1, 2];

    // create an array from: arr and [3,4]
    alert( arr.concat([3, 4]) ); // 1,2,3,4

    // create an array from: arr and [3,4] and [5,6]
    alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

    // create an array from: arr and [3,4], then add values 5 and 6
    alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

  Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:


    let arr = [1, 2];

    let arrayLike = {
      0: "something",
      length: 1
    };

    alert( arr.concat(arrayLike) ); // 1,2,[object Object]




    …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

    let arr = [1, 2];

    let arrayLike = {
      0: "something",
      1: "else",
      [Symbol.isConcatSpreadable]: true,
      length: 2
    };

    alert( arr.concat(arrayLike) ); // 1,2,something,else
====================================================================================================================================================================================

   # Iterate: forEach:

   The arr.forEach method allows to run a function for every element of the array.

   The syntax:
      
     arr.forEach(function(item1,index1,array){
       //...do something with item
     });


  // for each element call alert:

  ["apple","banana","mango","chiku"].forEach(alert);



    And this code is more elaborate about their positions in the target array:

    ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
      alert(`${item} is at index ${index} in ${array}`);
    });

=================================================================================================================================================================================

   # Searching in an array:
     Now let’s cover methods that search in an array.


     indexOf/lastindexOf and includes.

     the methods arr.indexOf:
     The methods arr.indexOf and arr.includesOf have the similar syntax and do essentialy foe the same as their strings counteparts,but on items insted of characters.
       
      $ arr.indexOf(item,from)-looks for items starting from index form , and return the index where it was found,otherwise -1.

      $ aarr.includesOf(item,from)-looks for item starting from index from, returns true if found.


      usually this methods are used with only one argument : the items to search.by default,the search is form the begenning.

      for instance: 


      let arr=[1,0,false];

      console.log(arr.indexOf(0)); //1
      console.log(arr.indexOf(false)); //2
      console.log(arr.indexOf(null));  //-1

      console.log(arr.includes(1));  //true


      plese note that indexOf use the stric equality === for comparision. So, if we look for false, it finds exactly false and not the zero.

      if we want to check items exist in the array, and dont need the index, then arr.includes is preffered.

      the method arr.lastIndexOf is the same as arr.indexOf. but looks for the right to left.

         
      let fruits=['apple','mango','banana','peru'];

      console.log(arr.indexOf('apple'));  // 0 (first Apple)
      console.log(arr.lastindexOf('apple'));  // 2 (last Apple)

===============================================================================================================================================================================

  # find and findIndex/findLastIndex:

    Imagine we have an array of objects. How do we find an object with the specific condition?

    Here the arr.find(fn) method comes in handy.

    The syntax is:

    let result= arr.find(function(items,index,array)){
        // if true is returned, item is returned and iteration is stopped
      // for falsy scenario returns undefined
    });
    

   The function is call for elements of an array, one after another:

   items is the element.
   index is its index.
   array is the array itself.

   if it return true , the search is stoped , the item is returned .if nothing found, undefined is returned.

    for example, we have an array of users, each with the fields id and name . lets fid the one with id== 1:

    let users=[
      {id: 1, name : "pranav"},
      {id:2,name : "pramod"},
      {id: 2, name:"chavan"}

    ];

    let user = users.find(item =>item.id==1);

    console.log(user.name);


    In real life arrays of objects is a common thing, so the find method is very useful.

    Note that in the example we provide to find the function item => item.id == 1 with one argument. That’s typical, other arguments of this function are rarely used.

    The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

    The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

    Here’s an example:


        let users = [
      {id: 1, name: "John"},
      {id: 2, name: "Pete"},
      {id: 3, name: "Mary"},
      {id: 4, name: "John"}
      ];

      // Find the index of the first John
      alert(users.findIndex(user => user.name == 'John')); // 0

      // Find the index of the last John
      alert(users.findLastIndex(user => user.name == 'John')); // 3



      
   











    












=============================================================================================================================================================
 */


  

  