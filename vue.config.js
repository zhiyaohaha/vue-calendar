const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  assetsDir: './static',
  outputDir: 'vueclient',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  }
}
