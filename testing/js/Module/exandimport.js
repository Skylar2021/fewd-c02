module.exports.data = {
  class: 'work',
  due: 'Mid August',
  description: 'finish project'
}

let b = function(obj) {
for (let i in obj) {
  console.log(`${i} : ${obj[i]}`)
}}

// alternative: module.exports = { data, b }