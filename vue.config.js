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
  outputDir: 'www',
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
          'www'
        ]
      },
    },
  }
}
