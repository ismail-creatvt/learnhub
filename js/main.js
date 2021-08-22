const items = document.querySelectorAll(".item");

console.log(items);
// Higher Order Function
// it is a function that accepts another
// functions as an argument or returns a function as a value
items.forEach((item) => {
  item.onclick = () => {
    handleSelection(item);
  };
  item.onkeypress = (e) => {
    if (e.charCode === 13) {
      handleSelection(item);
    }
  };
});

function handleSelection(item) {
  // When the user clicks on this item, then this function will be called
  resetSelection();
  item.classList.add("selected");
}

function resetSelection() {
  items.forEach(function (item) {
    item.classList.remove("selected");
  });
}
