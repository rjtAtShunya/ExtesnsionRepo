
        fetch('data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        //  appendtomain(data);
            printValues(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
 
// Create a class for the element
class Square extends HTMLElement {
// Specify observed attributes so that
// attributeChangedCallback will work
static get observedAttributes() {
  return ['c', 'l'];
}

constructor() {
  // Always call super first in constructor
  super();

  const shadow = this.attachShadow({mode: 'open'});

  const div = document.createElement('div');
  const style = document.createElement('style');
  shadow.appendChild(style);
  shadow.appendChild(div);
}

connectedCallback() {
  console.log('Custom square element added to page.');
 
}

disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}

attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');

}
}

customElements.define('custom-square', Square);


function printValues(obj) {
console.log(obj)
// appendtomain(obj)
create(obj)
// obj = JSON.parse(JSON.stringify(obj))
for(var k in obj) {
  
    if(obj[k] instanceof Object) {
     console.log("kinddd: ",obj["kind"])
    //  var mainContainer = document.getElementById(obj[id]);
      // create(/obj)
      // appendtomain(obj)
        printValues(obj[k]);
        //  appendtomain(obj)
        //create(obj)
        //dta(obj[k])
    } else {
      console.log("hehe")
        // document.write(obj[k] + "<br>");
    };
}
};


function appendtomain(data){
localStorage.setItem('data', JSON.stringify(data));
    // console.log(data)
    var mainContainer = "";
    var data = JSON.parse(localStorage.getItem('data'));
    console.log(data)
    if ( mainContainer == ""){
       mainContainer = document.getElementById("body");}
      else{
        mainContainer = document.getElementById(data["kind"])
      }
      // for (var i = 0; i < data.length; i++) {
        
         element = document.createElement(data["kind"]);
        
          element.innerHTML =   data["value"] ;
         
          // console.log("----d>",data[i].value[i])
          
          mainContainer.appendChild(element);
          document.getElementsByTagName(data["kind"])[0].setAttribute("id", data["id"]); 
          console.log("daad: ",data["id"]+","+data["style"])
          document.getElementById(data["id"]).style =  data["style"];
        //  element.appendChild(e)
          // var child = document.createElement(data[i].child[i].kind);
          // child.innerHTML =   data[i].child[i].value ;
          // element.appendChild(child);
          // document.getElementsByTagName(data[i].kind)[0].setAttribute("id", data[i].id); 
          // console.log(data[i].child[i].kind)
          // document.getElementById(data[i].id).style =  data[i].style;
          
      // }
    
}


function create(obj) {

    
      var mainContainer = document.getElementById(obj["id"]);
      // for (var i = 0; i < data.length; i++) {
         var element = document.createElement(obj["kind"]);
          element.innerHTML =   obj["value"] ;
         
        //  console.log("----d>",data[i].value[i])
          
          mainContainer.appendChild(element);
          document.getElementsByTagName(obj["kind"])[0].setAttribute("id", obj["id"]); 
          // console.log(data[i].child[i].kind)
          document.getElementById(obj["id"]).style =  obj["style"];
          // var child = document.createElement(data[i].child[i].kind);
          // child.innerHTML =   data[i].child[i].value ;
          // element.appendChild(child);
          // document.getElementsByTagName(data[i].kind)[0].setAttribute("id", data[i].id); 
          // console.log(data[i].child[i].kind)
          // document.getElementById(data[i].id).style =  data[i].style;
          
      // }
    }

function create(data) {
localStorage.setItem('data', JSON.stringify(data));
// console.log(data)
var data = JSON.parse(localStorage.getItem('data'));
console.log(data)

  var mainContainer = "";
  for (var i = 0; i < data.length; i++) {
    if ( mainContainer == ""){
      mainContainer = document.getElementById("body");}
     else{
       mainContainer = document.getElementById(data[i].kind)
     }
      var element = document.createElement(data[i].kind[i]);
      element.innerHTML =   data[i].value ;
     
      // console.log("----d>",data[i].value[i])
      
      mainContainer.appendChild(element);
      document.getElementsByTagName(data[i].kind[i])[0].setAttribute("id", data[i].id); 
      // console.log(data[i].child[i].kind)
      document.getElementById(data[i].id).style =  data[i].style;
      // var child = document.createElement(data[i].child[i].kind);
      // child.innerHTML =   data[i].child[i].value ;
      // element.appendChild(child);
      // document.getElementsByTagName(data[i].kind)[0].setAttribute("id", data[i].id); 
      // console.log(data[i].child[i].kind)
      // document.getElementById(data[i].id).style =  data[i].style;
      
  }
}
// // populate the array


//       for (i in data) {
//         data = JSON.parse(JSON.stringify(data[i]));
//     console.log("data is: ",data.child)  
//     for(j in data.child){
//       var child1 = JSON.parse(JSON.stringify(data.child[j]));
//       console.log("child kind is: ", child.kind);
//       var childElement = document.createElement(child1.kind);
//       childElement.innerHTML =   child1.value ;
//       console.log("data is: ",child1.child)  
 
//       // console.log("----d>",data[i].value[i])
//       console.log("data is: ",child.value)  
//       element.appendChild(childElement);
//       document.getElementsByTagName(child1.kind)[0].setAttribute("id", child1.id); 
//       // console.log(data[i].child[i].kind)
//       document.getElementById(child1.id).style = child1.style;

  

//       }

//     }  

//     for(k in child.child){
//       child2 = JSON.parse(JSON.stringify(child.child[j]));
//       console.log("child2 kind is: ", child2);
//         }
//       // for(j in child.child){
//       //   child2 = JSON.parse(JSON.stringify(child.child[j]));
//       //   console.log("child2 kind is: ", child2.kind);
//       //   // var childElement = document.createElement(child.kind);
//       //   // childElement.innerHTML =   child.value ;
//       //   // console.log("data is: ",child.value)  
   
//       //   // // console.log("----d>",data[i].value[i])
//       //   // console.log("data is: ",child.value)  
//       //   // element.appendChild(childElement);
//       //   // document.getElementsByTagName(child.kind)[0].setAttribute("id", child.id); 
//       //   // // console.log(data[i].child[i].kind)
//       //   // document.getElementById(child.id).style = child.style;
//       // }

//       //   // var child1 = document.createElement(data.child[i].kind[j]);
//       //   // child1.innerHTML =   data.child[i].value[j] ;
     
//       //   //   // console.log("----d>",data[i].value[i])
      
//         //   element.appendChild(child1);
//         //   document.getElementsByTagName(data.child[i].kind[j])[0].setAttribute("id",  data.child[i].id[j]); 
//         //   // console.log(data[i].child[i].kind)
//         //   document.getElementById(data.child[i].id[j]).style =  data.child[i].style[j];
  
  
//         // for (j in myObj.cars[i].models) {
//         //   x += myObj.cars[i].models[j] + "<br>";
//         // }

//   }