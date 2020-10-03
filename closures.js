/* When we first call the outerFunction, we have the outerVariable (set to "outside") and then
the innerFunction gets returned.
The reason we have access this outerVariable inside the innerFunction is because of closures.
Key point:
When the outerFunction runs, the outer Variable is only available inside the outerFunction, at
	which point the outerFunction is done executing. When you call the outer function on its own,
  nothing happens because the outerFunction is done executing and the outerVariable is done executing.
The outerVariable has gone out of scope.
	With closures, the innerFunction is essentially saying "I'm inside this outerFunction, it has this
  outerVariable so Im going to save this outerVariable, I'm going to make sure I know what this
  outerVariable is at all times and even if the outerFunction is no longer executed anymore, I'm still going 	to keep track of the outerVariable." 
The most common use case for this is to have variables that you pass into functions that can then be accessed inside of other functions
*/

function outerFunction(outerVariable) {
	let outer2 = "Outer2"
	return function innerFunction(innerVariable) {
  	console.log("Outer Variable: " + outerVariable)
    console.log("Inner Variable: " + innerVariable)
    console.log(outer2)
  }
}

let newFunction = outerFunction("outside")
newFunction("inside")