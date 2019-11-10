module.exports = function(name) {
    const template = `
    {
        "presets": [
          "@babel/env",
          "@babel/preset-react"
        ],
        "plugins": []
      }
    `;
    return { template, dir: "", name: ".babelrc" };
  };
  