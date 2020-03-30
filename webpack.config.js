const path=require("path")
const HTMLWebpackPlugin=require("html-webpack-plugin");

module.exports={
    entry:{
        app:path.join(__dirname,"src","index.js")
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"index_bundle.js",
        // publicPath:"/dist/"
    }, 
   
   module:{
        rules:[
            {
                test:/\.png$/,
                loader:"file-loader?name=[path][name].[ext]",
            },
            {
                test:/\.js$/,
                loader:"babel-loader"
            }
            
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
          template:path.join(__dirname,"public","index.html"),
          filename:"index_bundle.html"  
        })
    ]
}