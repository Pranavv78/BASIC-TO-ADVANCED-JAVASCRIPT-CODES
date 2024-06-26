/*

  TIP :- 
  CTRL + /              ==> FOR SINGLE COMMENTING SHORTCUT.
  Shift + Alt + A       ==> Toggle block comment       ---> IMP FOR MULTIPLE LINE COMMENT.
 
    

 # DATE: 1/04/2024
 ==================== 
 

    # WeakMap and WeakSet:

    As we know from the chapter Garbage collection, JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used.

        For instance:

        let john = { name: "John" };

        // the object can be accessed, john is the reference to it

        // overwrite the reference
        john = null;

        // the object will be removed from memory.

    
    $ Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.
         For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.
 
 
 
    let john = { name: "John" };

        let array = [ john ];

        john = null; // overwrite the reference

        // the object previously referenced by john is stored inside the array
        // therefore it won't be garbage-collected
        // we can get it as array[0]
        
        Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

     For instance:


     let john = { name: "John" };

        let map = new Map();
        map.set(john, "...");

        john = null; // overwrite the reference

        // john is stored inside the map,
        // we can get it by using map.keys()
=============================================================================================================================================================================


    # WeakMap:
     
     IMP: The first difference between Map and WeakMap is that keys must be objects, not primitive values

     let weakMap = new WeakMap();

        let obj = {};

        weakMap.set(obj, "ok"); // works fine (object key)

        // can't use a string as the key
        weakMap.set("test", "Whoops"); // Error, because "test" is not an object
                
        
    Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

    let john = { name: "John" };

        let weakMap = new WeakMap();
        weakMap.set(john, "...");

        john = null; // overwrite the reference

        // john is removed from memory!


    Compare it with the regular Map example above. Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

    IMP: WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

    WeakMap has only the following methods:

        weakMap.set(key, value)
        weakMap.get(key)
        weakMap.delete(key)
        weakMap.has(key)
 

    Why such a limitation? That’s for technical reasons. If an object has lost all other references (like john in the code above), then it is to be garbage-collected automatically. But technically it’s not exactly specified when the cleanup happens.

        The JavaScript engine decides that. It may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen. So, technically, the current element count of a WeakMap is not known. The engine may have cleaned it up or not, or did it partially. For that reason, methods that access all keys/values are not supported.

        Now, where do we need such a data structure?
 
    
         he main area of application for WeakMap is an additional data storage.

        If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

        We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.

        weakMap.set(john, "secret documents");
        // if john dies, secret documents will be destroyed automatically



        // 📁 visitsCount.js
            let visitsCountMap = new Map(); // map: user => visits count

            // increase the visits count
            function countUser(user) {
            let count = visitsCountMap.get(user) || 0;
            visitsCountMap.set(user, count + 1);
            }



    And here’s another part of the code, maybe another file using it:

            // 📁 main.js
            let john = { name: "John" };

            countUser(john); // count his visits

            // later john leaves us
            john = null;
            Now, john object should be garbage collected, but remains in memory, as it’s a key in visitsCountMap.

            We need to clean visitsCountMap when we remove users, otherwise it will grow in memory indefinitely. Such cleaning can become a tedious task in complex architectures.

            We can avoid it by switching to WeakMap instead:

            // 📁 visitsCount.js
            let visitsCountMap = new WeakMap(); // weakmap: user => visits count

            // increase the visits count
            function countUser(user) {
            let count = visitsCountMap.get(user) || 0;
            visitsCountMap.set(user, count + 1);
            }
            Now we don’t have to clean visitsCountMap. After john object becomes unreachable, by all means except as a key of WeakMap, it gets removed from memory, along with the information by that key from WeakMap.

================================================================================================================================================================================

     # Use case: caching:

    Another common example is caching. We can store (“cache”) results from a function, so that future calls on the same object can reuse it.
     To achieve that, we can use Map (not optimal scenario):


     // 📁 cache.js
        let cache = new Map();

        // calculate and remember the result
        function process(obj) {
        if (!cache.has(obj)) {
            let result = // calculations of the result for... obj;

            cache.set(obj, result);
            return result;
        }

        return cache.get(obj);
        }

        // Now we use process() in another file:

        // 📁 main.js
        let obj = {// let's say we have an object };

        let result1 = process(obj); // calculated

        // ...later, from another place of the code...
        let result2 = process(obj); // remembered result taken from cache

        // ...later, when the object is not needed any more:
        obj = null;

        alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)
 
    For multiple calls of process(obj) with the same object, it only calculates the result the first time, and then just takes it from cache. The downside is that we need to clean cache when the object is not needed any more.


     If we replace Map with WeakMap, then this problem disappears. The cached result will be removed from memory automatically after the object gets garbage collected.
 

                // 📁 cache.js
            let cache = new WeakMap();

            // calculate and remember the result
            function process(obj) {
            if (!cache.has(obj)) {
                let result = // calculate the result for ... obj;

                cache.set(obj, result);
                return result;
            }

            return cache.get(obj);
            }

            // 📁 main.js
            let obj = {//some object };

            let result1 = process(obj);
            let result2 = process(obj);

            // ...later, when the object is not needed any more:
            obj = null;

            // Can't get cache.size, as it's a WeakMap,
            // but it's 0 or soon be 0
            // When obj gets garbage collected, cached data will be removed as well
            
==================================================================================================================================================================================

   
    # WeakSet
        WeakSet behaves similarly:

        It is analogous to Set, but we may only add objects to WeakSet (not primitives).
        An object exists in the set while it is reachable from somewhere else.
        Like Set, it supports add, has and delete, but not size, keys() and no iterations.


    Being “weak”, it also serves as additional storage. But not for arbitrary data, rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

    For instance, we can add users to WeakSet to keep track of those who visited our site:

    let visitedSet = new WeakSet();

        let john = { name: "John" };
        let pete = { name: "Pete" };
        let mary = { name: "Mary" };

        visitedSet.add(john); // John visited us
        visitedSet.add(pete); // Then Pete
        visitedSet.add(john); // John again

        // visitedSet has 2 users now

        // check if John visited?
        alert(visitedSet.has(john)); // true

        // check if Mary visited?
        alert(visitedSet.has(mary)); // false

        john = null;

        // visitedSet will be cleaned automatically
                    
    The most notable limitation of WeakMap and WeakSet is the absence of iterations, and the inability to get all current content. That may appear inconvenient, but does not prevent WeakMap/WeakSet from doing their main job – be an “additional” storage of data for objects which are stored/managed at another place.


    Summary:

    Summary
        WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

        WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

        Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.

        That comes at the cost of not having support for clear, size, keys, values…

        WeakMap and WeakSet are used as “secondary” data structures in addition to the “primary” object storage. Once the object is removed from the primary storage, if it is only found as the key of WeakMap or in a WeakSet, it will be cleaned up automatically.
        
================================================================================================================================================================================

    # Object.keys, values, entries:

    Let’s step away from the individual data structures and talk about the iterations over them.

    In the previous chapter we saw methods map.keys(), map.values(), map.entries().

    These methods are generic, there is a common agreement to use them for data structures. If we ever create a data structure of our own, we should implement them too.

    They are supported for:

    1. Map
    2. Set
    3. Array
    Plain objects also support similar methods, but the syntax is a bit different.


    Object.keys, values, entries:

    For plain objects, the following methods are available:

    For plain objects, the following methods are available:

        Object.keys(obj) – returns an array of keys.
        Object.values(obj) – returns an array of values.
        Object.entries(obj) – returns an array of [key, value] pairs.
        Please note the distinctions (compared to map for example):

    
    
                               Map	                           Object
        Call syntax     	map.keys()	               Object.keys(obj), but not obj.keys()
         Returns	         iterable                        “real”  Array

   
        The first difference is that we have to call Object.keys(obj), and not obj.keys().

        Why so? The main reason is flexibility. Remember, objects are a base of all complex structures in JavaScript. So we may have an object of our own like data that implements its own data.values() method. And we still can call Object.values(data) on it.

        The first difference is that we have to call Object.keys(obj), and not obj.keys().

            Why so? The main reason is flexibility. Remember, objects are a base of all complex structures in JavaScript. So we may have an object of our own like data that implements its own data.values() method. And we still can call Object.values(data) on it.

            The second difference is that Object.* methods return “real” array objects, not just an iterable. That’s mainly for historical reasons.

            For instance:

            let user = {
            name: "John",
            age: 30
            };
            Object.keys(user) = ["name", "age"]
            Object.values(user) = ["John", 30]
            Object.entries(user) = [ ["name","John"], ["age",30] ]
            Here’s an example of using Object.values to loop over property values:


                let user = {
                name: "John",
                age: 30
                };

                // loop over values
                for (let value of Object.values(user)) {
                alert(value); // John, then 30
                }

=================================================================================================================================================================================

    # Transforming objects
            Objects lack many methods that exist for arrays, e.g. map, filter and others.

            If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:

            Use Object.entries(obj) to get an array of key/value pairs from obj.
            Use array methods on that array, e.g. map, to transform these key/value pairs.
            Use Object.fromEntries(array) on the resulting array to turn it back into an object.
            For example, we have an object with prices, and would like to double them:


        let prices = {
            banana: 1,
            orange: 2,
            meat: 4,
            };

            let doublePrices = Object.fromEntries(
            // convert prices to array, map each key/value pair into another pair
            // and then fromEntries gives back the object
            Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
            );

            alert(doublePrices.meat); // 8


    It may look difficult at first sight, but becomes easy to understand after you use it once or twice. We can make powerful chains of transforms this way1
















 
 
 
=========================================================================================================================================================
 
 */