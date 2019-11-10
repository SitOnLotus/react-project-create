module.exports = function() {
    const template = `
    *{
        margin: 0 auto;
        padding: 0;
    }
    body{
        text-align: center;
    }
    `;
    return {
      template,
      dir: "src/pages/css",
      name: "home.css"
    };
  };
  