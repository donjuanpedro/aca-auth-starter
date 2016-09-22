const $ = require('jquery');

// Set jQuery in the window
window.$ = window.jQuery = $;

const app = document.querySelector('#app');

// Set greeting

const username = $('[data-bootstrap]').data('bootstrap').username;
const greeting = document.createElement('h2');
greeting.innerText = 'Hello ' + username + '! Welcome to your Express Backbone App!';

app.appendChild(greeting);
