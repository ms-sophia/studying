// * DOM - Document object model

// * USING getELementBy<id|class>
const view1 = document.getElementById("view1");
console.log(view1);
const views = document.getElementsByClassName("view");
console.log(views);
// ** html collection has elements

// * USING querySelector
// ** # - for id
// ** . - for class
const view2 = document.querySelector("#view2");
console.log(view2);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);
// ** node list has nodes, it is everything

// * CAN CHANGE STYLES
view1.style.display = "flex";
view2.style.display = "flex";

// * CREATING ANOTHER SELECTOR ON PREV SELECTOR
// ** get elements by tag name
const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

// * GETTING SPECIFIC SELECTOR
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

// * ALTERING PAGE
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "darkblue";
  // evenDivs[i].style.width = "200px";
  // evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World";
const navBar = document.querySelector("nav");
// ** will change html using innerHTML, overrides
navBar.innerHTML = `<h1>Hello</h1> <p>This should align right</p>`;
console.log(navBar);
navBar.style.justifyContent = "space-between";

// * NAVIGATING DOM TREE
// ** crawls the page
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousElementSibling);

// * ADDING OR REMOVING FROM THE PAGE
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flex.direction = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
    // ** remove a node
    view2.lastChild.remove();
}

// * CREATED A NEW ELEMENT
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    
    // ** this helps show it to the page since it is appended to the parent element
    parent.append(newDiv);

}

// createDivs(view2, 10);
for (let i = 1; i <= 12; i++){
    createDivs(view2, i);
}