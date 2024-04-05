/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
 
    

 # DATE: 29/03/2024
 ==================== 
 
    # Map and Set

     Object are used to store keyed collection.
     Arrays are used to stored ordered collection.

    But that’s not enough for real life. That’s why Map and Set also exist.


     # Map:
     Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

     Methods and properties are:

       1. new Map() - Create the map.
       2. map.set(key,value) -stored the value by the key.
       3. map.get(key) - return the value by the key, undefined if key dosen't in map.
       4. map.has(key) - return True if key exist , False Otherewise.
       5. map.delete(key) - removes the element with the help of key.
       6. map.clear() - removes everything from the map.
       7. map.size() - returns the current element of count.

    # For instence.

        let map = new Map();

        map.set(1,'number');
        map.set("1",'string');
        map.set(true,'boolean');

        console.log(map.get(1));
        console.log(map.get("1"));

        console.log(map.size);


    As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.

    $ map[key] isn’t the right way to use a Map
        Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, 
        so it implies all corresponding limitations (only string/symbol keys and so on).

        So we should use map methods: set, get and so on.


    Map can also use objects as keys.

    For instance:

        let john = {name:"john"};

        // for every user, let's store their visits count
        let usemap = new Map();

        // john is the key for the map
        usemap.set(john,7878);

        console.log(usemap.get(john));  //7878


    $ How Map compares keys
        To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

        This algorithm can’t be changed or customized.


    $ Every map.set call returns the map itself, so we can “chain” the calls:

        map.set('1', 'str1')
        .set(1, 'num1')
        .set(true, 'bool1');
  

=======================================================================================================================================================

  # Iteration over Map:

    for looking over the Map, there are three methods..

    1. map.keys()--> Returns an iterables for keys.
    2. map.valued()--> returns an iteravles for values.
    3. map.entries()--> returns an iterablefor entities [key,value] ,its used by default for..of.


    let Vegtables = new Map([
    ['palak',200],
    ['methi',400],
    ['bhendi',600]
   ]);

       // iterate over keys (vegetables)
     for(let keys of Vegtables.keys()){
        console.log(keys);
     }
    
       // iterate over values (values)
     for(let values of Vegtables.values()){
        console.log(values);
     }

       // iterate over [key, value] entries
     for(let entries of Vegtables){
        console.log(entries);
     }


   The insertion order is used
     The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.



    $ Besides that, Map has a built-in forEach method, similar to Array:


    // runs the function for each (key, value) pair
        recipeMap.forEach( (value, key, map) => {
        alert(`${key}: ${value}`); // cucumber: 500 etc
        });

===========================================================================================================================================================

    # Object.entries: Map from Object:

    When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
   
    let map= new Map([
    [1,'number'],
    ["1",'string'],
    [true,'boolean']
   ])


   console.log(map.get("1")); //string
    
   $ If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj)
        that returns an array of key/value pairs for an object exactly in that format.

    So we can create a map from an object like this:

    let obj={
        name:"john",
        number: 78,
        age: 21
    }

    let map = new Map(Object.entries(obj));
    console.log(map.get('age'));


    Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.

====================================================================================================================================================

   # Object.fromEntries: Object from Map:

   We’ve just seen how to create Map from a plain object with Object.entries(obj).

   There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:

    let prices = Object.fromEntries([
        ['banana',1],
        ['peru',2],
        ['mango,3']
    ]);

    console.log(prices.banana);


    We can use Object.fromEntries to get a plain object from Map.
    E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.

    Here we go:

       let map = new Map();

        map.set('pranav',78 );
        map.set('vinay',21);
        map.set('shubham',24);

        let obj = Object.fromEntries(map.entries());   // make a plain object (*)

        console.log(obj.pranav);


    IMP:  A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.
          We could also make line (*) shorter:

       let obj = Object.fromEntries(map); // omit .entries()


    That’s the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map returns same key/value pairs as map.entries(). So we get a plain object with same key/values as the map.

========================================================================================================================================================================

     # Set: 
     As set is a spectial type of collecton -"set of values"(without keys), where each value may occur only once.

    its main methods are :


    $  it main methods are:

     1. new Set([iterable])  --> create the set, and if an iterable object is provided (usually an array), copies values from it into the set.
     2. set.add(values)  --> add avlues return to set itself.
     3. set.delete(values) --> removes the value, returns true if value exited at the movement of the call, otherwise false.
     4. set.has(values)  -->returns true if the value exists in the set, otherwise false.
     5. set.clear() --> removes everything from the set.
     6. set.size --> is the elements count.

    The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

    IMP: For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

     
     let set = new Set();

        let John ={ name:"john"}
        let pate ={ name:"pate"}
        let marry ={ name:"marry"}



        set.add(John);
        set.add(pate);
        set.add(marry);
        set.add(marry);
        set.add(pate);


        console.log(set.size);

        for(let num of set){
            console.log(num.name);
        }

    The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the performance would be much worse, because this method walks through the whole array checking every element. Set is much better optimized internally for uniqueness checks.
