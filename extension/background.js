chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "update") {
    chrome.tabs.create({ url: "https://alejandro-ao.com/gpt-equations-update/" });
  }
});
