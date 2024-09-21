module.exports = {
  devtools: true
}
module.exports = {
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/*/, to: '/index.html' }
      ],
    },
  },
};