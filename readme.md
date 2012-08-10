This project tries to change the node.js sandbox-module to allow sandboxed code access to some predefined code from the global context.

Instructions:
After installing nodejs and running "npm install sandbox" in the appropriate directory from the Node.js command propt, replace lib/shovel.js and example/example.js with the files from the files-directory, and copy external.js to the lib-directory. Run "node example.js" from the example-directory for an example.

Add code to externalCode in external.js to give sandboxed code access.