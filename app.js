const CheckButton = document.getElementById("check-btn");
const EntryInput = document.getElementById("entry");
const Panel = document.getElementById("panel");
const RedPanel = document.getElementById("no");
const BluePanel = document.getElementById("yes");
const Message = document.getElementById("message");

function ShowMessage() {
  alert("WRONG INPUT");
}

function ReveseAndPlindromeHandler() {
  // reset color of palindrome checks
  BluePanel.style.backgroundColor = "white";
  RedPanel.style.backgroundColor = "white";

  const EntryInputValue = EntryInput.value;
  if (!EntryInputValue || EntryInputValue.length < 2) {
    ShowMessage();
  } else {
    //making the entry word reverse
    const Revesed = EntryInputValue.split("")
      .reverse()
      .join("")
      .trim()
      .toLowerCase();
    Panel.innerText = Revesed;

    // check is word palindrome or not
    if (Revesed == EntryInputValue) {
      BluePanel.style.backgroundColor = "blue";
    } else {
      RedPanel.style.backgroundColor = "red";
    }
  }
}

CheckButton.addEventListener("click", ReveseAndPlindromeHandler);
