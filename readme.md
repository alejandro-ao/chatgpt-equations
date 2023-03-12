# ChatGPT Equations

The ChatGPT Equations Chrome Extension is a tool that allows users to easily render equations in ChatGPT using LaTeX notation. The extension uses KaTeX, a fast and efficient LaTeX renderer, to ensure that equations are displayed accurately and quickly.

## Installation
To install the ChatGPT Equation Renderer Chrome Extension, follow these steps:

- Open Google Chrome and navigate to the Chrome Web Store.
- Search for "ChatGPT Equations" in the search bar.
- Click "Add to Chrome" to add the extension to your browser.
- Once the installation is complete, you will see the ChatGPT Equation Renderer icon in your browser's toolbar.

## Usage

To use the ChatGPT Equations Extension, simply open a ChatGPT conversation and click on the extension icon in the browser toolbar. This will open a popup with two buttons: "Prompt LaTeX" and "Render LaTeX".

Clicking "Prompt LaTeX" will request ChatGPT to use LaTeX notation for any equations in your responses. This will enable you to write equations using LaTeX notation directly in the chat box.

Once ChatGPT has understood that it has to use LaTeX notation for equations, click "Render LaTeX" to automatically render any mathematical expressions in your responses that use LaTeX notation. While this function is active, it will continue to render any new equations that appear in new ChatGPT responses.

Support
If you have any questions or issues with the ChatGPT Equation Renderer Chrome Extension, please contact us at support@chatgpt.com.


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd chatgpt-equations
```

Install dependencies

```bash
  npm install
```

Run the builder to create the content script

```bash
  npm run build-dev
```

Then load the extension in Chrome by navigating to chrome://extensions/ in your browser.
Enable Developer Mode by clicking the toggle switch in the top right corner of the page.
Click "Load unpacked" and select the root directory of the extension on your local machine.
Once you have loaded the extension locally, you can use it in the same way as the published version of the extension. Simply open a ChatGPT conversation and click on the extension icon in the browser toolbar to use the extension.


## License
The ChatGPT Equation Renderer Chrome Extension is licensed under the MIT License.



