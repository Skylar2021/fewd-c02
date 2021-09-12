let example = {
    arr : [],
    key1: 'value 1',
    key2: 'value 2',
}
example = {
    ...example,
    key2: { name: 'skylar'},
    key3: 'value 3'
}
example = {
    ...example,
    key2: {
        ...example.key2,
        learn: 'react'
    }
}
example = {
    ...example,
    arr : [example.key2, ...example.arr]
}
example = {
    ...example,
    arr : [...example.arr, {listen: 'music'}]
}


console.log(example)