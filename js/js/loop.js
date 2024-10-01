// // let myBoolean = confirm("Ok === True\nCancel === False ");
// // console.log(myBoolean);

// let userName = prompt("Please enter name:");
// if (userName) {
//   console.log(userName);
// } else {
//   console.log("did't enter name");
// }
// // use <var>.trim to check for white space

let playGame = confirm("Shall we play rock, paper and scissors");

if (playGame) {
  //play game

  let playerChoice = prompt("Please enter rock, paper or scissors");

  //check for wrong error inputs:
  if (playerChoice) {
    let playerChoice = playerChoice.trim().toLowerCase();

    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "scissors"
          : "paper";

      console.log(computer);

      result =
        playerChoice === computer
          ? "Tie"
          : playerChoice === "rock" && computer === "scissors"
          ? "Player: ${playerChoice} \n Computer:{computerChoice} \n You win!"
          : playerChoice === "paper" && computer === "scissors"
          ? "Player: ${playerChoice} \n Computer:{computerChoice} \n Computer win!"
          : playerChoice === "scissors" && computer === "rock"
          ? "Player: ${playerChoice} \n Computer:{computerChoice} \n Computer win!"
          : "Player: ${playerChoice} \n Computer:{computerChoice} \n You win!";
    }
  } else {
    alert("Did not input any");
  }
} else {
  alert("Ok maybe next time");
}
