function generatePassword() {
  const length = parseInt(document.getElementById("password-length").value);
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeSpecial = document.getElementById("include-special").checked;
  const excludeChars = document.getElementById("exclude-chars").value;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!@#$%^&*()_+{}|:<>?[];',./";
  const numberChars = "0123456789";

  let availableChars = numberChars;

  if (includeUppercase) {
    availableChars += upperChars;
  }
  if (includeLowercase) {
    availableChars += lowerChars;
  }
  if (includeSpecial) {
    availableChars += specialChars;
  }

  availableChars = availableChars
    .split("")
    .filter((char) => !excludeChars.includes(char))
    .join("");

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  document.getElementById("password-result").value = password;
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);

