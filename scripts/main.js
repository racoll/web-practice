var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ps-1.jpeg') {
      myImage.setAttribute ('src','images/ps-2.jpeg');
    } else {
      myImage.setAttribute ('src','images/ps-1.jpeg');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
    setUserName();
  }

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Peter Sagan is cool, ' + myName;
    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla is cool, ' + storedName;
      }
  }

  myHeading.textContent = 'Mozilla is cool, ' + localStorage.getItem('name')