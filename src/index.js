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
    chrome.runtime.onMessage.addListener(async (request, sender, response) => {
      console.log(request);

      if (request.action == "PROMPT") {
        this.submitPrompt()
      }
      if (request.action == "RENDER") {
        this.renderKatex();
        this.observer.observe(document.body, { childList: true, subtree: true });
      }
      if (request.action == "STOP_RENDER") {
        this.observer.disconnect();
      }
    })
  }

  submitPrompt() {
    const prompt = "From now on, if you need to write a mathematical expression, use katex notation and follow these rules:\n1. If it is a block equation, display it in a single P element and wrap it with double dollar signs like this:\n\n$$e=mc^{2}$$\n\n2. If it is an inline equation, use the two backslash and parenthesis notation of katex, like this: \\(e^{i \\\pi}-1=0\\).\n\nCan you give me an example of a block equation to see that you understand?";

    const inputElement = document.querySelector("textarea");
    inputElement.value = prompt;
    document.querySelector("textarea~button").click();
  }

  renderKatex() {
    const elements = Array.from(document.querySelectorAll("p"));
    const katexElements = elements.filter(element => element.innerHTML.includes("$$"))
    katexElements.forEach(element => {
      // todo: return if katex is not the only thing in p element
      if (!element.innerHTML.startsWith("$$")) return;
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