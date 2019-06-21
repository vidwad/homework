const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// USE FOR STRECH
// var fs = require('fs');
// var myInterface = readline.createInterface({
//   input: fs.createReadStream('demofile1.html')
// });


let todoArray = ["[ ] Take out the trash", "[ ] Buy toothpaste", "[ ] Buy snickerdoodles", "[ ] Fix the climate", "[ ] End world hunger"];

  console.clear();
  console.log("Welcome to Todo CLI" + '\n');
  console.log("Full List of ToDos"+ '\n');
  
  if (todoArray.length>0) {
  for (let index = 0; index < todoArray.length; index++) {
  console.log(index + " " + todoArray[index]);
  }
} else {console.log("List is empty" + '\n')};
  console.log("--------------"+ '\n');
  console.log("(v) View  *  (n) New  *  (cX) Complete  *  (dX) Delete  *  (q) Quit" + '\n');




var recursiveAsyncReadLine = function() {

  rl.question("What is your menu choice ? ", function(theChoice) {
    
    var typeChoice = theChoice.slice(0,1);
    var typeNo = theChoice.slice(1,2);
   

    if (typeChoice == 'v' || typeChoice == 'n' || typeChoice == 'c'|| typeChoice == 'd' || typeChoice == 'q' ) {
    

    if (typeChoice == 'q') {
    quit();
    }


    if (typeChoice == 'n') {
    addNew(typeChoice);
    }


    if (typeChoice == 'v') {
    view();
    }


    if (typeChoice == 'c') {
    complete(typeNo);
    }


    if (typeChoice == 'd') {
    deleted(typeNo);
    }
   

    // Error handling if menu input is not valid

    } else {
      console.clear();
      console.log(typeChoice + " is NOT A VALID menu choice" + '\n');
      display()
    }         

  });

};

recursiveAsyncReadLine();



// Functions below



const view = function() {
  console.clear();
  display()
}



const addNew = function(typeChoice) {
  rl.question("What is your NEW Todo item ? ", (newItem) => {
  
        if (newItem != "") {
          newItem = ("[ ] " + newItem);
          todoArray.push(newItem);     

          console.clear();
          console.log("NEW Todo item ADDED ==> " + newItem +'\n')
          display()
        
        } else {
          console.clear();
          console.log("Not a valid New Entry ! " + newItem);
          display()
        } 
  });
   
}





const complete = function(typeNo) {
  if (typeNo<todoArray.length && typeNo>=0) {
        
    var changeChoice=todoArray[typeNo];
    var compChoice = changeChoice.replace("[ ]", "[C]");
    todoArray.splice(typeNo, 1, compChoice);
    
    console.clear();
    console.log("Todo item COMPLETED ==> " + compChoice+'\n')
    display()   
 
  } else {
    console.clear();
    console.log("Not a valid Item Number ==> " + typeNo);
    console.log('Must be between c0 and c' + ((todoArray.length)-1) + '\n');
    display()
  }
}



const deleted = function(typeNo) {
  if (typeNo<todoArray.length && typeNo>=0) {
        
    var delChoice=todoArray[typeNo];

    todoArray.splice(typeNo, 1);

    console.clear();
    console.log("Todo item DELETED ==> " + delChoice+'\n')
    display()
 
  } else {
    console.clear();
    console.log("Not a valid Item Number ==> " + typeNo);
    console.log('Must be between d0 and d' + ((todoArray.length)-1) + '\n');
    display()
  }
}
 


const quit = function() {
  console.clear();
  console.log("See you again soon !!!"+ '\n');
  return rl.close();
}


const display = function() {
  console.log("Welcome to Todo CLI" + '\n');
  console.log("Full List of ToDos"+ '\n');
  
  if (todoArray.length>0) {
    for (let index = 0; index < todoArray.length; index++) {
    console.log(index + " " + todoArray[index]);
    }
  } else {console.log("List is empty" + '\n')};
  console.log("--------------"+ '\n');
  console.log("(v) View  *  (n) New  *  (cX) Complete  *  (dX) Delete  *  (q) Quit" + '\n');
  recursiveAsyncReadLine();
}