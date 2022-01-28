/* 

To make the extension future proof and to learn about jq,
the extension is driven by a json-able structure.

jq will transform json data resulting from queries to this driver 
structure. So far it uses only a duckduckgo instant answer disambiguation API

https://duckduckgo.com/api

https://duckduckgo.com/?q=apple&ia=meanings&atb=v1-1

 */
import * as vscode         from 'vscode'
import fetch, { Response } from 'node-fetch'
import { run }             from 'node-jq'



const duckduckgo_disambiguation_filter = '[ .RelatedTopics[].Name ]'
// const jsonPath = '/path/to/bulbasaur.json'
const jq_string_options = { input: "json" }

function node_jq(filter: string, jsonPath:string, options: object) {
	run(filter, jsonPath, options)
	  .then((output: object|string) => {
	    console.log(output)})
		.catch((err :object) => {
			console.error(err)
			// Something went wrong...
		})}

export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-sample" is now active!');

	const disposable = vscode.commands.registerCommand('extension.helloWorld', async () => {

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
		let url : string = "https://api.duckduckgo.com/?q=apple&format=json&pretty=1&atb=v1-1"
		let response : Response   = await fetch(url)
		// const data = await response.text();
		const data = await response.json();
		console.log(data)
		// node_jq(duckduckgo_disambiguation_filter, data, { input: "json"})



	});

	context.subscriptions.push(disposable);
}
