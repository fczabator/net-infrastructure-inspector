const humanInterval = require('human-interval');
const ping = require('ping');
const exec = require('child_process').exec;
const wget = require('wget-improved');

// setInterval(() => {
//     console.log('three seconds ellapsed!');
// }, humanInterval('three seconds'));


/**
 * Helper functions
 */
const doPing = host => ping.promise.probe(host, {extra: ["-c 4"]})

const getTracerouteCommand = hostName => `traceroute -a ${hostName}`;

const getWgetCommand = path => `wget ${path}`;

const doTraceroute = host => {
    exec(getTracerouteCommand(host), (err, stdout, stderr) => {
        console.log(stdout.toString());
    })
}

const doWget = path => {
    exec(getWgetCommand(path), (err, stdout, stderr) => {
        console.log(stdout);
    })
}


/**
 * Program starts here
 */

// doPing('ca2.php.net').then(res => console.log(res))

// doTraceroute('ca2.php.net').then(res => console.log(res));

doWget('http://at1.php.net/get/php-7.2.0.tar.bz2/from/this/mirror');




