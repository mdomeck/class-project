function addGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Welcome!';
    }
    return document.write('<h3>' + greeting + '</h3>');
}

function askName() {
    var username = prompt('What is your name?');
    return document.write('<h3>' + 'Hello, ' + username + '<h3>');
}

function askPreference() {
    var response = prompt('Do you like the beach or downtown?');
    var message;

    if (response === 'beach') {
        message = 'I love the beach too!';
    } else if (response === 'downtown') {
        message = 'Shopping is fun!'
    } else {
        message = 'You can\'t go wrong while on vacation'
    }
    return document.write('<p>' + message + '</p>');
} 
