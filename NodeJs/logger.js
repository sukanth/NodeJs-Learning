
console.log("filename is : "+ __filename);
console.log("Directory Name is : "+ __dirname);

var message = "http://mylogger.io/log";
const EventEmitter =  require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        //raise an event
		this.emit('messageLogged',{id:1,url:'http://'});
    }
}

module.exports = Logger;
