// DOM - Document object module is a representation of a webpage html structure 
// it allows javascript to access modify and update elements on the page

// SELECTING ELEMENTS
const container = document.getElementById('container')  //This selects the container div by accessing its ID.
const title = document.getElementById('title') //selects the title by accessing its iD
const button =  document.getElementById('button') //selects the ID by accessing its ID
const ulQuery = document.querySelector('ul') //selects elements based on the specified     
const list = document.querySelectorAll('ul')  //Returns an array containing all the ul elements in the html document
const sameUlClass = document.getElementsByClassName('list') //Returns an array containing all the elements with the class specified


/**********************************/
// IGNORE THIS///just testing out some stuff
const ulClass=list[0]
const ulId=list[1]
const ulTag=list[2]

console.log(ulTag)
console.log(container,title,list)
/**********************************/

/*************************************** */
// APPLYING STYLE TO HTML ELEMENTS BY ACCESSING CSS THROUGH JAVASCRIPT

// After selecting an element , youll get access to properties related to the element.container
// use the style method to access an elements styling (CSS)
// eg:
//        ELEMENT.style.display = 'flex';
// the above example will set the ELEMENT display propery to flex, enabaling you to use flexbox on the element
// 
//See the examples below

container.style.backgroundColor = 'red'
container.style.width = '50vw'
container.style.height = '50vh'
container.style.margin = '0px auto'    
container.style.padding = '30px'    


// You can also set multiple styling to an Element in an instance.
// The below code achieves the same styling as the one AnimationPlaybackEvent, only this time we only specify the target element once.

container.style='background: red; width:50vw; height:fit-content; margin: 0px auto; padding:0px 0px 20px;'
/**********************************/

/*************************************** */

// ADDING AND REMOVING ELEMENTS
const newElement = document.createElement('h2') //creates an h2 element
newElement.textContent = 'NEW ELEMENT' //sets the elements text to NEW ELEMENT
container.appendChild(newElement) // adds newElement to the body of the html

//newElement.remove()            // --------------------//removes the newElemnt from the html document
container.removeChild(newElement) //achives the same outcome as remove element , only this time we accessed the parent element (container) in order to remove the child (newElement).

/**********************************/

/*************************************** */


// just an example of an event listener creating an element and adding it to the html document
button.addEventListener('click',()=>{

    let li = document.createElement("li") //create element
    li.innerText = "zero sufuri"              //set the text
    ulTag.appendChild(li)                   // append it to the ul element
})
// END //

