// console.log(document);
// console.log(document.domain);
// console.log(document.doctype);

// document.title = "Doni"

// document.getElementsByClassName("heading").innerHTML = "Hello"
// document.getElementById("demo").innerHTML = "Hello World"

// let headerTitle = document.getElementById("header-title");
// // console.log(header-title);
// headerTitle.innerHTML = "Hello";
// headerTitle.innerHTML = "Good By"


// let element = document.getElementById("demo");
// if(element != null)
//   element.innerHTML = "Hello World"

// document.getElementById("btn").onclick = function() {
//     alert("I'm alert")
// }

function myFunc() {
    let element= document.getElementById("demo")
    if(element.innerHTML == "Hello World"){
         element.innerHTML = "Hello Everyone!"
    }  else {
        element.innerHTML == "Hello "
    }
}