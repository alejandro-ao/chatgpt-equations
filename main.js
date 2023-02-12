function instructions() {
  var instructions = `
    From now on, if you need to write a mathematical expression, 
    use katex notation and follow these rules:
    1. If it is a block equation, wrap it with double dollar signs. 
    Like this:
    $$e=mc^{2}$$
    2. If it is an inline equation, use the two backslash and 
    parenthesis notation of katex, like this: \\(e^{i \pi}-1=0\\).
    Now give me an example of both cases to see if you understood 
    correctly.
  `;

  var inputElement = document.querySelector("textarea");
  inputElement.value = instructions;
  document.querySelector("textarea~button").click();
}

function enabletex() {
  var timeout = null;
  var delay = 1000;

  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  document.head.appendChild(script);

  script.addEventListener('load', function () {
    var mathJaxConfig = {
      jax: ["input/TeX", "output/HTML-CSS"],
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true,
      },
      options: {
        ignoreHtmlClass: 'tex2jax_ignore',
        processHtmlClass: 'tex2jax_process'
      }
    };

    window.MathJax.config = mathJaxConfig;

    (function () {
      window.MathJax.typeset();
      var timeout = null;
      var delay = 1000;

      var observer = new MutationObserver(function () {

        timeout && clearTimeout(timeout);

        timeout = setTimeout(function () {
          window.MathJax.typeset();
        }, delay);

      });

      observer.observe(document.body, { childList: true, subtree: true });

    })();
  });
}