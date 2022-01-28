
Developping my first vscode extension

## End Game

Verify and create link markup for markdown and pod files

Supported doc file : markdown and pod

The commands are

lint_repo :  
Verify that the links for doc files in the git repo are not dangling.
Propose to fix the dangling links.

lint_file :
same as lint_repo but for the current doc file

link_from_selection

Given a selection in a .markdown, .md or .pod file.
A link is interactively created .


![demo](demo.gif)

## VS Code API

### `vscode` module

- [`commands.registerCommand`](https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand)
- [`window.showInformationMessage`](https://code.visualstudio.com/api/references/vscode-api#window.showInformationMessage)

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)

## Running the Sample

- Run `npm install` in terminal to install dependencies
- Run the `Run Extension` target in the Debug View. This will:
	- Start a task `npm: watch` to compile the code
	- Run the extension in a new VS Code window
