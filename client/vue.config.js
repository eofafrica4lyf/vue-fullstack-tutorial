const path = require('path');

module.exports = {
  // build our files in the server directory
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000/'
      }
    }
  }
}
