module.exports = {
  plugins: [
    require("postcss-css-variables")({
      preserve: false, // completely reduce all css vars
      variables: {
        "fc-button-bg-color": "#1DA57A",
        "fc-button-border-color": "#1DA57A",
        "fc-button-hover-bg-color": "#1DA57A",
        "fc-button-hover-border-color": "#1DA57A",
        "fc-button-active-bg-color": "#118060",
        "fc-button-active-border-color": "#118060"
      }
    })
  ]
};
