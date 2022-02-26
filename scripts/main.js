// Cash
let passwordArea = document.querySelector("#passwordArea"),
  passwordLength = document.querySelector("#passwordLength"),
  passwordCount = document.querySelector("#passwordCount"),
  upperCase = document.querySelector("#upperCaseLetter"),
  lowerCase = document.querySelector("#lowerCaseLetter"),
  numbers = document.querySelector("#arrayOfNumbers"),
  generate = document.querySelector("#generate"),
  validLetters = [],
  allLetters = {
    upperCaseLetter: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    lowerCaseLetter: [..."abcdefghijklmnopqrstuvwxyz"],
    arrayOfNumbers: [..."1234567890"],
  };

// Set Password Valid Length
passwordLength.addEventListener(
  "input",
  () => (passwordCount.innerHTML = passwordLength.value)
);
// Get Valid Letters From All Letters To Valid Letters
[lowerCase, upperCase, numbers].forEach((arrayOfLetters) => {
  // On Change  On The Check Boxes
  arrayOfLetters.addEventListener("change", (e) => {
    // Clear Valid Letters Array
    validLetters.splice(0, validLetters.length);
    // Get Just Check Boxes Equal To True
    [lowerCase, upperCase, numbers].filter((el) => {
      el.checked === true ? validLetters.push(...allLetters[el.id]) : false;
    });
  });
});

generate.addEventListener("click", () => {
  // Check If The Valid Letters Array Has Values Or No
  if (validLetters.length === 0)
    // No Values
    passwordArea.innerHTML = "Please Choose Valid Letters";
  else {
    // There Are Values
    let password = []; // To Save Values On This Array To Set Them To The Password Area
    // For Loop To Get Values Form Valid Letters Array To Password Array
    for (let i = 0; i < passwordLength.value; i++) {
      password.push(
        validLetters[Math.floor(Math.random() * validLetters.length)]
      );
      // Set The Password
      passwordArea.innerHTML = password.join("");
    }
  }
});
