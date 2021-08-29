let a = {
    key1: 'value 1',
    key2: 'value 2',
}
a = {
    ...a,
    key2: { name: 'skylar'},
    key3: 'value 3'
}
a = {
    ...a,
    key2: {
        ...a.key2,
        learn: 'react'
    }
}

console.log(a)