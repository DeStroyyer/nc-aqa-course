# Object Parser

Hi!

In this task you need to do the following:

1) Create the `object.parser.js` module, that will export the `objectsParser` function.
```javascript
module.exports = function objectsParser(object, keys, values){
    // Implementation goes here
};
```

2) Your function has to accept 3 parameters:
- `object` - some object
- `keys` - keys to be found in the object
- `values` - values to be found in the object

3) Your function has to return an object with the following structure:
```javascript
{
    foundValues: [], 
    foundKeys: [], 
    notFoundKeys: [], 
    notFoundValues: [],
}
```
If `keys` or `values` are undefind - empty array should be returned for found and not found entries.

4) Develop your function in the TDD style - tests goes first.

Easy way:
 - Go to the `spec` directory and replace `xdescribe` with `describe` in the `object.parser.spec.js` file.
 Then make all tests to be green.
 
 Hard way:
 - Implement specs yourself. After you're done - perform the easy way steps and ensure that all specs including your are green
 
 ### Good luck and happy coding!
