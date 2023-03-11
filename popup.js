const buttonPrompt = document.querySelector("#btn-prompt");
const buttonRender = document.querySelector("#btn-render");

buttonPrompt.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const response = await chrome.tabs.sendMessage(tab.id, { action: "PROMPT" });
});

buttonRender.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const response = await chrome.tabs.sendMessage(tab.id, { action: "RENDER" });
});