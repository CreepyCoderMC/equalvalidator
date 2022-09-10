import { valueIsEqual } from '@teamcoder/equalvalidator';

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

