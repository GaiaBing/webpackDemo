let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        hello:__dirname + '/src/js/hello.js',
        a:__dirname +'/src/js/a.js',
        b:__dirname +'/src/js/b.js',
        c:__dirname +'/src/js/c.js',
    },
    output:{
        path: __dirname + '/dist',
        filename: 'js/[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename:'aIndex.html',
            template:'index.html',
            inject:'body',//用来指定script标签插入的位置，默认body，
            title:'this is a.html',
            chunks:['hello','a']
        }),
        new htmlWebpackPlugin({
            filename:'bIndex.html',
            template:'index.html',
            inject:'body',//用来指定script标签插入的位置，默认body，
            title:'this is b.html',
            chunks:['b']
        }),
        new htmlWebpackPlugin({
            filename:'cIndex.html',
            template:'index.html',
            inject:'body',//用来指定script标签插入的位置，默认body，
            title:'this is c.html',
            chunks:['c']
        })
    ]


};
