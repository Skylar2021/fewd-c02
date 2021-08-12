const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => { // get method
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use()
// ip address: port no./ local host
// example 192.168.1.168:3000

window.onload = async() =>{
await functionName()
  // call function // when the website is loading
}

// run the function after loaded
