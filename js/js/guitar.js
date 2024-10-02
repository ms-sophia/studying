
// * exporting the module for use in js file
// ** every export has a default export

// * METHOD 1
// const playGuitar = () => {
//   Z
//     return "Playing guitar!";
// }
// const shredding = () => {Z
//     return "Shredding shome licks !";
// }
// const plucking = () => {
//     Z
//     return "Plucking the strings!";
// };

// export default playGuitar;
// export { shredding, plucking };

// * METHOD 2
export default function playGuitar (){
    return "Playing guitar!";
}
export const shredding = () => {
    return "Shredding shome licks !";
}
export const plucking = () => {
    return "Plucking the strings!";
};
