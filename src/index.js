const katex = require("katex");

class KatexGPT {
  constructor() {
    this.handleRequest();
    this.enableObserver();
  }

  enableObserver() {
    const rootElement = document.querySelector("body"); // Replace "root" with your own root element ID

    const observer = new MutationObserver((mutationsList, observer) => {
      this.createCopyEquationButtons();
    });

    const observerConfig = {
      childList: true,
      subtree: true,
    };

    observer.observe(rootElement, observerConfig);

  }

  createCopyEquationButtons() {
    const equations = Array.from(document.querySelectorAll(".katex"));
    equations.forEach(equation => {
      if (equation.querySelector("button")) return;
      const button = document.createElement("button");

      button.innerHTML = "Copy LaTeX";
      button.classList.add("copy-equation");
      button.addEventListener("click", () => {
        const text = equation.querySelector(".katex-mathml annotation").innerHTML;
        navigator.clipboard.writeText(text);
      });

      equation.appendChild(button);
    });
  }

  handleRequest() {
    chrome.runtime.onMessage.addListener(async (request, sender, response) => {
      if (request.action == "PROMPT") {
        this.submitPrompt()
      }
    })
  }

  submitPrompt() {
    const prompt = "From now on, if you need to write a mathematical expression, use katex notation and follow these rules:\n1. If it is a block equation, display it in a single P element and wrap it with double dollar signs like this:\n\n$$e=mc^{2}$$\n\n2. If it is an inline equation, use the two backslash and parenthesis notation of katex, like this: \\(e^{i \\\pi}-1=0\\).\n\nCan you give me an example of a block equation to see that you understand?";

    const inputElement = document.querySelector("textarea");
    inputElement.value = prompt;
    const submitButton = document.querySelector("textarea~button");
    submitButton.disabled = false;
    submitButton.click();
  }

  renderKatex() {
    const elements = Array.from(document.querySelectorAll("p"));
    const katexElements = elements.filter(element => element.innerHTML.includes("$$"))
    katexElements.forEach(element => {
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