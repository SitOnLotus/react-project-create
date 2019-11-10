module.exports = function() {
    const template = `
    export default (json) => {
        const arr=[];
        for(let i in json){
            arr.push(json[i]);
        }
        return arr;
    }
    `;
    return {
      template,
      dir: "utils",
      name: "json2array.js"
    };
  };
  