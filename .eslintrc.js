module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        es6: true,
        browser: true
    },
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": 'module',
        "ecmaFeatures": {
            "globalReturn": true,
            "experimentalObjectRestSpread": true
        }
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        'import/no-unresolved': 0,
        //缩进
        'indent': ['error', 4],
        //结尾禁用逗号
        'comma-dangle': 0,
        //允许使用匿名函数
        'func-names': 0,
        //不启用强制的ES6对象简写法
        'object-shorthand': 0,
        //允许随意使用require,无需提前全局require
        'global-require': 0,
        //不强制对象属性名使用引号包裹
        'quote-props': 0,
        //允许使用console
        'no-console': 0,
        //可以使用未定义变量（import引入的会被认为未定义,所以开启）
        'no-undef': 0,
        //禁用代码块前必须保留空格
        'space-before-blocks': 0,
        //禁用键名后需要保留空格
        'key-spacing': 0,
        'no-alert': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
