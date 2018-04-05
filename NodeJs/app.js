/*Tutorial https://www.youtube.com/watch?v=TlB_eWDSMt4*/
/*Sukanth*/
var Logger = require('./logger');

/*Importing Modules*/
const path = require('path');
const os = require('os');
const fileSystem = require('fs');
/*Accessing methods inside the modules*/
var pathObj  = path.parse(__filename);
var files = fileSystem.readdirSync('./');

/*Templet String*/ /*Os Module*/
console.log(`Free Memory : ${os.freemem()}`);
console.log(`Host Name : ${os.hostname()}`);
console.log(`Total Memory : ${os.totalmem()}`);


/*fs Module Async Example*/
fileSystem.readdir('./', function(err,files){
	if (err) {
		console.log("Error"+err);
	}
	else{
		console.log("Files"+files);
	}
});

/*Events Example*/
//const EventEmitter = require('events');
const logger = new Logger();


//Register a listener
logger.on('messageLogged',(eventArg) =>{
	console.log('Event Called',eventArg);
});

logger.log('message');

/*Example for Http Module*/
const http = require('http');

const server = http.createServer((req,res) => {
	if(req.url === '/'){
		res.write('Sukanth');
		res.end();
	}
	if(req.url === '/sukanth/friends'){
		res.write(JSON.stringify(['Kiran','Dinesh','Sreekanth']));
		res.end();
	}
});


server.listen(3000);

console.log('Listening on port 3000');
