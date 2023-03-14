# ChatGPT Equation Renderer

The ChatGPT Equation Renderer Chrome Extension is a tool that allows users to easily render equations in ChatGPT using LaTeX notation. The extension uses KaTeX, a fast and efficient LaTeX renderer, to ensure that equations are displayed accurately and quickly.

## Installation (not in Chrome Store yet...)
To install the ChatGPT Equation Renderer Chrome Extension, follow these steps:

- Select the branch "build"
- Download the "extension" folder (it contains the already rendered extension) and place it somewhere safe
- Open Chrome, enable developer tools (upper right) and click on "Load unpacked"
- Select the extension folder that you downloaded
- You should be good to go


## Usage

To use the ChatGPT Equation Renderer Extension, simply open a ChatGPT conversation and click on the extension icon in the browser toolbar. This will open a popup with two buttons: "Prompt LaTeX" and "Render LaTeX".

Clicking "Prompt LaTeX" will request ChatGPT to use LaTeX notation for any equations in your responses. This will enable you to write equations using LaTeX notation directly in the chat box.

Once ChatGPT has understood that it has to use LaTeX notation for equations, click "Render LaTeX" to automatically render any mathematical expressions in your responses that use LaTeX notation. While this function is active, it will continue to render any new equations that appear in new ChatGPT responses.


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

- Then load the extension in Chrome by navigating to chrome://extensions/ in your browser.
- Enable Developer Mode by clicking the toggle switch in the top right corner of the page.
- Click "Load unpacked" and select the root directory of the extension on your local machine.
- Once you have loaded the extension locally, you can use it in the same way as the published version of the extension. 
- Simply open a ChatGPT conversation and click on the extension icon in the browser toolbar to use the extension.

## Contributing
Contributions to the ChatGPT Equation Renderer Chrome Extension are welcome and greatly appreciated! If you would like to contribute to the project, please follow these steps:

- Fork the repository on GitHub.
- Create a new branch for your contribution.
- Make your changes and commit them to your branch.
- Submit a pull request to the main repository.
Please ensure that your code adheres to the coding standards used in the project and includes tests where applicable. Also, be sure to provide a clear and detailed description of your changes in your pull request.

Thank you for your interest in contributing to the ChatGPT Equation Renderer Chrome Extension!


## License
The ChatGPT Equation Renderer Chrome Extension is licensed under the MIT License.



