const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        qa: resolve(__dirname, 'qa/qa.html'),
        security: resolve(__dirname, 'security/security.html'),
        badex: resolve(__dirname, 'badex/badex.html')
      }
    }
  }
}