import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const entry = './main.js';
const output = {
  path: path.join(dirname(fileURLToPath(import.meta.url)), '/bundle'),
  filename: 'index_bundle.js'
};
const devServer = {
  inline: true,
  port: 8001
};
const module = {
  rules: [
     {
         test: /\.ttf$/,
         use: [
           {
             loader: 'ttf-loader',
             options: {
               name: './font/[hash].[ext]',
             },
           },
         ]
     },
     {
        test: /\.(jpe?g|gif|png|svg|ico)$/,
        use: [ 'file-loader' ],
     },
     {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
     },
     {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
           presets: ['@babel/react', '@babel/env']
        }
     }
  ]
};
const plugins = [
  new HtmlWebpackPlugin({
     template: './index.html',
     favicon: './assets/favicon.ico'
  }),
];

export default { entry, output, devServer, module, plugins };
