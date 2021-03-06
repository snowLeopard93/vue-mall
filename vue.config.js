const path = require("path");
const webpack = require("webpack");
// const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");

// const options = {
//   antDir: path.join(__dirname, "./node_modules/ant-design-vue"),
//   stylesDir: path.join(__dirname, "./src"),
//   varFile: path.join(
//     __dirname,
//     "./node_modules/ant-design-vue/lib/style/themes/default.less"
//   ),
//   themeVariables: ["@primary-color"],
//   indexFileName: "index.html",
//   generateOnce: false,
//   lessUrl: "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
//   publicPath: "",
//   customColorRegexArray: [] // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
// };

// const themePlugin = new AntDesignThemePlugin(options);

const smp = new SpeedMeasureWebpackPlugin();

module.exports = {
  publicPath: "/vue-mall",
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#1DA57A"
          },
          javascriptEnabled: true
        }
      }
    }
  },
  configureWebpack: smp.wrap({
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
    resolve: {
      alias: {
        "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
      }
    },
    externals: {
      AMap: "AMap"
    }
  }),
  // configureWebpack: {
  //   plugins: [themePlugin, new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)],
  //   resolve: {
  //     alias: {
  //       "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
  //     }
  //   }
  // },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear();

    // 添加要替换的 loader
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        bypass: function(req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          } else {
            const name = req.path
              .split("/api/")[1]
              .split("/")
              .join("_");
            const mock = require(`./mock/${name}`);
            const result = mock(req);
            // 清除缓存
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          }
        }
      }
    }
  }
};
