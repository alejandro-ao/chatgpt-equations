document.getElementById("myButton").addEventListener("click", function () {
  chrome.runtime.sendMessage({ message: "button_clicked" });
});
