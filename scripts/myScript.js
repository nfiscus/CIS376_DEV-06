window.addEventListener("load", pageFullyLoaded, false);

function pageFullyLoaded(){
    var userName = window.prompt('Welcome, guest. Please enter your name: ');
    window.alert('Hello ' + userName + '!');
    console.log('Hello ' + userName + '!');
};