# Equal Validator
This module is small but easy to use. The purpose of this module is to check if a target value equals a source value, it can optionally also do none case sensitive comparing.
## Validation processes
The code contains two methods to check if two string are equal.
### Compare method 1
This method is case sensitive so both source value and target value must be the same case.
### Compare method 2
This method is not case sensitive so both source value and target value can be any case.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import valueIsEqual from './node_modules/@teamcoder/equalvalidator/equalvalidator.js';

console.log( "Testing Condition  1 Passed = " + valueIsEqual(  "Hallo world" , "Hallo world"         ) );
console.log( "Testing Condition  2 Passed = " + !valueIsEqual( "Hallo world" , "Hallo World"         ) );
console.log( "Testing Condition  3 Passed = " + valueIsEqual(  "Hallo world" , "Hallo world" , true  ) );
console.log( "Testing Condition  4 Passed = " + !valueIsEqual( "Hallo world" , "Hallo World" , true  ) );
console.log( "Testing Condition  5 Passed = " + valueIsEqual(  "Hallo world" , "Hallo world" , false ) );
console.log( "Testing Condition  6 Passed = " + valueIsEqual(  "Hallo world" , "Hallo World" , false ) );
console.log( "Testing Condition  7 Passed = " + valueIsEqual(  14            , 14                    ) );
console.log( "Testing Condition  8 Passed = " + !valueIsEqual( 1             , 14                    ) );
console.log( "Testing Condition  9 Passed = " + valueIsEqual(  true          , true                  ) );
console.log( "Testing Condition 10 Passed = " + !valueIsEqual( true          , false                 ) );
```
The results will look as follows
```
Testing Condition  1 Passed = true
Testing Condition  2 Passed = true
Testing Condition  3 Passed = true
Testing Condition  4 Passed = true
Testing Condition  5 Passed = true
Testing Condition  6 Passed = true
Testing Condition  7 Passed = true
Testing Condition  8 Passed = true
Testing Condition  9 Passed = true
Testing Condition 10 Passed = true
```
## Function Parameters
```
@param  { Any     } source        The source value to be checked
@param  { Any     } target        The target value to be checked
@param  { Boolean } caseSensitive If the check must be case sensitive ( optional , default = true )
@return { Boolean }               Validation passed or failed
```
## Version History
| Version  | Date                   | Remark                              |
|----------|------------------------|-------------------------------------|
| 1.0.0    | 04 September 2022      | Official first release              |
| 1.0.1    | 04 September 2022      | Correcting spelling mistakes        |
| 1.0.2    | 06 September 2022      | Correcting documentation            |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/equalvalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
ContainValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)