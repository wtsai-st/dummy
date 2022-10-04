const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    legacy_js: './src/legacy-js/index.js',
    main: './src/index.ts'
  },
  output: {
    library: {
        name: 'dummy',
        type: 'umd',
      },
  },
  plugins: [new CopyPlugin({
    patterns: [
      { from: "src/legacy-css", to: "." },
      { from: "src/legacy-html", to: "." },
    ],
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: 'css-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  externals: {
    react: 'react',
    knockout: 'knockout'
  }
};
