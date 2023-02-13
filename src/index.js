const katex = require("katex");

class KatexGPT {
  constructor() {
    this.handleRequest();
    // this.instructions();
  }

  handleRequest() {
    chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
      console.log("request", request);

      if (request == "extension_on") {
        console.log("extension_on");
        this.renderKatex();
      }
      if (request == "extension_off") {
        console.log("extension_off");
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
    const elements = document.querySelectorAll("*");
    elements.filter(
      element => element.innerHTML.includes("\\(") ||
        element.innerHTML.includes("\\)") ||
        element.innerHTML.includes("$$")
    ).forEach(element => {
      const expression = element.innerHTML;
      const renderedExpression = katex.renderToString(expression);
      element.innerHTML = renderedExpression;
    });
  }
}

const mathjax = new KatexGPT();