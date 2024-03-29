var Sandbox = require("../lib/sandbox")
  , s = new Sandbox()

// Example 1 - Standard JS
s.run( "1 + 1", function( output ) {
  console.log( "Example 1: " + output.result + "\n" )
})

// Example 2 - Something slightly more complex
s.run( "(function(name) { return 'Hi there, ' + name + '!'; })('Fabio')", function( output ) {
  console.log( "Example 2: " + output.result + "\n" )
})

// Example 3 - Syntax error
s.run( "lol)hai", function( output ) {
  console.log( "Example 3: " + output.result + "\n" )
});

// Example 4 - Restricted code
s.run( "process.platform", function( output ) {
  console.log( "Example 4: " + output.result + "\n" )
})

// Example 5 - Infinite loop
s.run( "while (true) {}", function( output ) {
  console.log( "Example 5: " + output.result + "\n" )
})

// Example 6 - Caller Attack Failure
s.run( "(function foo() {return foo.caller.caller;})()", function( output ) {
  console.log( "Example 6: " + output.result + "\n" )
})

// Example 7 - Argument Attack Failure
s.run( "(function foo() {return [].slice.call(foo.caller.arguments);})()", function( output ) {
  console.log( "Example 7: " + output.result + "\n" )
})

// Example 8 - Type Coersion Attack Failure
s.run( "(function foo() {return {toJSON:function x(){return x.caller.caller.name}}})()", function( output ) {
  console.log( "Example 8: " + output.result + "\n" )
})

// Example 9 - Global Attack Failure
s.run( "x=1;(function() {return this})().console.log.constructor('return this')()", function( output ) {
  console.log( "Example 9: " + output.result + "\n" )
})

//Example 10 - Testing adding a file
s.run("test()", function( output ){
	console.log( "Example 10: "+ output.result + "\n" )
})
