function greet(name,callback){
    
    callback(name);
}

function sayHello(name){
    console.log("Hello, " + name + "!");
}

greet("Shivam",sayHello);