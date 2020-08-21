
        fetch('data.json') //Fetch the json file data.json
            .then(function (response) {
                return response.json();  //returns a json response 
            })
            .then(function (data) {
              const superHeroes = data[0]; //superHero is the jsons navbar config 
              populateHeader(superHeroes); // populateHeader takes superHero(navbar config) as a parameter and creates navbar in header 
              showHeroes(superHeroes);
              //this function creates the elements inside the main element ie sidenavbar will have div ul li 
              //this function creates those elements and set the style and class to those elements
              for (var i =1; i<data.length;i++){ //loop to get the remaining json from the json array ie sidenavbar, card view and footer
              // const hero2 = data[1]; 
              var hero = data[i]// assign json to hero variable
              
              populatesection(hero) // populatesection takes hero(sidenavbar/cardview/footer) ad a parameter
                                    // and creates the elements in section tag
              showHeroes(hero); // showHeroes function puts the values in the created elements
              // populatesection(hero3)
              // showHeroes(hero3);
              }
        
            })
            .catch(function (err) { //cath the errors
                console.log('error: ' + err);
            });
     
            const header = document.querySelector('header'); //header variable have the header element selected by the querySelector(Javascripts own function) function
            const section = document.querySelector('section');//section variable have the section element selected by the querySelector(Javascripts own function) function
        
           
        var myPara;
            function populateHeader(jsonObj) { 
            //this function takes json object as a parameter and creates a nav bar in the header element
              const myH1 = document.createElement('h1');
              //myH1 element is just for the heading of the element created
              myH1.textContent = jsonObj['elementName']; 
              //myH1.textContent puts the name of the element into myH1 element
              header.appendChild(myH1);
              // header.appendchild appends the Name of the element to the header 
              myPara = document.createElement(jsonObj['element']);
              //myPara is the navbar element crated by taking jsonObj['element'] as a parameter jsonObj['element'] is the nav-bar elemetn
              myPara.style =  jsonObj['style']
              // myPara.style puts the style to the created nav bar
              
              header.appendChild(myPara);
              // header.appendChild appends the created navbar to the header
            }

            function populatesection(jsonObj) {
            //this cretated the remaing elements sidenavbar, cardview and footer 
              const myH1 = document.createElement('h1');
                //myH1 element is just for the heading of the element created
              myH1.textContent = jsonObj['elementName'];
              //myH1.textContent puts the name of the element into myH1 element
              section.appendChild(myH1);
              // section.appendchild appends the Name of the element to the header 
              console.log("dddd-->",jsonObj['element'])
              myPara = document.createElement(jsonObj['element']);
              //myPara are the parent elements crated by taking jsonObj['element'] as a parameter jsonObj['element'] are the sidenavbar/cardView/footer elements

              myPara.style =  jsonObj['style']
              // myPara.style puts the style to the created elements

              myPara.setAttribute("class",jsonObj['class'])
              // myPara.setAttribute sets the class of the created parent elements , 
              //jsonObj['class'] is the class of the element
              section.appendChild(myPara);
            }
        
            function showHeroes(jsonObj) {
              //this function creates the elements inside the main element ie sidenavbar will have div ul li 
              //this function creates those elements and set the style and class to those elements
              const heroes = jsonObj['members'];
            //hero is th child elements created inside the main elements
              for(let i = 0; i < heroes.length; i++) { //this loops iterate all the child elements,style and classes 
                                                       //and creates child elements
                console.log(heroes[i].element +","+heroes[i].childElement)
                const myArticle = document.createElement('article'); 
                //myArtical is the artical container for every child element
                const myH2 = document.createElement(heroes[i].element);
                //myH2 are the child Elements crated by taking heroes[i].element as a parameter jsonObj['element'] are the sidenavbar/cardView/footer elements

                myH2.style = heroes[i].style
              // myH2.style sets the style to the child elements created

                myH2.setAttribute("class",heroes[i].class)
                // myH2.setAttribute sets the class of the created child elements , 
              //heroes[i].class is the class of the child element
                const myPara1 = document.createElement(heroes[i].childElement);
              //myPara are the child elements crated by taking heroes[i].childElement as a parameter 
                myPara1.setAttribute("class",heroes[i].ChildClass)
               // myPara1.setAttribute sets the class of the created child elements 
              //heroes[i].ChildClass is the class of the child element

                myPara1.style = heroes[i].styleChild
                var childElement = heroes[i].childElement;
                // const myPara2 = document.createElement(heroes[i].childElement);
                // const myPara3 = document.createElement(heroes[i].childElement);
                 const myList =myH2
        

                // myPara2.textContent = 'Age: ' + heroes[i].age;
                // myPara3.textContent = 'Superpowers:';
        
                const superPowers = heroes[i].values;
                //superPowers varible have the values of child elements
                for(let j = 0; j < superPowers.length; j++) {
                  //this loop set the values of child elements
                  const listItem = document.createElement(childElement);
                  myPara1.textContent = superPowers[j];
                  //here the values of child elements is assigned to myPara1.textContent
                  myList.appendChild(listItem);
                  //this appends the valued to the child elements
                }
        
                //myArticle.appendChild(myH2);
                myH2.appendChild(myPara1);
                // child element is then appends to the subchild elements
                
                myArticle.appendChild(myList);
                //child elements appended to artical tag
                
                myPara.appendChild(myArticle);
                //child elements apppend to parent elements
              }
            }




          
        
            