const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'app/template/assets/index.php',
      filename: 'index.php',
      title: 'Index Page',
    },
  },
  devServer: {
    writeToDisk: true,
  },
  outputDir: 'public',
  configureWebpack: {
    resolve: {
      alias: {
        '@': __dirname+'/app/template'
      }
    },
    devServer: {
      writeToDisk: (file) => {
        return !/\.hot-update\.js/.test(file);
      },

      watchOptions: {
        ignored: [
          'node_modules',
          'public'
        ]
      },
    },
  },
  chainWebpack: config => {
    config.plugins.delete('copy')
    config.plugin('copy').use(CopyPlugin, [[{
      from: __dirname+"/app/template/assets",
      to: __dirname+"/public"
    }]])
  },

}
