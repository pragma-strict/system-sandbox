/* The idea is that we'll maintain JS objects that create and maintain the actual DOM components.
The JS objects will interact with each other in the simulation and they'll also have the ability to get data from
and update the UI when needed. 
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