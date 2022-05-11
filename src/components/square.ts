/* The idea is that we'll maintain JS objects that create and maintain the actual DOM components.
The JS objects will interact with each other in the simulation and they'll also have the ability to get data from
and update the UI when needed. 

I will probably need to use Webpack or something to compile all of my modules into a single file which I 
can include from my html file.
*/

export class Square{
    constructor(){
        console.log("Creating a square")
    }

    foo = 1;

    print(){
        console.log("Printing data: " + this.foo)
    }
};
