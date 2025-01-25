const vscode = require('vscode');

module.exports = function(context) {

    // 注册 HelloWord 命令
    context.subscriptions.push(vscode.commands.registerCommand('extension.sayHello', () => {
        vscode.window.showInformationMessage('Hello World! 你好，准备好拯救世界了么！');
    }));

};