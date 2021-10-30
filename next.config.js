const menu = require("./lib/menu.js");

module.exports = {
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      config.resolve.fallback = { fs: false }
      return config
    },
    env: {
       menu: menu.get('posts'),
   },
  }