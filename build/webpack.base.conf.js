'use strict'

const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')
const slugify = require('transliteration').slugify;
const hljs = require('highlight.js');
const striptags = require('./strip-tags');


/**
 * `{{ }}` => `<span>{{</span> <span>}}</span>`
 * @param  {string} str
 * @return {string}
 */
const replaceDelimiters = function (str) {
  return str.replace(/({{|}})/g, '<span>$1</span>')
};

/**
 * renderHighlight
 * @param  {string} str
 * @param  {string} lang
 */

const renderHighlight = function (str, lang) {
  if (!(lang && hljs.getLanguage(lang))) {
    return ''
  }

  try {
    return replaceDelimiters(hljs.highlight(lang, str, true).value)
  } catch (err) {}
};

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

const md = require('markdown-it')('default',{
  html: true,
  breaks: true,
  highlight: renderHighlight
})
md.use(require('markdown-it-anchor'),{
  level: 2,
  slugify: slugify,
  permalink: true,
  permalinkBefore: true
}).use(require('markdown-it-container'), 'demo', {

    validate: function(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },

    render: function (tokens, idx) {
      // var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        // var description = (m && m.length > 1) ? m[1] : '';
        var summaryContent = tokens[idx + 1].content;
        var summary = striptags.fetch(summaryContent, 'summary');
        var summaryHTML = summary ? md.render(summary) : '';

        var content = tokens[idx + 2].content;
        var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
        var script = striptags.fetch(content, 'script');
        var style = striptags.fetch(content, 'style');
        var code = tokens[idx + 2].markup + tokens[idx + 2].info + '\n' + content + tokens[idx + 2].markup;
        var codeHtml = code ? md.render(code) : '';

        var jsfiddle = { html: html, script: script, style: style };
        jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

        // opening tag
        return `<demo-box :jsfiddle="${jsfiddle}">
                  <div class="box-demo-show" slot="component">${html}</div>
                  <div slot="description">${summaryHTML}</div>
                  <div class="highlight" slot="code">${codeHtml}</div>
                `;

      } else {
        // closing tag
        return '</demo-box>\n';
      }
    }
})
md.renderer.rules.table_open = function() {
  return '<table class="table">';
};
md.renderer.rules.fence = wrap(md.renderer.rules.fence);

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

const env = process.env.NODE_ENV
const isProduction = env === 'production'

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['vue']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    mainFields: ['jsnext:main','main'],
    alias: {
      package: path.resolve(__dirname, '../package.json'),
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
      views: path.resolve(__dirname, '../src/views'),
    }
  },
  module: {
    loaders: [
      /*{
        test: /\.vue$/,
        loader: ['eslint-loader'],
        include: projectRoot,
        exclude: /node_modules/,
        enforce: 'pre'
      },*/
      /*{
        test: /\.js$/,
        loader: ['eslint-loader'],
        include: projectRoot,
        exclude: /node_modules/,
        enforce: 'pre'
      },*/
      {
        test: /\.md/,
        loader: 'vue-markdown-loader',
        options: md
      },
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: ['babel-loader?cacheDirectory'],
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        loaders: utils.cssLoaders({
          sourceMap: isProduction,
          extract: isProduction
        })
      }
    })
  ]
}

function wrap(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};