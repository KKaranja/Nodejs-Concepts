// introduction to node js, what it is and its advantages and capabilities.


/*node is ideal for building  highly-scalable, data-intensive and real-time backend services that power our client
 apps*/


/** advantages of node js
 * 1. great for prototyping and agile development
 * 2. used for building super fast and highly scalable application
 * 3. node application use javascript - can use your javascript skill and node skill to become a fullstack dev. 
 * 4. cleaner and more consistent codebase.
 * 5. node has the largest ecosystem of open-source libraries 
 * 
 * every browser has a javascript engine that take the javascript code and convert it to machine understandable code
 *      # microsoft edge has chakra js engine
 *      #firefox has spidermonkey js engine 
 *      #chrome browser has v8 js engine 
 */



/** 
 * node js architecture => node js is built from chrome browser javascript engine (v8) embedded it inside a c++ program and called it node.exe 
 * and that way , similar to a browser node is a runtime environment for javascript code.
 * 
 * sample javascript object 1. fs.readFile()
 *                          2. http.createServer()
 * 
 */




//  chrome v8 is the fastest javascript engine


/** 
 * In conclusion :
 * node is a program that include the v8 javascript engine and/plus additional modules that give us capabilities that are not available inside browsers.
 * eg the fs.readFile (), and http.createServer ()
 * 
 * node is not a programming language but its a runtime environment for executing javascript code. 
 */


/**  How node works
 * node applications are:
 * 1. highly-scalable - this is due to non-blocking or asynchronous nature of node.
 *              asynchronous =>Ability for a single thread being able to handle all request at the same time.
 * node is ideal for building I/O-intensive application but should not be used for cpu intensive applications because cpu application involves alot of calculation and 
 * since node is a single threaded other clients has to wait while the cpu is performing those calculations.
 */


//  hello world program in node

function sayHello(name) {
    console.log("Hello" + " " + name);

}
sayHello('World!');

/**Node Core 
 * Node Modules System
 *  1. OS (operating system module)
 *  2. FS (File system module)
 *  3. Events module 
 *  4. http module 
 */
console.log(); //global scope => can be accessed anywhere.

/** examples of other global functions and object available in node 
 *  setTimeout();
 *  clearTimeout();
 *  setInterval();
 *  clearInterval();
 */
/** 
 * every file in a node application is a module(private) ,, the variables and functions defined in this file are only available in this file only (not available outside that module).
 * This is to avoid adding this files to global scope which may lead to a confusion if we have similar functions with the same name.
 * if you want to use a function or an object outside the module you need to export it to make it public.
 * 
 * 
 * NB: Every node js application have at least one main module.
 */

console.log(module); // TODO: check out what the console.log(module)  does.

/**To load a module we use require() function; This function take one argument and this is the name/path of the target module we want to load.
 * The require function is one of the functions that are only available in node and not available on the browser.
 *The Require function returns the object in the target module .
 NB: We can export a single function or a single object from a module.
 */

//TODO: check how to export a single object and a single function



// Loading a module

// const logger = require('./logger');

// console.log(logger);


// logger.log('message');

/** "./" indicate that they are in the same folder(current folder)
 * if it was in a subfolder we would have used "./subfolder/filename"
 * or if it was in the source folder we would have used "../filename"
 */


// important build-in modules in node 
// 1. path module
const path = require('path');

//Path methods : 1. purse()
var fileName = path.parse(__filename);

console.log(fileName);

/**Results expect when you run the above line of code;
 * {root: 'C:\\', -> This is the root folder
 * dir:
 *  'C:\\Users\\ikimur01\\Documents\\cadbury\\cudbury\\DevC\\react\\New folder\\Node', -> path to the folder that contain the file.
 * base: 'app.js', -> This is The name of the file
 * ext: '.js', -> This is the file extension 
 * name: 'app', -> This is the name of the file without the extension. 
 * }
 */

// 2. OS module
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var userInformation = os.userInfo();
var osType = os.type();

// Template string : Help us build a string without concatenation as show below. This is available in ES6 /ES2015 : ECMAScript 6
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);
console.log(`User information: ${userInformation}`);
console.log(`Os Type: ${osType}`);

// 3. File Module(file system)
const fs = require('fs');

fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result',
        files);
});

// 4. Event module : An event is a signal that indicates that something has happened in an application

const EventEmitter = require('events'); //(class) Note: EventEmitter naming is different; start with capital letters which indicates that this is a class not a function. 
//A class is a container of related methods and properties.
//const emitter = new EventEmitter(); // instance(the emitter here is the object) of this class, this is created in order to use the class.
/**Difference between a class and an object 
 * class (eg human) -> defines the properties and behaviors eg talking, writing , sleeping
 * object (eg isaac) -> is an actual instance of that class 
 */


const Logger = require('./logger');
const logger = new Logger();


//Register a lister -> A lister is a function that will be called if an event is raised/ happened
logger.on('messageLogged', (arg) => { //here we add addition event argument which ara in the event(can use e,arg or EventArg)
    console.log('Lister Called', arg);
}); //This method takes two argument 1. name of the event 2. call back function or listener


logger.log('message');

// 5. http module

const http = require('http'); //class 
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //get data in json format.
        res.end();
    }
}); // object 


server.listen(3007);


console.log('Listening on port 3007');