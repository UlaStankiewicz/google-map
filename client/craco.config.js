const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CracoLessPlugin = require('craco-less');

// Don't open the browser during development
process.env.BROWSER = "none";

module.exports = {
  webpack: {
    // alias: { react: 'preact-compat', 'react-dom': 'preact-compat' },
    plugins: [
      new WebpackBar({ profile: true }),
      new CleanWebpackPlugin(),
      ...(process.env.NODE_ENV === "development"
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : []),
    ],
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { "@primary-color": "#1DA57A" },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
