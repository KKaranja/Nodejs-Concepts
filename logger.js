//TODO: what is a module wrapper function?
//(function(exports, require, module, __filename, __dirname) {}) -> this is the module wrapper function

const EventEmitter = require('events');
// const emitter = new EventEmitter();

class Logger extends EventEmitter { //to extend the base class to this class avails all the methods of the base class to this class.
    log(message) { // declaring a function inside a class we don't need the function keyword but instead this is referred to a method.
        //Send a http request
        console.log(message);

        //raise an event 
        this.emit('messageLogged', { // this keyword refers to the current class in this case the "Logger class"
            id: 1,
            url: 'https:\\'
        }); // This are the additional event arguments({id:1, url:''})
        // emit in english means making noise or producing something -> in programming it means/ signals that an event has happened

        //TODO: Raise an event logging (data : message)

    }
}

console.log(__filename); // print the complete filename path with the filename at the end

console.log(__dirname); // print the complete folder path with the folder name at the end.

var url = "https://mylogger.io/log";



module.exports = Logger;