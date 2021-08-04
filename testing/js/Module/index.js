const a = require('./exandimport.js')

for(let i in a.data) {
  console.log(`${i} : ${a.data[i]}`)
}



// let select = document.querySelector('div')
// document.querySelector()
// .innerHTML()
// if (window.confirm("Do you really want to leave?")) {
//   window.open("exit.html", "Thanks for Visiting!");
// }

// node.js version: Module.exports.a;
// Module.exports.a = 1 (means let a = 1)
// **export before declare**

// for ES6(browser) import variable from './corresponding_file_name'
// without default value -> {variable}
// most library have default value

// for node.js(server side)
// const { a } = required('./corresponding_file_name')

// const babel = require('babel-cli') // import npm package

