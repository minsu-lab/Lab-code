const path = require('path');

module.exports = {
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
          },
      },
  };