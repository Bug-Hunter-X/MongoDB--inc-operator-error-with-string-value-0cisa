# MongoDB $inc Operator Error with String Value
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical value in a document.  However, if you provide a string value to `$inc` the operation will fail.  This example shows the error and how to correct it.

**Bug:** The `bug.js` file shows an incorrect implementation where a string is passed to the `$inc` operator.
**Solution:** The `bugSolution.js` file demonstrates the correct usage with a numerical value.