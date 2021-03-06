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
    return greeting;
}

function askName() {
    var username = prompt('What is your name?');
    return document.write('<h3>' + 'Hello, ' + username + '<h3>');
}

function askPreference() {
    var response = prompt('Do you like the beach or downtown?');
    var message;

    while(response !== 'beach' && response !== 'downtown'){
        response = prompt('PLEASE ANSWER EXACT! Do you like the beach or downtown?')
    }
    if (response === 'beach') {
        message = 'I love the beach too!'
      } else if (response === 'downtown') {
        message = 'Shopping is fun!'
    } else {
        message = 'You can\'t go wrong while on vacation'
    }
    return response;
    // return document.write('<p>' + message + '</p>');
} 

function howMany(){
    var count = prompt('Great, how many times would you like to go there?');

    while(isNaN(count) || count +++''){
        count = prompt('PLEASE ENTER A NUMBER! How many times would you like?')
    }
    return count;
}

function showOrder(){
    var result = '';
    //getItemType
    var itemType = getItemType();
    
    //find how many they want
    var orderTotal = howMany();
    
    //send that order to the web page
    for ( var i = 0; i < orderTotal; i++){
        result = result + '<p>' + itemType + '</p>';
    }
    return orderTotal;
}

