const katex = require("katex");

class KatexGPT {
  constructor() {
    this.observer = new MutationObserver(() => {
      setTimeout(() => this.renderKatex(), 1000);
    });
    this.handleRequest();
  }

  observer = null;

  handleRequest() {
    chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
      console.log("request", request);

      if (request == "extension_on") {
        console.log("extension_on");
        this.observer.observe(document.body, { childList: true, subtree: true });
      }
      if (request == "extension_off") {
        console.log("extension_off");
        this.observer.disconnect();
      }
    })
  }

  instructions() {
    var instructions = `
      From now on, if you need to write a mathematical expression, use katex notation and follow these rules:
      1. If it is a block equation, wrap it with double dollar signs. Like this:
      $$e=mc^{2}$$
      2. If it is an inline equation, use the two backslash and parenthesis notation of katex, like this: \\(e^{i \\\pi}-1=0\\).
      Now give me an example of both cases to see if you understood correctly.
    `;

    var inputElement = document.querySelector("textarea");
    inputElement.value = instructions;
    document.querySelector("textarea~button").click();
  }

  renderKatex() {
    const elements = Array.from(document.querySelectorAll("p"));
    const katexElements = elements.filter(element => element.innerHTML.includes("$$"))
    katexElements.forEach(element => {
      if (!element.innerHTML.includes("$$")) return;
      const expression = element.innerHTML;
      const sliced = expression.slice(2, -2).replace("/\\/g", "\\\\")

      const renderedExpression = katex.renderToString(sliced);
      element.innerHTML = renderedExpression;
      element.style.textAlign = "center";
      element.style.fontSize = "1.05em";
    });
  }

}

const katexGPT = new KatexGPT();