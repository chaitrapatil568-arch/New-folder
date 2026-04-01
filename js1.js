// function is reusable block of code
// hoisting: function declaration are hoisted to the top of their scope, meaning they can be called before they are defined in the code. 
// However, function expressions are not hoisted and will result in an error if called before they are defined.
//*function with ddclaration
//*function with return value
//*function without return value
//*Arrow function


//withoiut function
console.log("hello world");
console.log("hello world");

//with function
function greet(name){

    console.log("hello" +" " + name + "!" );
}
greet("john");
greet("janu");//janu is the argument passed to the function greet, which will be used as the value of the parameter name when the function is executed.

//parameters are placeholders for the values that will be passed to the function when it is called.
//arguments are the actual values passed to the function when it is called.

function add(a=18, b) {
    return a + b;
}
console.log(add( 4,10)); 
