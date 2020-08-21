
        fetch('data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
              const superHeroes = data[0];
              populateHeader(superHeroes);
              showHeroes(superHeroes);
              for (var i =1; i<data.length;i++){
              // const hero2 = data[1]; 
              var hero = data[i]
              
              populatesection(hero)
              showHeroes(hero);
              // populatesection(hero3)
              // showHeroes(hero3);
              }
        
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
     
            const header = document.querySelector('header');
            const section = document.querySelector('section');
        
           
        var myPara;
            function populateHeader(jsonObj) {
            
              const myH1 = document.createElement('h1');
              myH1.textContent = jsonObj['elementName'];
              header.appendChild(myH1);
        
              myPara = document.createElement(jsonObj['element']);
              myPara.style =  jsonObj['style']
              
              header.appendChild(myPara);
            }
            function populatesection(jsonObj) {
            
              const myH1 = document.createElement('h1');
              myH1.textContent = jsonObj['elementName'];
              section.appendChild(myH1);
              console.log("dddd-->",jsonObj['element'])
              myPara = document.createElement(jsonObj['element']);
              myPara.style =  jsonObj['style']
              myPara.setAttribute("class",jsonObj['class'])
              section.appendChild(myPara);
            }
        
            function showHeroes(jsonObj) {
              const heroes = jsonObj['members'];
            
              for(let i = 0; i < heroes.length; i++) {
                console.log(heroes[i].element +","+heroes[i].childElement)
                const myArticle = document.createElement('article');
                const myH2 = document.createElement(heroes[i].element);
                myH2.style = heroes[i].style
                myH2.setAttribute("class",heroes[i].class)
                const myPara1 = document.createElement(heroes[i].childElement);
                myPara1.setAttribute("class",heroes[i].ChildClass)
                myPara1.style = heroes[i].styleChild
                var childElement = heroes[i].childElement;
                // const myPara2 = document.createElement(heroes[i].childElement);
                // const myPara3 = document.createElement(heroes[i].childElement);
                 const myList =myH2
        

                // myPara2.textContent = 'Age: ' + heroes[i].age;
                // myPara3.textContent = 'Superpowers:';
        
                const superPowers = heroes[i].values;
                for(let j = 0; j < superPowers.length; j++) {
                  const listItem = document.createElement(childElement);
                  myPara1.textContent = superPowers[j];
                  myList.appendChild(listItem);
                }
        
                //myArticle.appendChild(myH2);
                myH2.appendChild(myPara1);
                // myArticle.appendChild(myPara2);
                // myArticle.appendChild(myPara3);
                myArticle.appendChild(myList);
                
                // myPara.appendChild(myList);
                myPara.appendChild(myArticle);
              }
            }




          
        
            