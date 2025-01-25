const vscode = require('vscode');

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function(context) {

    console.log('扩展 “ vscode-plugin ” 已被激活!');

    // helloworld
    require('./registerCommand/helloword')(context);

    // 测试命令参数
    require('./registerCommand/test-command-params')(context);

    // 测试菜单按钮
    require('./registerCommand/test-menu')(context);

    // 代码提示
    require('./registerCommand/completion')(context);

};

/**
 * 插件被释放时触发
 */
exports.deactivate = function() {
    console.log('扩展 “ vscode-plugin ” 已被释放!')
};