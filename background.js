chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({ text: "OFF", });
  chrome.action.setBadgeBackgroundColor({ color: "#f44336" });
});

// async function getCurrentTab() {
//   let queryOptions = { active: true, lastFocusedWindow: true };
//   // `tab` will either be a `tabs.Tab` instance or `undefined`.
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

// chrome.action.onClicked.addListener(async (tab) => {
//   const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//   const nextState = prevState === 'ON' ? 'OFF' : 'ON'

//   await chrome.action.setBadgeText({
//     tabId: tab.id,
//     text: nextState,
//   });

//   if (nextState === "ON") {
//     await chrome.tabs.sendMessage(tab.id, {
//       message: "extension_on",
//       tabId: tab.id,
//     });
//   }
//   if (nextState === "OFF") {
//     await chrome.tabs.sendMessage(tab.id, {
//       message: "extension_off",
//       tabId: tab.id,
//     });
//   }
// });

