const path = require('path')
module.exports = {
  outputDir: 'public',
  indexPath: 'index.php',
  chainWebpack: config => {
    //config.output.set('hotUpdateChunkFilename', 'hot/hot-update.js'),
    //config.output.set('hotUpdateMainFilename', 'hot/hot-update.json'),
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'app/template'));
  },
  devServer: {
    writeToDisk: (file) => {
      return !/\.hot-update\.json/.test(file);
    },
    overlay:{
      warnings: true,
      errors: true,
    },
    proxy: {
      '^/': {
        target: 'http://localhost:8080',
        pathRewrite: {'^/' : ''}
      }
    },
  }

/*
  devServer: {
    contentBase: path.join(__dirname, 'dev-dist'),
    writeToDisk: true,
    host: 'localhost',
    port: 8080,

    proxy: {
      '^/api': {
        target: 'http://localhost:8000',
        pathRewrite: {'^/api' : ''}
      }
    },
  }
/*
  devServer: {
    index: 'index.php',
    before: function (app, server, compiler) {
      app.get('/apiu', function (req, res) {
        res.json({ custom: 'response' });
      });
    },
  }
/*
    proxy: {
      '^/': {
        target: 'http://localhost:8000',
        changeOrigin: true, // so CORS doesn't bite us.
        secure: false,
        pathRewrite: {'^/': '/api/'},
        logLevel: 'debug'
      }
    }
  }
*/
}
