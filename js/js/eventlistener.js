//  * EVENT LISTENERS
// ** Syntax: addEventLister("click",function,useCapture)

// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// const doSomething = () => {
//   alert("doing something");
// };

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// * Using an anonymous function
// ** method 1:
// h2.addEventListener("click", (e) => {
//     console.log(e.target);
//     e.target.textContent = 'click';
// });

// ** method 2:
// h2.addEventListener("click", function (e) {
//     console.log(e.target);
//     e.target.textContent = "click";
// })

// * SAFE WAY TO START IN EDITING DOM PAGE
// document.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState == "complete") {
//       console.log("readyState complete");
//       initApp() // ** to kick off the program, could start eventlisteners
//   }
// });

// const initApp = () => {
//     const view = document.querySelector("#view2");
//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");

//     view.addEventListener("click", (e) => {
//         (e) => {
//             // this allows to stop from bubbling
//             e.stopPropagation();
//         }
//         view.style.backgroundColor = "purple";
//     }, true)

//     div.addEventListener("click", (e) => {
//         div.style.backgroundColor = "blue";
//     }, true)

//     h2.addEventListener("click", (e) => {
//         e.target.textContent = "clicked";
//     },true);
// };

// document.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState == "complete") {
//     console.log("readyState complete");
//     initApp(); // ** to kick off the program, could start eventlisteners
//   }
// });

// * EVEN TARGET
// document.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState == "complete") {
//     console.log("readyState complete");
//     initApp();
//   }
// });
// const initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");

//   view.addEventListener(
//     "click",
//     (e) => {
//       (e) => {
//       };
//       e.target.style.backgroundColor = "purple";
//     },
//     false
//   );

//   div.addEventListener(
//     "click",
//     (e) => {
//       e.target.style.backgroundColor = "blue";
//     },
//     false
//   );

//   h2.addEventListener(
//     "click",
//     (e) => {
//       e.target.textContent = "clicked";
//     },
//     false
//   );
// };

// * HOW TO ADD CLASS, other event listeners
// document.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState == "complete") {
//     console.log("readyState complete");
//     initApp();
//   }
// });
// const initApp = () => {
//   const view = document.querySelector("#view2");
//   const div = view.querySelector("div");
//   const h2 = div.querySelector("h2");

//   view.addEventListener(
//     "click",
//     (e) => {
//       // view.classList.add("purple");
//       // view.classList.remove("darkblue");

//       view.classList.toggle("purple");
//       view.classList.toggle("darkblue");
//     },
//     false
//   );

//   div.addEventListener(
//     "click",
//     (e) => {
//       div.classList.toggle("blue");
//       div.classList.toggle("black");
//     },
//     false
//   );

//   h2.addEventListener(
//     "click",
//     (e) => {
//       const mytext = e.target.textContent;
//       mytext === "my 2nd view"
//         ? (e.target.textContent = "Clicked")
//         : (e.target.textContent = "my 2nd view");
//     },
//     false
//     );

//     // ** mouseover
//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover", (e) => {
//         e.target.classList.add("height100");
//         // e.target.classList.toggle("height100");
//     });
//     // ** mouseover
//     nav.addEventListener("mouseout", (e) => {
//         e.target.classList.remove("height100");
//     })

// };

// * FOR FORMS
document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (e) => {
    // ** if removed will reload too fast
    e.preventDefault();
    console.log("submit event");
  });
};
