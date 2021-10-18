class MyIterator {
    constructor(data) {
        this.index = 0
        this.data = data
    }
    
    [Symbol.iterator]() {
        return {
            next: () => {
                if(this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done:false
                    }
                } else {
                    this.index = 0
                    return {
                        done: true,
                        value: void 0
                    }
                }
            }
        }
    }
}



let iterator = new MyIterator(['This', 'is', 'iterator'])

for(const value of iterator) {
    console.log(value)
}


//generator
// function* generator(collection) {
//     let index = 0
//     while(index < collection.length) {
//         yield collection[index++]
//     }
// }

// let gen = generator(['This', 'is', 'iterator'])
// console.log(gen.next().value)
// console.log(gen.next().value)