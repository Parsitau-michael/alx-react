const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'production',
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [
	  {
	    loader: 'file-loader',
            options: {
	      name: '[name].[ext]',
              outputPath: 'assets',
	    },
	  },
          {
	    loader: 'image-webpack-loader',
            options: {
	      mozjpeg: {
	        progressive: true,
                quality: 65,
	      },
	    },
	  },
	],
      },
    ]
  }
};
