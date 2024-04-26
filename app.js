const CheckButton = document.getElementById("check-btn");
const EntryInput = document.getElementById("entry");
const Panel = document.getElementById("panel");
const RedPanel = document.getElementById("no");
const BluePanel = document.getElementById("yes");

/// empty entry | one vowel | Limit word ///

function ReveseAndPlindromeHandler() {
  // reset color of palindrome checks
  BluePanel.style.backgroundColor = "white";
  RedPanel.style.backgroundColor = "white";

  //making the entry word reverse
  const EntryInputValue = EntryInput.value;
  const Revesed = EntryInputValue.split("").reverse().join("").toLowerCase();
  Panel.innerText = Revesed;

  // check is word palindrome or not
  if (Revesed == EntryInputValue) {
    BluePanel.style.backgroundColor = "blue";
  } else {
    RedPanel.style.backgroundColor = "red";
  }
}

CheckButton.addEventListener("click", ReveseAndPlindromeHandler);
