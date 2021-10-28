/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");
const lessToJS = require("less-vars-to-js");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const fs = require("fs");
const path = require("path");
const { i18n } = require("./next-i18next.config");

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/variables.less"), "utf8")
);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withAntdLess({
    reactStrictMode: true,
    modifyVars: themeVariables, // make your antd custom effective
    lessVarsFilePathAppendToEndOfContent: false,
    env: {
      API_URL: process.env.API_URL,
    },
    i18n,
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        // eslint-disable-next-line no-param-reassign
        config.externals = [
          // eslint-disable-next-line consistent-return
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === "function") {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === "function" ? [] : origExternals),
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: "null-loader",
        });
      }

      config.plugins.push(
        new AntdDayjsWebpackPlugin(),
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
        })
      );

      config.resolve.modules.push(__dirname);

      return config;
    },
  })
);
