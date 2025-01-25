const vscode = require('vscode');

/**
 * 自动提示实现，这里模拟一个很简单的操作
 * 键入一个字符时触发，在此阶段提供代码文本。接受vscode传入的当前文档（document）和当前光标位置（position），通过这两个参数获取当前行输入的文本
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 * @param {*} context 
 */
function provideCompletionItems(document, position, token, context) {
    const line = document.lineAt(position);

    // 只截取到光标位置为止，防止一些特殊情况
    const lineText = line.text.substring(0, position.character);
    
    // 简单匹配，只要当前光标前的字符串为`this.`都自动带出所有的依赖
    if(/(^|=| )\w+\.$/g.test(lineText)) {

        // 提示信息 集合
        const prompt = [
            'testxxxxx'
        ];

        return prompt.map(dep => {
            // vscode.CompletionItemKind 表示提示的类型
            return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Field);
        })
    }
}

/**
 * 光标选中 当前自动补全item 时触发动作，一般情况下无需处理
 * @param {*} item 
 * @param {*} token 
 */
function resolveCompletionItem(item, token) {
    return null;
}

module.exports = function(context) {
    // 注册代码建议提示，只有当按下“.”时才触发
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems,
        resolveCompletionItem
    }, '.'));
};