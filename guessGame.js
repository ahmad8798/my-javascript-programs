/* given a three chances user have to guess the number.
 if he guess it correct the program terminates immediately by showing 
 you won  alert in browser.  otherwise program will continue untill he become out of chances*/
function guess() {
  let chances = 3;
  let guessNumber = 10;
  while (!chances==0) {
      let uin = prompt("guess the number: ");
    chances--;
    if (uin == guessNumber) {
      alert(`ola You won! your guess is correct,
        the guess number is ${guessNumber}`);
      chances = 0;
    } else {
      alert(`your guess is wrong,you left only ${chances} chances`);
    }
  }
}
guess();
