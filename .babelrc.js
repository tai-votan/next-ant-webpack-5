module.exports = {
  presets: [["next/babel"]],
  plugins: [
    ["import", { libraryName: "antd", style: true }],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
      },
    ],
  ],
};
