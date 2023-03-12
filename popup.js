const buttonPrompt = document.querySelector("#btn-prompt");
const buttonRender = document.querySelector("#btn-render");

const tab = await getCurrentTab();
const currentState = await chrome.action.getBadgeText({ tabId: tab.id });
await updateButtonColor(currentState);

buttonPrompt.addEventListener("click", async () => {
  const response = await chrome.tabs.sendMessage(tab.id, { action: "PROMPT" });
});

buttonRender.addEventListener("click", async () => {
  const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  if (prevState === "OFF") {
    const response = await chrome.tabs.sendMessage(tab.id, { action: "RENDER" });
    await chrome.action.setBadgeText({ tabId: tab.id, text: "ON", });
    await chrome.action.setBadgeBackgroundColor({ color: "#4caf50" });
  }
  if (prevState === "ON") {
    const response = await chrome.tabs.sendMessage(tab.id, { action: "STOP_RENDER" });
    await chrome.action.setBadgeText({ tabId: tab.id, text: "OFF", });
    await chrome.action.setBadgeBackgroundColor({ color: "#f44336" });
  }
  const currentState = prevState === "ON" ? "OFF" : "ON";
  await updateButtonColor(currentState);
});

async function updateButtonColor(extensionStatus) {
  if (extensionStatus === "ON") {
    buttonRender.style.backgroundColor = "#DF2E38";
    buttonRender.innerHTML = "Stop Rendering";
  }
  if (extensionStatus === "OFF") {
    buttonRender.style.backgroundColor = "#343541";
    buttonRender.innerHTML = "Render Latex";
  }
};

async function getCurrentTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}