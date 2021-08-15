process.stdin.setEncoding('utf8')
process.stdin.on('data', function(chunk){
  process.stdout.write('chunk:' +chunk.toString())
})

process.stdout.on('end', function(){
  process.stdout.write('end')
})