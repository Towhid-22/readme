/* 
Error handling -> try, catch, finally, throw
try ... cathc handle run time errors (progam which is)
Error object
The finally statement -> execute code, after try and catch
*/

/*
alert("hi everyone");
alert(x);
alert("bye everyone");
*/

/*
try{
          alert("hi everyone");
          alert(x)
          alert("bye everyone");
}catch(err){
          alert("inside catch block");
}

//
try{
          alert("hi everyone");
          alert(x)
          
}catch(err){
          console.log(err)
          // alert("inside catch block");
}finally{
          alert("bye everyone");
}

//

document.querySelector("#checkButton").addEventListener('click', function(){
          var num = document.querySelector('#numTextfield').value;
          console.log(num);

          try{
                    if(num < 5){
                              throw "Input is too low"
                    }
                    else if(num > 10){
                              throw "Input is too high"
                    }
                    else if(num == ""){
                              throw "Input is empty"
                    }
                    else if(isNaN(num)){
                              throw "Input is not a number"
                    }
          
          }catch(err){
                    console.log(err);
          }
})
*/

// try{
//           addlert('welcome');
// }catch(err){
//           console.log(err.message);
//           console.log(err.name);
// }

let x = 5;

try{
          if(x < 5){
                    throw "Input is very low"
          }
          else if(x > 10){
                    throw "Input is very high"
          }
          else if(x == ""){
                    throw "Input is empty"
          }
          else if(isNaN(x)){
                    throw "This not a number"
          }
}catch(err){
          console.log(err.x);
}