const vscode = require('vscode');
module.exports = function(context) {

    context.subscriptions.push(vscode.commands.registerCommand('extension.demo.testMenuShow', () => {
        vscode.window.showInformationMessage(`这是一个 按钮, 被点击了~ ？`);
    }));

};