const rootPath = path.resolve(__dirname, '..')
const envPath = path.join(rootPath, '.env')
const entryJSPath = path.join(rootPath, 'app', 'App.js')
const htmlTemplatePath = path.join(rootPath, 'index.html')
const distPath = path.join(rootPath, 'dist')

import dotenv from 'dotenv'
dotenv.config({
  path: envPath,
})

import path from 'path'
import getenv from 'getenv'
import webpack from 'webpack'

import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const nodeEnv = getenv('NODE_ENV')

const config = {
  mode: nodeEnv === 'production'
    ? 'production'
    : 'development',
  entry: entryJSPath,
  output: {
    path: distPath,
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        use: [
          {
            loader: nodeEnv === 'production' 
              ? MiniCssExtractPlugin.loader 
              : 'style-loader',
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: rootPath }),
    new HtmlWebpackPlugin({
      title: 'FlipCard',
      template: htmlTemplatePath
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css"
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: nodeEnv,
      OPEN_WEATHER_MAP_API_KEY: getenv('OPEN_WEATHER_MAP_API_KEY'),
      OPEN_WEATHER_MAP_BASE_URL: getenv('OPEN_WEATHER_MAP_BASE_URL'),
      OPEN_WEATHER_MAP_API_VERSION: getenv('OPEN_WEATHER_MAP_API_VERSION'),
      OPEN_WEATHER_MAP_API_UNIT: getenv('OPEN_WEATHER_MAP_API_UNIT'),
      OPEN_WEATHER_MAP_API_LANG: getenv('OPEN_WEATHER_MAP_API_LANG'),
      GOOGLE_API_KEY: getenv('GOOGLE_API_KEY'),
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "initial",
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: "initial",
        }
      }
    },
  },
  devServer: {
    contentBase: distPath,
    compress: true,
    port: 3000,
  }
}

export default config
