console.log("ok");

// 26 minutes
// owner rents out to tenants
// owner as occupant?, but owner is renting to someone else!
// no onsite maintainance common hallway

function replaceName(){
  var stringStamp = "Username:"
  for (i < 5;;){
    // var stringStamp = stringStamp.replace("Username",$stringNew);
    // https://namecensus.com/male_names.htm) = $stringNew
    var stringStamp = stringStamp.replace("Username","$stringNew");
stringStamp = document.createElement("div");

  }
}


function getInputValue(){
    console.log("good")
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    console.log("yeah!")
    // Displaying the value
  //   alert(inputVal);
    if (inputVal = "Benjo69"){
        alert("welcome to the future, ", $inputVal, " !  Please enter your password:")
      //   document.querySelector('#myInput').replace()
      // ??? how to best refresh the thing?
        document.querySelector('#myInput').remove()
        document.querySelector('#getVal').remove()
        var x = document.createElement("INPUT");
          x.setAttribute("type", "text");
          x.setAttribute("placeholder", "password here, plz")
          document.body.appendChild(x);
        newfunc();

    }
    else{
        alert("you are not an authorized user")
    }
}

function userAccept(){
    console.log(userAccept)
    
    document.addEventListener('DOMContentLoaded', () => {
        'use strict';
    
        let buffer = [];
    
        document.addEventListener('keydown', event => {
            const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
            const key = event.key.toLowerCase();
    
            // we are only interested in alphanumeric keys
            if (charList.indexOf(key) === -1) return;
    
            buffer.push(key);
            console.log(buffer);
        });
    });

}
