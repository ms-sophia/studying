// * HIGHER ORDER FUNCTIONS
// ** it is higher order function if it does the following:
// ** takes one or more function as an argument (parameter)
// ** returns a function as the result

import { posts } from "./posts.js";

// * 1) FOR EACH
posts.forEach(post => {
    console.log(post);
});

console.clear()

// * 2) FILTER
// ** needs to setup an array because it returns an array
const filteredPosts = posts.filter(post => {
    return post.userId === 1;
})
console.log(filteredPosts);

// * 3)MAP
// ** needs to setup an array because it returns an array
const mappedPosts = filteredPosts.map(post => {
    return post.id * 10;
});

console.log(mappedPosts)