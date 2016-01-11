module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			
			//{ test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'}
            //{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },

			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
    }
};



