function generatePassword() {
  const length = parseInt(document.getElementById("password-length").value);
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeSpecial = document.getElementById("include-special").checked;
  const excludeChars = document.getElementById("exclude-chars").value;

  const password = createPassword(length, includeUppercase, includeLowercase, includeSpecial, excludeChars);
  document.getElementById("password-result").value = password;
}

function createPassword(length, includeUppercase, includeLowercase, includeSpecial, excludeChars) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!@#$%^&*()_-+=<>?/{}[];:'`~|";
  const numberChars = "0123456789";
  let availableChars = "";

  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  if (includeSpecial) {
    availableChars += specialChars;
  }
  availableChars += numberChars;

  let finalChars = "";
  for (let i = 0; i < availableChars.length; i++) {
    if (!excludeChars.includes(availableChars[i])) {
      finalChars += availableChars[i];
    }
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += finalChars[Math.floor(Math.random() * finalChars.length)];
  }

  return password;
}

document.getElementById("generate").addEventListener("click", generatePassword);