===============================================================================================================================================================================

    # Iteration over Set
        We can loop over a set either with for..of or using forEach:

        let set = new Set(["oranges", "apples", "bananas"]);

        for (let value of set) alert(value);

        // the same with forEach:
        set.forEach((value, valueAgain, set) => {
        alert(value);
        });


    Note the funny thing. The callback function passed in forEach has 3 arguments: a value, then the same value valueAgain, and then the target object. Indeed, the same value appears in the arguments twice.

    That’s for compatibility with Map where the callback passed forEach has three arguments. Looks a bit strange, for sure. But this may help to replace Map with Set in certain cases with ease, and vice versa.

    The same methods Map has for iterators are also supported:

    set.keys() – returns an iterable object for values,
    set.values() – same as set.keys(), for compatibility with Map,
    set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.


=============================================================================================================================================================================

   # Summary :

   Map – is a collection of keyed values.

        Methods and properties:

        new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
        map.set(key, value) – stores the value by the key, returns the map itself.
        map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
        map.has(key) – returns true if the key exists, false otherwise.
        map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.
        map.clear() – removes everything from the map.
        map.size – returns the current element count.
        The differences from a regular Object:

        Any keys, objects can be keys.
        Additional convenient methods, the size property.
        Set – is a collection of unique values.

        Methods and properties:

        new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
        set.add(value) – adds a value (does nothing if value exists), returns the set itself.
        set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
        set.has(value) – returns true if the value exists in the set, otherwise false.
        set.clear() – removes everything from the set.
        set.size – is the elements count.
        Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.


==================================================================================================================================================================================
      TASKS
==================================================================================================================================================================================
   
Filter unique array members
importance: 5
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
   your code 
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O


 SOLUTION 1:

 function unique(arr) {
  return Array.from(new Set(arr));
}


SOLUTION 2: 
     let arr = new Set([
         "Hare", "Krishna", "Hare", "Krishna",
         "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ]);
    
        for(let value of arr){
            console.log(value);
        }

====================================================================================
 
    Filter anagrams
    importance: 4
    Anagrams are words that have the same number of same letters, but in different order.

    For instance:

    nap - pan
    ear - are - era
    cheaters - hectares - teachers
    Write a function aclean(arr) that returns an array cleaned from anagrams.

    For instance:

    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
    From every anagram group should remain only one word, no matter which one.



   ===> SOLUTION:


        To find all anagrams, let’s split every word to letters and sort them. When letter-sorted, all anagrams are same.

        For instance:

        nap, pan -> anp
        ear, era, are -> aer
        cheaters, hectares, teachers -> aceehrst
        ...
        We’ll use the letter-sorted variants as map keys to store only one value per each key:

        function aclean(arr) {
        let map = new Map();

        for (let word of arr) {
            // split the word by letters, sort them and join back
            let sorted = word.toLowerCase().split('').sort().join(''); // (*)
            map.set(sorted, word);
        }

        return Array.from(map.values());
        }

        let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

        alert( aclean(arr) );
        Letter-sorting is done by the chain of calls in the line (*).

        For convenience let’s split it into multiple lines:

        let sorted = word // PAN
        .toLowerCase() // pan
        .split('') // ['p','a','n']
        .sort() // ['a','n','p']
        .join(''); // anp
        Two different words 'PAN' and 'nap' receive the same letter-sorted form 'anp'.

        The next line put the word into the map:

        map.set(sorted, word);
        If we ever meet a word the same letter-sorted form again, then it would overwrite the previous value with the same key in the map. So we’ll always have at maximum one word per letter-form.

        At the end Array.from(map.values()) takes an iterable over map values (we don’t need keys in the result) and returns an array of them.

        Here we could also use a plain object instead of the Map, because keys are strings.

        That’s how the solution can look:

        function aclean(arr) {
        let obj = {};

        for (let i = 0; i < arr.length; i++) {
            let sorted = arr[i].toLowerCase().split("").sort().join("");
            obj[sorted] = arr[i];
        }

        return Object.values(obj);
        }

        let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

        alert( aclean(arr) );

========================================================================================================================

  Iterable keys
        importance: 5
        We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

        But that doesn’t work:

        let map = new Map();

        map.set("name", "John");

        let keys = map.keys();

        // Error: keys.push is not a function
        keys.push("more");
        Why? How can we fix the code to make keys.push work?


    SOLUTION:

    That’s because map.keys() returns an iterable, but not an array.

        We can convert it into an array using Array.from:

        let map = new Map();

        map.set("name", "John");

        let keys = Array.from(map.keys());

        keys.push("more");

        alert(keys); // name, more
        
========================================================================================================================================================= 
 */

   
  
  


  

 


  
   