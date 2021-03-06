module.exports = {
  test: /\.(ico|png|jpg|jpeg|gif|webp|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 8192,
        name: "assets/[name].[hash:8].[ext]",
      },
    },
  ],
};
