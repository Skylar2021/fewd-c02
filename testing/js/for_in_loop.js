// for in loop
// iterates a specified variable over all the enumerable properties of an object
const toDoList = {
  'name':'Amy',
  'assigned to':'Tom',
  'monitor':'Jerry'}

for (let item in toDoList) {
  console.log(item)
}