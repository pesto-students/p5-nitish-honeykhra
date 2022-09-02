## The output is - Count is 0

# Reason:

The reason is we are not printing the actual count variable that is being incremented.

We are printing the count variable with the help of message variable that gets the value of count in the start of the execution of program

Now we are incrementing the count but message already has a value of count equal to 0

If we uncomment console.log inside the function increment

## The output is -
Count is 1
Count is 2
Count is 3
Count is 0

Now it is printing the actual count variable being incremented but the message is still printing 0
