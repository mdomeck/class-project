var response = prompt('Do you  like the beach or downtown?');
var message;

if (response === 'beach'){
    message = 'I love the beach too!'
 } else if (response === 'downtown'){
    message = 'Shopping is fun!'
 } else if (response === both){
    message = 'HURRAY, I love both too!'
 } else {
    message = 'You can\'t go wrong while on vacation'
 }

 document.write('<h3>' + message + '</h3>');