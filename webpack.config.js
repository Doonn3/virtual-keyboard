const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  entry: path.resolve(__dirname, "src", "./main.js"), // entry point

  // entry: path.resolve(__dirname, "src", "page/main/main.js"), // entry point

  devtool: "inline-source-map",
  mode: "development",
  // mode: "production",
  // mode: "none",
  devServer: {
    // magicHtml: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 5000,
    hot: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "main.html", // output html-file
      template: path.resolve(__dirname, "src", "main.ejs"), // entry html-template
      inject: true,
      chunks: ["main"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      // filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: true, // Enable to remove warnings about conflicting order
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
    assetModuleFilename: "assets/[name].[ext]",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              alias: {
                "@assets": path.resolve(__dirname, "src/assets"),
              },
            },
          },
          // "template-ejs-loader",
        ],
      },
      {
        test: /\.ejs$/i,
        use: ["html-loader", "template-ejs-loader"],
        // use: ['template-ejs-loader', 'html-loader'],
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,

          // "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        generator: {
          filename: "assets/images/[name].[id][ext]",
        },
        // type: "asset/resource",
        type: "asset/resource",
      },
    ],
  },
};
