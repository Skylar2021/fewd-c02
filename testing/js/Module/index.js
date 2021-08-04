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

// node.js version: 
// module.exports.a;
// module.exports.a = 1 (means let a = 1)
// **export before declare**
// for node.js(server side) import using require('')
// const a = require('./corresponding_file_name')

// for ES6(browser) // ES6 modules are automatically strict-mode
// export default variable = ...  // or at the end: export {variable1, variable2, function1}
// import variable from './corresponding_file_name'
// without default value -> {variable}
// most library have default value

// const babel = require('babel-cli') // import npm package

