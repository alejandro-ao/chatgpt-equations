const buttonPrompt = document.querySelector("#btn-prompt");
const buttonRender = document.querySelector("#btn-render");

const tab = await getCurrentTab();

buttonPrompt.addEventListener("click", async () => {
  const response = await chrome.tabs.sendMessage(tab.id, { action: "PROMPT" });
});

async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}