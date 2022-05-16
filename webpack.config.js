// configue v1.0 4RyzhkovPavel
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //create html
const { CleanWebpackPlugin } = require('clean-webpack-plugin')// clear all lib build before action build
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const PugPlugin = require('pug-plugin');

const PAGES_DIR = `./src/pug/pages`;
const PAGES_FOLDERS = fs.readdirSync(PAGES_DIR);
const getFiles = (dir, fileType) => {
    return dir.map(folder => {
        const folderPath = `${PAGES_DIR}/${folder}/`;
        const folderFiles = fs.readdirSync(folderPath);
        const pageFile = folderFiles.find(fileName => fileName.endsWith(`.${fileType}`));
        return pageFile;
    });
}
const PAGES = getFiles(PAGES_FOLDERS, 'pug');

module.exports = {

    //что компилировать
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    //куда компилировать
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/[name].bundle.js',
    },

    // режим developmnt/prodaction/none
     //mode: 'development', в комманде прописан

    //server 
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './build'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },

    module: {
        rules: [
            // html
            { 
                test: /\.html$/i,
                loader: "html-loader",
            },
            // CSS, PostCSS, Sass
            // sass-loader - загружает SCSS и компилирует его в CSS
            // postcss-loader — обработка CSS с помощью PostCSS
            // загрузка стилей - загрузка стилей
            {
                test: /\.(scss|css)$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // Pug
            {
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader',
                options: {
                    query: { pretty: true },
                  },
              },
        ],
    },

    //plugins
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            filename: 'main.html',
        }),
        new CleanWebpackPlugin(),
        // css create new files
        new MiniCssExtractPlugin({filename: `./css/[name].css`}),
        // copywebpack
        new CopyPlugin({
            patterns: [
                { from: `./src/fonts`, to: `./fonts` },
                { from: `./src/img`, to: `./img` },
                { from: `./src/favicons`, to: './favicons' },
            ]}),
            
        //pug
        ...PAGES.map((page, index) => new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${PAGES_FOLDERS[index]}/${page}`,
        filename: `./${page.replace(/\.pug/,'.html')}`,
        pretty: true,
        })),
        ],
}