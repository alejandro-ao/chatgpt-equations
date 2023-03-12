chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({ text: "OFF", });
  chrome.action.setBadgeBackgroundColor({ color: "#f44336" });
});
